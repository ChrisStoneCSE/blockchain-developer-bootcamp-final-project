const { mnemonicToEntropy } = require("bip39");

const GrantManager = artifacts.require("GrantManager");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("GrantManager", function (accounts) {

// Test Number One

  it("Test One: deployed should assert true", async function () {
    await GrantManager.deployed();
    return assert.isTrue(true);
  });

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

  // Mint

  // createGrant

 // describe("Functionality", () => {
    // it("Test Three: should mint 100 tokens", async () => {
    //   // grab the contract
    //   const gmInstance = await GrantManager.deployed();
    //   // change the number

    //   await gmInstance.mint(0x71041468469E2B638B0E60CeC2a128c336E07F96, 100).send({from: ethereum.selectedAddress}).then(result => {
        
    //   })
    //   assert.equal(tokenSupply, 100, 'Token was not minted.')
    // })

  })
 // })



// )

// });
