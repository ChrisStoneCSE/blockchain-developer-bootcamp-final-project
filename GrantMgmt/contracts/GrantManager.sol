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

    /**
     * @dev Set who may pause the contract
     */
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    /**
     * @dev Create a struct to store grant awards
     */
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
    

    /**
     * @dev Create an array of 'AwardInfo' structs
     */
    AwardInfo[] public awards;

    constructor() ERC20("NSFCTokens", "NSFC") {

    }

    /**
     * @dev Returns the number of awards in the AwardInfo array
     */
    function getNumberAwards() public view returns (uint) {
        return awards.length;
    }
    /**
     * @dev pauses the contract
     */
    function pause() public onlyOwner {
        _pause();
    }

    /**
     * @dev unpauses the contract
     */
    function unpause() public onlyOwner {
        _unpause();
    }
    
    /**
    // saving this for when I'm ready to shadow USD
    // Let's keep it 18 decimals for now, and round it for display in javascript
    
    function decimals() public view virtual override returns (uint8) {
      return 2;
    }
    
     */

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 10 ** decimals());
        // _mint(to, amount);
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     */
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    /**
     * @dev creates a new grant and pushes the struct to the end of the awards array
     * only the contract Owner can create a new grant
     */
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
        ) public onlyOwner {
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

        mint(_awardeeAddr, _totalAwardValue);
        increaseAllowance(_awardeeAddr, _totalAwardValue);

    }
    




}