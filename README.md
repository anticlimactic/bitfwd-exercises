# bitfwd blockchain exercises

Fork this repository. Then complete the exercises!

## Ethereum

### Tokens
A list of exercises to complete. You may find it easier to implement the tests first.

1. Implement the standard ERC20 interface as described in this [EIP](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md). Name the file in the contracts folder 'BasicToken.sol'. It must inherit ERC20.sol.
2. Implement tests using async/await (or promises) for the standard interface.
3. Implement the Ownable class for tokens in a new file called Ownable.sol. It must have a transferOwnership function.
4. Implement a Mintable class for tokens in a new file called Mintable.sol. It must inherit from Ownable.sol and BasicToken.sol. It must have a mintToken function as well as a function that toggles minting to off in the contract. (You cannot turn minting back on afterwards).
5. Implement tests using async/await (or promises) for the Mintable token interface.

`truffle compile` to compile.  
`truffle test ./testfilename.js` to test.

Sample solutions available in this [repository](https://github.com/anticlimactic/basictoken).

Useful resources:  
[Truffle Documentation](http://truffleframework.com/docs/)  
[Solidity Documentation](https://solidity.readthedocs.io/en/develop/)  
[Recursive Calling Vulnerability](https://ethereum.stackexchange.com/questions/6176/what-is-a-recursive-calling-vulnerability)
[Learning Async/Await](https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65)
