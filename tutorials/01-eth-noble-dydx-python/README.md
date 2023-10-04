# Ethereum -> Noble -> Dydx

- Call depositForBurnWithMetadata on Eth Goerli
- CCTP Relayer mints + forwards this automatically to dydx

Installation
```
pip install -r requirements.txt
```

Running
- Make sure your Ethereum Goerli account has USDC and ETH
- Add a file containing your hex-encoded Ethereum private key
- Add RPC URL in deposit_for_burn.py
- Then run:
```
python3 deposit_for_burn.py
```

The Eth Goerli -> Noble CCTP relayer and Noble -> dydx IBC relayers should pick these messages up automatically.
