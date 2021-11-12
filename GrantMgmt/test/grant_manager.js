const { mnemonicToEntropy } = require("bip39");

const GrantManager = artifacts.require("GrantManager");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("GrantManager", function (accounts) {

// Test Number One
  describe("Initial deployment", async () => {
    it("Test One: deployed should assert true", async function () {
      await GrantManager.deployed();
      return assert.isTrue(true);
    });
  });

  describe("Testing of Call Functions...", async () => {
    // Test Number Two
    it("Test Two: NumberAwards has an initial value of 0", async () => {
      // get the contract that's been deployed
      const gmInstance = await GrantManager.deployed();
      //verify it has an initial value of 0
      const numAwards = await gmInstance.getNumberAwards.call()
      assert.equal(numAwards, 0, 'Initial state should be zero');
    })

    // Test Number Three
    it("Test Three: Token symbol is set to NSFC", async () => {
      // get the contract that's been deployed
      const gmInstance = await GrantManager.deployed();
      //verify it has an initial value of 0
      const nameSymbol = await gmInstance.symbol.call()
      assert.equal(nameSymbol, 'NSFC', 'Initial name should be NSFC');
    })

    // Test Number Four
    it("Test Four: Owner is set to contract number", async () => {
      // get the contract that's been deployed
      const gmInstance = await GrantManager.deployed();
      const thisAddress = accounts[0];
      //verify the contract owner is this correct account
      const nameOwner = await gmInstance.owner.call({ from: accounts[0] })
      assert.equal(nameOwner, thisAddress, 'Initial owner should be set');
    })

    // Test Number Five
    it("Test Five: Contract is not paused", async () => {
      // get the contract that's been deployed
      const gmInstance = await GrantManager.deployed();
      //const thisAddress = accounts[0];
      //verify the contract is not paused
      const pausedState = await gmInstance.paused.call({ from: accounts[0] })
      assert.equal(pausedState, false, 'Contract should not be paused.');
    })
  });
  // Test Number Six
  describe("Testing of Send Functions...", async () => {
    it("Test Six: Can Create a Grant which mints a token and increases allowance", async () => {
      // get the contract that's been deployed
      const gmInstance = await GrantManager.deployed();
      const _awardeeName = 'Chris Stone';
      const _awardeeAddr = '0x2951DD040f752DBE903cc51dE98f8f4b2D0a7Acc';
      const _grantNumber = 'Number001';
      const _naicsCode = '555555';
      const _cageCode = '1x45d';
      const _effectiveDate = '11/12/2021';
      const _completionDate = '11/11/2022';
      const _laborCLINValue = '100000';
      const _travelCLINValue = '5000';
      const _odcValue = '500';
      const _totalAwardValue = '105500';

        const createGrant = await gmInstance.createGrant(
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
        )
        /**
         * Todo: Test side effects
         */
        assert.ok(createGrant, 'createGrant function has failed.');        
      })
    });
})