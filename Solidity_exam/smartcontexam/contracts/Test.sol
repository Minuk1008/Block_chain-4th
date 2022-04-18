// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Test {
    string public constant name = "TEST Token"; // const = constant
    string public constant symbol = "TEST";
    uint public constant decimals = 18; //소수점 18자리까지
    // initial supply : 10000.0000000000000000 (초기 발행량)
    uint public constant INITIAL_SUPPLY = 10000 * 10**decimals; // WEI 단위로 바꿈
    string constant teststring = "This is not seeing string"; // public이 기본값
}