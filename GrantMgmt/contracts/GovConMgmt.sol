// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract NSFTreasury {

    // State variable to store a number
    uint public num;

    // You need to send a transaction to write to a state variable.
    function set(uint _num) public {
        num = _num;
    }

    // You can read from a state variable without sending a transaction.
    function get() public view returns (uint) {
        return num;
    }


}
