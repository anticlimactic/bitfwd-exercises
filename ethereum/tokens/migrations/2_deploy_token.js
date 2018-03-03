const BigNumber = require('bignumber.js');
const MintableToken = artifacts.require("./MintableToken.sol");

module.exports = function(deployer, network, accounts) {
    const name = "BasicToken";
    const symbol = "BAS";
    const decimals = new BigNumber(18);
    const totalSupply = new BigNumber(1000000 * (10 ** decimals));
    deployer.deploy(MintableToken, name, symbol, decimals, totalSupply);
};
