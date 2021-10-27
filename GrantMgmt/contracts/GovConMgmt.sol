// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
/// @custom:security-contact chris.stone@cse-corp.com

/*
    Run on Ropsten
    Load up the MetaMask account at: https://faucet.ropsten.be/
    or https://faucet.metamask.io/
    or https://faucet.dimensions.network
*/

contract GrantManager is ERC20, ERC20Burnable, Ownable, Pausable {

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    struct AwardInfo {
        string awardeeName;
        address awardeeAddr;
        string cageCode;
        string naicsCode;
        string grantNumber;
        string effectiveDate;
        string completionDate;
        uint laborCLINValue;
        uint travelCLINValue;
        uint odcValue;
        uint totalAwardValue;
        bool completed;
    }
    
    // An array of 'AwardInfo' structs
    AwardInfo[] public awards;

    constructor() ERC20("NSFXTokens", "NSFX") {

    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
    
    /*
    // Let's keep it 18 decimals for now, and round it for display in javascript
    
    function decimals() public view virtual override returns (uint8) {
      return 2;
    }
    */

    function mint(address to, uint256 amount) public onlyOwner {
        // _mint(to, amount * 10 ** decimals());
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    function createGrant(string memory _awardeeName,
            address _awardeeAddr,
            string memory _cageCode, 
            string memory _naicsCode,
            string memory _grantNumber,
            string memory _effectiveDate,
            string memory _completionDate,
            uint  _laborCLINValue,
            uint  _travelCLINValue,
            uint  _odcValue,
            uint  _totalAwardValue
        ) public {
            awards.push(AwardInfo(
            _awardeeName,
            _awardeeAddr,
            _cageCode,
            _naicsCode,
            _grantNumber,
            _effectiveDate,
            _completionDate,
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