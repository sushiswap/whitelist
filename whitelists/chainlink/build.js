const fs = require("fs");

const FILE_NAMES = [
  "mainnet",
  "ropsten",
  "rinkeby",
  "goerli",
  "kovan",
  "fantom",
  "fantom-testnet",
  "matic",
  "matic-testnet",
  "xdai",
  "bsc",
  "bsc-testnet",
  "avalanche",
  "avalanche-testnet",
  "heco",
  "heco-testnet",
  "harmony",
  "harmony-testnet",
  "okex",
  "okex-testnet",
];

console.log(
  JSON.stringify(
    FILE_NAMES.reduce((previousValue, currentValue) => {
      const path = `./whitelists/chainlink/src/tokens/${currentValue}`;
      try {
        if (fs.existsSync(path)) {
          return [...previousValue, ...require(path)];
        }
      } catch (error) {
        return previousValue;
      }
    }, []),
    null,
    2
  )
);
