const { mnemonicToEntropy } = require("bip39");

const GrantManager = artifacts.require("GrantManager");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("GrantManager", function (/* accounts */) {

// Test Number One

  it("Test One: should assert true", async function () {
    await GrantManager.deployed();
    return assert.isTrue(true);
  });

  // Test Number Two
  it("Test Two: has an initial value of 0", async () => {
    // get the contract that's been deployed
    const gmInstance = await GrantManager.deployed();

    //verify it has an initial value of 0
    const numAwards = await gmInstance.getNumberAwards.call()
    assert.equal(numAwards, 0, 'Initial state should be zero');

  })


// Mint - then Burn - then increaseAllowance?


// Test Number Three
describe("Functionality", () => {
  it("Test Three: should burn 0 tokens", async () => {
    // grab the contract
    const gmInstance = await GrantManager.deployed();
    // change the number
    await gmInstance.burn(0);

    const tokenSupply = await gmInstance.totalSupply.call();
    assert.equal(tokenSupply, 0, '${tokenSupply} was not burned.')
  })
}
// Test Number Four


  //await grantMgmt.methods.mint(addressValue, numberTokens).send({from: ethereum.selectedAddress})


// Test Number Five

  // var valueName = await grantMgmt.methods.name().call()
  // var valueSymbol = await grantMgmt.methods.symbol().call()
  // var valueSupply = await grantMgmt.methods.totalSupply().call()

  //	var valueOnLoad = await grantMgmt.methods.paused().call()



)

});
