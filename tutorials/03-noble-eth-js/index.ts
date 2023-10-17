import {GeneratedType, Registry} from "@cosmjs/proto-signing";

require("dotenv").config();
const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing")
const { SigningStargateClient } = require("@cosmjs/stargate")
const { stringToPath } = require("@cosmjs/crypto")
const { MsgDepositForBurn } = require("./generated/circle/cctp/v1/tx")

export const cctpTypes: ReadonlyArray<[string, GeneratedType]> = [
    ["/circle.cctp.v1.MsgDepositForBurn", MsgDepositForBurn],
];

function createDefaultRegistry(): Registry {
    return new Registry(cctpTypes)
}

const main = async() => {

    const mnemonic = process.env.MNEMONIC
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
        mnemonic,
        {
            hdPaths: [stringToPath("m/0'/1/2'/2/1000000000")],
            prefix: "noble"
        }
    );
    const [account] = await wallet.getAccounts();
    console.log(account.address)
    const client = await SigningStargateClient.connectWithSigner(
        "https://rpc.testnet.noble.strange.love",
        wallet,
        {
            registry: createDefaultRegistry()
        }
    );

    // Mint recipient 0x7846d5ef33Be01e7386F80A2Ab59cb0Bea7d40Aa, left padded with 0's to 32 bytes
    const mintRecipient = "0000000000000000000000007846d5ef33Be01e7386F80A2Ab59cb0Bea7d40Aa"
    const buffer = Buffer.from(mintRecipient, "hex")
    const mintRecipientBytes = new Uint8Array(buffer);

    const msg = {
        typeUrl: "/circle.cctp.v1.MsgDepositForBurn",
        value: {
            from: account.address,
            amount: "1",
            destinationDomain: 0,
            mintRecipient: mintRecipientBytes,
            burnToken: "uusdc"
        }
    }

    const fee = {
        amount: [
            {
                denom: "uusdc",
                amount: "0",
            },
        ],
        gas: "200000",
    };
    const memo = "";
    const result = await client.signAndBroadcast(
        account.address,
        [msg],
        fee,
        memo
    );

    console.log("Burned on Noble to to https://testnet.mintscan.io/noble-testnet/tx/" + result.transactionHash)
    console.log("Minting on Ethereum to https://goerli.etherscan.io/address/" + mintRecipient)

}

main()