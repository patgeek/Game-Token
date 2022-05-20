pragma solidity  >=0.4.22 <0.9.0;


import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";


contract GameToken is ERC20, ERC20Detailed{


constructor(string memory _name, string memory _symbol, uint8 _decimals)
   ERC20Detailed(_name, _symbol, _decimals)
public{}


 function mint(address to, uint256 value) public  returns (bool) {
      _mint(to, value);
      return true;
  }
}
