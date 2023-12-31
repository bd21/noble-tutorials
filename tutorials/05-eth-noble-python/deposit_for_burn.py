import hexbytes
from web3 import Web3
import bech32
from pprint import pprint


TOKEN_MESSENGER_CONTRACT_ADDRESS = ""
USDC_ERC20_ADDRESS = ""
RPC_URL = ""


# requires a local file named 'private_key' with a hex encoded eth private key (no 0x prefix)
def deposit_for_burn(noble_address, dydx_address):
    # initialize client
    web3 = Web3(Web3.HTTPProvider(RPC_URL))
    assert web3.is_connected()

    # initialize account, smart contract
    file = open("private_key")
    private_key = file.read().rstrip('\r\n')
    account = web3.eth.account.from_key(private_key)
    file = open("abi/TokenMessenger.json")
    abi = file.read()

    contract_address = str(web3.to_checksum_address(TOKEN_MESSENGER_CONTRACT_ADDRESS))
    contract = web3.eth.contract(address=contract_address, abi=abi)

    print("Building Ethereum depositForBurn txn...")

    mint_recipient = convert(noble_address)  # intermediate noble minting address
    print("Derived Noble address: " + noble_address)

    burn_amount = 1
    usdc_address = str(Web3.to_checksum_address(USDC_ERC20_ADDRESS))

    print("Broadcasting...")

    call_function = contract.functions.depositForBurn(
        burn_amount,
        4,  # noble
        mint_recipient,
        usdc_address
    ).build_transaction({
        "chainId": web3.eth.chain_id,
        "from": account.address,
        "nonce": web3.eth.get_transaction_count(account.address),
    })
    signed_tx = web3.eth.account.sign_transaction(call_function, private_key=private_key)

    # Send the raw transaction:
    tx_hash = web3.eth.send_raw_transaction(signed_tx.rawTransaction)
    tx_receipt = web3.eth.wait_for_transaction_receipt(tx_hash)
    # print("eth tx hash: https://etherscan.io/tx/" + tx_hash.hex())
    print("eth tx hash: https://goerli.etherscan.io/tx/" + tx_hash.hex())
    print("eth tx receipt: ")
    pprint(tx_receipt)

    # print("Minting to https://testnet.mintscan.io/noble-testnet/account/" + noble_address)
    print("Minting to https://mintscan.io/noble/account/" + noble_address)


# Convert bech32 address to a format suited for CCTP
def convert(address) -> hexbytes.HexBytes:
    result = bytearray(32)
    decoded = bech32.convertbits(
        data=bech32.bech32_decode(address)[1],
        frombits=5,
        tobits=8,
        pad=False
    )
    result[32 - len(decoded):] = decoded
    return hexbytes.HexBytes(result)


if __name__ == "__main__":
    deposit_for_burn(
        noble_address="noble1z8xgywz8v73d7f6ajtsduw6mvmvn5z27at0zp9",
        dydx_address="dydx1kgjgvl3xer7rwskp6tlynmjrd2juas6nqxn8yg"
    )
    # alternatively, you can derive the noble address
    # deposit_for_burn(
    #     dydx_address="dydx1kgjgvl3xer7rwskp6tlynmjrd2juas6nqxn8yg",
    #     noble_address=bech32.bech32_encode("noble", bech32.bech32_decode("dydx1kgjgvl3xer7rwskp6tlynmjrd2juas6nqxn8yg")[1]),
    # )
