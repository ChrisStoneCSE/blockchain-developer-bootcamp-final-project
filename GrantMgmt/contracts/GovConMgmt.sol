// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
/// @custom:security-contact chris.stone@cse-corp.com
contract GrantManager is ERC20, ERC20Burnable, Ownable, Pausable {

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    struct AwardInfo {
        string awardeeName;
        string cageCode;
        string naicsCode;
        string grantNumber;
        uint laborCLINValue;
        uint travelCLINValue;
        uint odcValue;
        uint totalAwardValue;
        bool completed;
    }
    
    // An array of 'AwardInfo' structs
    AwardInfo[] public awards;

    constructor(uint256 initialSupply) ERC20("NSFTokens", "NSFD") {
        //_mint(msg.sender, 1 * 10 ** decimals());
        //_mint(msg.sender, 1);
        _mint(msg.sender, initialSupply);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
    
    
    function decimals() public view virtual override returns (uint8) {
      return 2;
    }


    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
        //override(ERC20)
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    function createGrant(string memory _awardeeName, 
            string memory _cageCode, 
            string memory _naicsCode,
            string memory _grantNumber,
            uint  _laborCLINValue,
            uint  _travelCLINValue,
            uint  _odcValue,
            uint  _totalAwardValue
        ) public {
            awards.push(AwardInfo(
            _awardeeName,
            _cageCode,
            _naicsCode,
            _grantNumber,
            _laborCLINValue,
            _travelCLINValue,
            _odcValue,
            _totalAwardValue,
            false
        ));
    }
    
    /*
    // you don't actually need this function.
    function getGrantInfo(uint _index) public view returns (string memory _awardeeName, 
            string memory _cageCode, 
            string memory _naicsCode,
            string memory _grantNumber,
            uint  _laborCLINValue,
            uint  _travelCLINValue,
            uint  _odcValue,
            uint  _totalAwardValue,
            bool completed
        ) {
        AwardInfo storage awards = awards[_index];
        return (
            AwardInfo.awardeeName,
            AwardInfo.cageCode,
            AwardInfo.naicsCode,
            AwardInfo.grantNumber,
            AwardInfo.laborCLINValue,
            AwardInfo.travelCLINValue,
            AwardInfo.odcValue,
            AwardInfo.totalAwardValue,
            AwardInfo.completed
            );
    }
    */
}