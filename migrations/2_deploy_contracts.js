var Token= artifacts.require("./Token.sol");
var Meta = artifacts.require("./Meta.sol");

module.exports = function(deployer) {
  deployer.deploy(Token);
  deployer.link(Token, Meta);
  deployer.deploy(Meta);
};
