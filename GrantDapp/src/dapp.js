// Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', function() {
  
  if (typeof window.ethereum !== 'undefined') {
    //console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      //console.log('MetaMask is active')
	  if (document.getElementById('mm-detected')) {	
		let mmDetected = document.getElementById('mm-detected')
		mmDetected.innerHTML += 'Your Web3 wallet is active! You are now connected to Smart Contract: <br><br><br>' + ssAddress
		const mmConnectButton = document.getElementById('mm-connect');
		if (ethereum.selectedAddress !== null) {
			mmConnectButton.style.visibility = "hidden"
		} else {
			mmConnectButton.style.visibility = "visible"
		}
	  }
      // add in web3 here
      var web3 = new Web3(window.ethereum)

    } else {
      //console.log('MetaMask is not available')
	  if (document.getElementById('mm-detected')) {	
		let mmDetected = document.getElementById('mm-detected')
		mmDetected.innerHTML += 'MetaMask is not available! Please install.'
	  }
	}
  } else {
    //console.log('window.ethereum - metamask - is not found')
	if (document.getElementById('mm-detected')) {	
		let mmDetected = document.getElementById('mm-detected')
		mmDetected.innerHTML += '<p>MetaMask is not available! Ensure you are using a Web3 enabled browser such as Brave or Chrome.<p>'
	}
  }
})
		
// Grabbing the button object,  

//if (document.getElementById('mm-connect')) {	
	const mmEnable = document.getElementById('mm-connect');
//} else {
//	console.log('connect button is not found')
//}

// since MetaMask has been detected, we know
// `ethereum` is an object, so we'll do the canonical
// MM request to connect the account. 
// 
// typically we only request access to MetaMask when we
// need the user to do something, but this is just for
// an example
if (document.getElementById('mm-current-account')) {	
	mmEnable.onclick = async () => {
	await ethereum.request({ method: 'eth_requestAccounts'})
	// grab mm-current-account
	// and populate it with the current address
	var mmCurrentAccount = document.getElementById('mm-current-account');
	mmCurrentAccount.innerHTML = 'Currently connected with account: ' + ethereum.selectedAddress
	const mmConnectButton = document.getElementById('mm-connect');
	mmConnectButton.style.visibility = "hidden"
	}
}
// grab the button for input to a contract:
if (document.getElementById('ss-get-value')) {	
	const ssSubmit = document.getElementById('ss-input-button');

	ssSubmit.onclick = async () => {
	// grab value from input
	
	const ssInputValue = document.getElementById('ss-input-box').value;
	console.log(ssInputValue)


	
	await grantMgmt.methods.transferOwnership(ssInputValue).send({from: ethereum.selectedAddress})
	}
}

// Get Contract Owner
if (document.getElementById('ss-get-value')) {	
	const ssGetValue = document.getElementById('ss-get-value')
	ssGetValue.onclick = async () => {
		var value = await grantMgmtStorage.methods.owner().call()
		console.log(value)
		const ssDisplayValue = document.getElementById('ss-display-value')
		ssDisplayValue.innerHTML = 'Current Contract Owner: ' + value
	}
}