require("dotenv").config();
const { Web3, eth} = require('web3')
const { bech32 } = require('bech32')

const tokenMessenger = require('./abis/TokenMessenger.json');
const usdcAbi = require('./abis/Usdc.json');

const waitForTransaction = async(web3, txHash) => {
    let transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
    while(transactionReceipt != null && transactionReceipt.status === 'FALSE') {
        transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
        await new Promise(r => setTimeout(r, 4000));
    }
    return transactionReceipt;
}

/**
 * Calls DepositForBurnWithCaller and then ReplaceDepositForBurn, which removes the
 * destination caller and changes the mint recipient.
 *
 * The ETH -> Noble relayer won't automatically mint because of the destination caller
 */
const main = async() => {
    const web3 = new Web3(process.env.ETH_TESTNET_RPC);

    // Add ETH private key used for signing transactions
    const ethSigner = web3.eth.accounts.privateKeyToAccount(process.env.ETH_PRIVATE_KEY);
    web3.eth.accounts.wallet.add(ethSigner);

    // Testnet Contract Addresses
    const ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS = "0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8";
    const USDC_ETH_CONTRACT_ADDRESS = "0x07865c6e87b9f70255377e024ace6630c1eaa37f";

    // initialize contracts using address and ABI
    const ethTokenMessengerContract = new web3.eth.Contract(tokenMessenger, ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, {from: ethSigner.address});
    const usdcEthContract = new web3.eth.Contract(usdcAbi, USDC_ETH_CONTRACT_ADDRESS, {from: ethSigner.address});

    // Noble destination address
    getAttestation
    // Amount that will be transferred
    const amount = 1;

    const firstNobleAddress = "noble1dfmfm0ak4yx72ec3qtf49pdyztg0jclgpfntvv"
    const firstMintRecipient = bech32.fromWords(bech32.decode(firstNobleAddress).words)
    const firstMintRecipientBytes = new Uint8Array(32);
    firstMintRecipientBytes.set(firstMintRecipient, 32 - firstMintRecipient.length);
    const firstMintRecipientHex = web3.utils.bytesToHex(firstMintRecipientBytes)
    
    // STEP 1: Approve TokenMessenger contract to withdraw from our active eth address
    const approveTxGas = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).estimateGas()
    const approveTx = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).send({gas: approveTxGas})
    const approveTxReceipt = await waitForTransaction(web3, approveTx.transactionHash);
    console.log(approveTxReceipt)

    // STEP 2: Burn USDC
    const burnTxGas = await ethTokenMessengerContract.methods.depositForBurnWithCaller(
        amount,
        4,
        firstMintRecipientHex,
        USDC_ETH_CONTRACT_ADDRESS,
        "destination caller" // TODO
    ).estimateGas( {from: ethSigner.address});

    const burnTx = await ethTokenMessengerContract.methods.depositForBurn(
        amount,
        4,
        firstMintRecipientHex,
        USDC_ETH_CONTRACT_ADDRESS,
        "destination caller" // TODO
    ).send({gas: burnTxGas});

    const burnTxReceipt = await waitForTransaction(web3, burnTx.transactionHash);
    console.log(burnTxReceipt)

    // STEP 3: Broadcast ReplaceDepositForBurn
    const burnAttestation = getAttestation(burnTxReceipt)


    // a separate, unrelated address
    const secondNobleAddress = "noble1dmyk9cpdkjuh7j62qhchz2r6rhzj2cjlkkk5yn"
    const secondMintRecipient = bech32.fromWords(bech32.decode(secondNobleAddress).words)
    const secondMintRecipientBytes = new Uint8Array(32);
    secondMintRecipientBytes.set(secondMintRecipient, 32 - secondMintRecipient.length);
    const secondMintRecipientHex = web3.utils.bytesToHex(secondMintRecipientBytes);

    // an empty destination caller
    const newDestinationCaller = new Uint8Array(32);

    const replaceTxGas = await ethTokenMessengerContract.methods.replaceDepositForBurn(
        burnMessageBytes,
        burnAttestation,
        newDestinationCaller,
        secondMintRecipientHex
    ).estimateGas({from: ethSigner.address})

    const replaceTx = await ethTokenMessengerContract.methods.replaceDepositForBurn(
        burnMessageBytes,
        burnAttestation,
        newDestinationCaller,
        secondMintRecipientHex
    ).send({gas: replaceTxGas});

    const replaceTxReceipt = await waitForTransaction(web3, burnTx.transactionHash);
    console.log(replaceTxReceipt)

    // STEP 4: Fetch attestation signature for replaceMessage
    const replaceAttestation = getAttestation(replaceTxReceipt)

    // STEP 5: Manually broadcast replaceDepositForBurn on Noble


    console.log("Funds will be minted to https://testnet.mintscan.io/noble-testnet/account/" + secondNobleAddress)

};

const getAttestation = async(txReceipt) => {
    const eventTopic = web3.utils.keccak256('MessageSent(bytes)')
    const log = txReceipt.logs.find((l) => l.topics[0] === eventTopic)
    const messageBytes = web3.eth.abi.decodeParameters(['bytes'], log.data)[0]
    const messageHash = web3.utils.keccak256(messageBytes);

    let attestationResponse = {status: 'pending'};
    while(attestationResponse.status != 'complete') {
        const response = await fetch(`https://iris-api-sandbox.circle.com/attestations/${messageHash}`);
        attestationResponse = await response.json()
        await new Promise(r => setTimeout(r, 2000));
    }

    const attestationJson = await attestationResponse.json()
    return attestationJson.attestation;
}

main()