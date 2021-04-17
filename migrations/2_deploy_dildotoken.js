const DildoToken = artifacts.require('DildoToken')

module.exports = async function(deployer, network, accounts) {
  // Deploy Dildo Token
  await deployer.deploy(DildoToken)
  const dappToken = await DildoToken.deployed()
}
