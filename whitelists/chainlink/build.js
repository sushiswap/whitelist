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

const tokens = FILE_NAMES.reduce((previousValue, currentValue) => {
  const path = `./src/tokens/${currentValue}.js`;
  try {
    if (fs.existsSync(path)) {
      return [...previousValue, ...require(path)];
    }
    return previousValue;
  } catch (error) {
    throw error;
  }
}, []);

console.log(JSON.stringify(tokens, null, 2));
