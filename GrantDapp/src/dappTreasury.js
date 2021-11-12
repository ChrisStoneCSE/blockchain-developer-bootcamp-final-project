// Using the 'load' event listener for Javascript to
// check if window.ethereum is available
// check who is the current owner

window.addEventListener('load', function() {
  
  if (typeof window.ethereum !== 'undefined') {
    //console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      // console.log('MetaMask is active')
	  // console.log('getting current owner')
	//   const showOwnerOnLoad = document.getElementById('whoIsOwner')
	//   showOwnerOnLoad.innerHTML = 'Current Contract Owner: ' + ethereum.selectedAddress
    } else {
      // console.log('MetaMask is not available')
		window.location.assign("Onboard.html")
	  }
  } else {
    // console.log('window.ethereum - metamask - is not found')
	window.location.assign("Onboard.html")
  }
})


window.onload = async () => {
	// const getTokenSupply = document.getElementById('checkTokenButton')
	var valueName = await grantMgmt.methods.name().call()
	var valueSymbol = await grantMgmt.methods.symbol().call()
	var valueSupply = await grantMgmt.methods.totalSupply().call()
	//console.log('Current Supply: ' + valueSupply)
	//const tokenNameValue = document.getElementById('tokenName')
	document.getElementById('tokenName').innerHTML = 'Token Name: ' + valueName
	const tokenSymbol = document.getElementById('tokenSymbol')
	tokenSymbol.innerHTML = 'Token Symbol: ' + valueSymbol
	const totalSupplyValue = document.getElementById('totalSupply')
	totalSupplyValue.innerHTML = 'Current Supply: ' + Math.round(valueSupply * .000000000000000001)

}

// Mint Tokens
if (document.getElementById('mintTokens')) {
	const clickMintButton = document.getElementById('mintTokens')
	clickMintButton.onclick = async () => {
		const mintStatus = document.getElementById('mintingComplete')
		mintStatus.innerHTML = ``
		const addressValue = document.getElementById('_receiveAddr').value;
		const numberTokens = document.getElementById('_numToMint').value;
		await grantMgmt.methods.mint(addressValue, numberTokens).send({from: ethereum.selectedAddress}).then(result => {
			mintStatus.innerHTML = `See Transaction Information by Clicking Here`
			mintStatus.href = `https://ropsten.etherscan.io/tx/${result.transactionHash}`
		})
		var updatedSupplyValue = await grantMgmt.methods.totalSupply().call()
		const setNewSupplyValue = document.getElementById('totalSupply')
		setNewSupplyValue.innerHTML = 'Current Supply: ' + Math.round(updatedSupplyValue * .000000000000000001)
		document.getElementById('_receiveAddr').value = ''
		document.getElementById('_numToMint').value = ''
	}
}