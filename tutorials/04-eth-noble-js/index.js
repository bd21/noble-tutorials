require("dotenv").config();
const { Web3 } = require('web3')
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
    const nobleAddress = "noble1ccsg0q2xrtfpqjfmzk8kaszxx8srexc53h9npf"
    const mintRecipient = bech32.fromWords(bech32.decode(nobleAddress).words)

    // Amount that will be transferred
    const amount = 2;

    const mintRecipientBytes = new Uint8Array(32);
    mintRecipientBytes.set(mintRecipient, 32 - mintRecipient.length);
    const mintRecipientHex = web3.utils.bytesToHex(mintRecipientBytes)

    // STEP 1: Approve TokenMessenger contract to withdraw from our active eth address
    const approveTxGas = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).estimateGas()
    const approveTx = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_CONTRACT_ADDRESS, amount).send({gas: approveTxGas})
    const approveTxReceipt = await waitForTransaction(web3, approveTx.transactionHash);
    console.log(approveTxReceipt)

    // STEP 2: Burn USDC
    const burnTxGas = await ethTokenMessengerContract.methods.depositForBurn(
        amount,
        4,
        mintRecipientHex,
        USDC_ETH_CONTRACT_ADDRESS
    ).estimateGas( {from: ethSigner.address});

    const burnTx = await ethTokenMessengerContract.methods.depositForBurn(
        amount,
        4,
        mintRecipientHex,
        USDC_ETH_CONTRACT_ADDRESS
    ).send({gas: burnTxGas});

    const burnTxReceipt = await waitForTransaction(web3, burnTx.transactionHash);
    console.log(burnTxReceipt)
    console.log("Minting on Noble to https://testnet.mintscan.io/noble-testnet/account/" + nobleAddress)

};

main()