require("dotenv").config();
const { Web3 } = require('web3')
const { bech32 } = require('bech32')

const tokenMessengerWithMetadataAbi = require('./abis/TokenMessengerWithMetadataWrapper.json');
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
    const ETH_TOKEN_MESSENGER_WITH_METADATA_WRAPPER_CONTRACT_ADDRESS = "0x11b655ccedb554d04adf499cd146b36e96a587b2";
    const USDC_ETH_CONTRACT_ADDRESS = "0x07865c6e87b9f70255377e024ace6630c1eaa37f";

    // initialize contracts using address and ABI
    const ethTokenMessengerWithMetadataContract = new web3.eth.Contract(tokenMessengerWithMetadataAbi, ETH_TOKEN_MESSENGER_WITH_METADATA_WRAPPER_CONTRACT_ADDRESS, {from: ethSigner.address});
    const usdcEthContract = new web3.eth.Contract(usdcAbi, USDC_ETH_CONTRACT_ADDRESS, {from: ethSigner.address});

    // Noble destination address
    const destinationPrefix = new TextEncoder().encode("dydx");
    const nobleAddress = "noble1dfmfm0ak4yx72ec3qtf49pdyztg0jclgpfntvv"
    const dydxAddress = "dydx1npm0nl9aas3w2vf4v25v6pjmuaut0ypt453tgc"
    const mintRecipient = bech32.fromWords(bech32.decode(nobleAddress).words)
    const destRecipient = bech32.fromWords(bech32.decode(dydxAddress).words)

    // Amount that will be transferred
    const amount = 1;
    const channel = 20; // dydx

    const destinationBech32PrefixBytes = new Uint8Array(32);
    destinationBech32PrefixBytes.set(destinationPrefix, 32 - destinationPrefix.length);
    const destinationBech32PrefixHex = web3.utils.bytesToHex(destinationBech32PrefixBytes)

    const mintRecipientBytes = new Uint8Array(32);
    mintRecipientBytes.set(mintRecipient, 32 - mintRecipient.length);
    const mintRecipientHex = web3.utils.bytesToHex(mintRecipientBytes)

    const destRecipientBytes = new Uint8Array(32);
    destRecipientBytes.set(destRecipient, 32 - destRecipient.length);
    const destRecipientHex = web3.utils.bytesToHex(destRecipientBytes)

    const destinationCallerBytes = new Uint8Array(32);
    const destinationCallerHex = web3.utils.bytesToHex(destinationCallerBytes)

    const memo = new Uint8Array(1)
    const memoHex = web3.utils.bytesToHex(memo)

    // STEP 1: Approve TokenMessengerWithMetadata contract to withdraw from our active eth address
    const approveTxGas = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_WITH_METADATA_WRAPPER_CONTRACT_ADDRESS, amount).estimateGas()
    const approveTx = await usdcEthContract.methods.approve(ETH_TOKEN_MESSENGER_WITH_METADATA_WRAPPER_CONTRACT_ADDRESS, amount).send({gas: approveTxGas})
    const approveTxReceipt = await waitForTransaction(web3, approveTx.transactionHash);
    console.log(approveTxReceipt)

    // STEP 2: Burn USDC
    const burnTxGas = await ethTokenMessengerWithMetadataContract.methods.depositForBurnNoble(
        channel,
        destinationBech32PrefixHex,
        destRecipientHex,
        amount,
        mintRecipientHex,
        USDC_ETH_CONTRACT_ADDRESS,
        destinationCallerHex,
        memoHex,
    ).estimateGas( {from: ethSigner.address});

    const burnTx = await ethTokenMessengerWithMetadataContract.methods.depositForBurnNoble(
        channel,
        destinationBech32PrefixHex,
        destRecipientHex,
        amount,
        mintRecipientHex,
        USDC_ETH_CONTRACT_ADDRESS,
        destinationCallerHex,
        memoHex,
    ).send({gas: burnTxGas});

    const burnTxReceipt = await waitForTransaction(web3, burnTx.transactionHash);
    console.log(burnTxReceipt)
    console.log("Minting on Noble to https://testnet.mintscan.io/noble-testnet/account/" + nobleAddress)
    console.log("Minting on Noble to https://testnet.mintscan.io/dydx-testnet/account/" + dydxAddress)

};

main()