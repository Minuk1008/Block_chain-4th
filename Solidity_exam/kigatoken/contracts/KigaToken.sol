// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KigaToken is ERC20 {
    uint public INITIAL_SUPPLY = 12000000;

    constructor() ERC20("KigaToken", "KGT") {
        _mint(msg.sender, INITIAL_SUPPLY * 10 **(uint(decimals())));
    }
}