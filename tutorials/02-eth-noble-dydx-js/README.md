# Ethereum -> Noble -> Dydx (Javascript)

Installing
```
npm install
```

Example .env
```
ETH_TESTNET_RPC=https://goerli.infura.io/v3/<key>
ETH_PRIVATE_KEY=0xabc123456...
```

Running:
```
node index.js
```

The Eth Goerli -> Noble CCTP relayer and Noble -> dydx IBC relayers should pick these messages up automatically.