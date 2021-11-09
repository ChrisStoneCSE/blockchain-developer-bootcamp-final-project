var GrantManager = artifacts.require("./GrantManager.sol");

module.exports = function(deployer) {
  deployer.deploy(GrantManager);
};