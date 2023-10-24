# Ethereum -> Noble (Python)

There exists edge cases where a user is unable to mint their funds on Noble.  ReplaceDepositForBurn allows users to
broadcast a new transaction which contains the old message, old attestation, and optionally a mint recipient and/or destination caller.

- Call replaceDepositForBurn on Eth Goerli
- Call receiveMessage on Noble

Installation
```
pip install -r requirements.txt
```

Running
- Make sure your Ethereum Goerli account has USDC and ETH
- Add a file `private_key` containing your hex-encoded Ethereum private key (without the 0x prefix)
- Add RPC URL in deposit_for_burn.py
- Then run:
```
python3 replace_deposit_for_burn.py
```
