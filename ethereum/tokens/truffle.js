const HDWalletProvider = require("truffle-hdwallet-provider");
const config = require('./config.js');

const infuraApiKey = "";
const url = "https://ropsten.infura.io/" + infuraApiKey;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: new HDWalletProvider(config.seed, url),
      network_id: 3,
      gas: 4e6,
      gasPrice: 30000000000
    }
  }
};
