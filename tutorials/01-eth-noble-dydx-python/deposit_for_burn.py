import hexbytes
from web3 import Web3
import bech32


def deposit_for_burn():

    # initialize client
    node_url = "https://goerli.infura.io/v3/d33a2875a8e6483da6ce10fe607eba31"
    web3 = Web3(Web3.HTTPProvider(node_url))
    assert web3.is_connected()

    web3.strict_bytes_type_checking = False

    # initialize account, smart contract
    file = open("private_key")
    private_key = file.read()  # hex encoded, no 0x prefix
    account = web3.eth.account.from_key(private_key)
    file = open("abi/TokenMessengerWithMetadata.json")
    abi = file.read()

    contract_address = web3.to_checksum_address(
        "1ae045d99236365cbdc1855acd2d2cfc232d04d1")  # TokenMessengerWithMetadata
    contract = web3.eth.contract(address=contract_address, abi=abi)

    print("Building Ethereum depositForBurnWithMetadata txn...")

    channel = 20  # ibc channel for dydx
    destination_bech32_prefix_bz = bytearray(32)
    destination_bech32_prefix_bz[28:32] = b"dydx"
    destination_bech32_prefix_bz = hexbytes.HexBytes(destination_bech32_prefix_bz)

    mint_recipient = convert("noble1z8xgywz8v73d7f6ajtsduw6mvmvn5z27at0zp9")  # intermediate noble minting address
    destination_recipient = convert("dydx1kgjgvl3xer7rwskp6tlynmjrd2juas6nqxn8yg")  # final dydx destination address
    burn_amount = 1
    usdc_address = "0x07865c6e87b9f70255377e024ace6630c1eaa37f"  # goerli
    memo = hexbytes.HexBytes("")

    args = [
        channel,
        destination_bech32_prefix_bz,
        destination_recipient,
        burn_amount,
        mint_recipient,
        usdc_address,
        memo
    ]

    call_function = contract.functions.depositForBurn(args).buildTransaction({
        "chainId": web3.eth.chain_id,
        "from": account,
        "nonce": web3.eth.get_transaction_count(account.address),
    })
    signed_tx = web3.eth.account.sign_transaction(call_function, private_key=private_key)

    # Send the raw transaction:
    tx_hash = web3.eth.send_raw_transaction(signed_tx.rawTransaction)
    tx_receipt = web3.eth.wait_for_transaction_receipt(tx_hash)
    print("hash: " + str(tx_hash))
    print("receipt: " + tx_receipt)


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
    deposit_for_burn()
