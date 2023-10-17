# Ethereum -> Noble -> Dydx (Javascript)

Installing
```
npm install
```

Create .env
```
MNEMONIC="fence panther..."
```

Get testnet USDC
```
http://34.75.238.236/request?address=%3Cyour%20noble%20address%20here%3E&chain=grand-1
```

(optional) Generating Noble messages
```
# install protoc, then run
npm run codegen
```

Running:
```
npm run burn
```

The Noble -> ETH CCTP relayer should pick up these messages automatically.


