const BigNumber = require('bignumber.js');
const BasicToken = artifacts.require("MintableToken");

contract('BasicToken', function(accounts)
{
  it("Test initial balance of contract.", async () =>
  {
    // Checks that the contract is initialised with the right balance.
  });

  it("Test successful transfer of tokens.", async () =>
  {
    // Tests the successful transfer of tokens.
    // Checks balances before token transfer.
    // Checks balances after token transfer.
  });

  it("Test approve, allowance, transferFrom functionality.", async () =>
  {
    // Tests approve, allowance and transferFrom functionality.
    // Checks allowance is set successfully.
    // Checks transferFrom withdrew the correct amount of money.
    // Checks transferFrom deposited the correct amount of money.
    // Check the allowance was updated successfully. 
  })
})
