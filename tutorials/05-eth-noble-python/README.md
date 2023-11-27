# Ethereum -> Noble (Python)

- Call depositForBurn on Ethereum mainnet
- (background) CCTP Relayer mints to dydx

Installation
```
pip install -r requirements.txt
```

Running
- Make sure your Ethereum account has USDC and ETH
- Add a file `private_key` containing your hex-encoded Ethereum private key (without the 0x prefix)
- Add RPC URL in deposit_for_burn.py
- Then run:
```
python3 deposit_for_burn.py
```
