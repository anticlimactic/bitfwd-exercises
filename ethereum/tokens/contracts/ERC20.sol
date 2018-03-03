pragma solidity ^0.4.19;

contract ERC20
{
    // Getters are pregenerated for public types
    /* function name() constant public returns (string name);
    function symbol() constant public returns (string symbol);
    function decimals() constant public returns (uint8 decimals);
    function totalSupply() constant public returns (uint256 totalSupply); */
    function balanceOf(address _owner) constant public returns (uint256 balance);
    function transfer(address _to, uint256 _value) public returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);
    function approve(address _spender, uint256 _value) public returns (bool success);
    function allowance(address _owner, address _spender) constant public returns (uint256 remaining);

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}
