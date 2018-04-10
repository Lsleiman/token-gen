pragma solidity ^0.4.18;

import "./TokenMngr.sol";

contract Meta {

    address public owner;

    function metaBrain() public {
        owner = msg.sender;
    }
    // function handling payment for service
    function checkout(uint _amount, address _serprov) public {
       require(msg.sender == owner);
       _serprov.transfer(_amount);
   }

    event TokenCreated(address _token);

    function issueCoin(
        string _symbol,
        string _name,
        string _description,
        uint   _totalSupply
    ) public payable returns (Token token)
    {

        token = new Token(
            _symbol,
            _name,
            _description,
            _totalSupply
        );

        TokenCreated(token);
        return token;
    }


}
