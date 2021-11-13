// Using the 'load' event listener for Javascript to
// check if window.ethereum is available
// check who is the current owner


window.addEventListener('load', function() {
  
  if (typeof window.ethereum !== 'undefined') {
    //console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      // console.log('MetaMask is active')
	  // console.log('getting current owner')
// 	  var whoIsTheOwner = await grantMgmt.methods.owner().call()
// 	  const showOwnerOnLoad = document.getElementById('whoIsOwner')
// //	  showOwnerOnLoad.innerHTML = 'Current Contract Owner: ' + ethereum.selectedAddress
// 	  showOwnerOnLoad.innerHTML = 'Current Contract Owner: ' + whoIsTheOwner;

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
	var whoIsTheOwner = await grantMgmt.methods.owner().call()
	const showOwnerOnLoad = document.getElementById('whoIsOwner')
	showOwnerOnLoad.innerHTML = 'Current Contract Owner: ' + whoIsTheOwner;
	var valueOnLoad = await grantMgmt.methods.paused().call()
	const pausedValueOnLoad = document.getElementById('pause-value')
	//console.log(valueOnLoad)
	// do I need this next line???????????????????????????????????????????????????????????
	//const getCheckPauseValue = document.getElementById('checkPauseButton')
	const getPauseValue = document.getElementById('pauseButton')
	const getUnPauseValue = document.getElementById('unpauseButton')
	//getCheckPauseValue.style.visibility = "hidden"
	if (valueOnLoad == true) {
		pausedValueOnLoad.innerHTML = 'Contract is Paused'
		getPauseValue.style.visibility = "hidden"
		getUnPauseValue.style.visibility = "visible"
	} else {
		pausedValueOnLoad.innerHTML = 'Contract is Not Paused'
		getUnPauseValue.style.visibility = "hidden"
		getPauseValue.style.visibility = "visible"
	}
}


// Pause Button
if (document.getElementById('pauseButton')) {	
	const clickPauseButton = document.getElementById('pauseButton')
	clickPauseButton.onclick = async () => {
		var value = await grantMgmt.methods.pause().send({from: ethereum.selectedAddress})
		//console.log(value)
		var pauseValue = document.getElementById('pause-value');
		pauseValue.innerHTML = 'Contract is Paused'
		// const getCheckPauseValue = document.getElementById('checkPauseButton')
		// getCheckPauseValue.style.visibility = "hidden"
		const getPauseValue = document.getElementById('pauseButton')
		getPauseValue.style.visibility = "hidden"
		const getUnPauseValue = document.getElementById('unpauseButton')
		getUnPauseValue.style.visibility = "visible"
	}
}
// Unpause Button
if (document.getElementById('unpauseButton')) {
	const clickUnpauseButton = document.getElementById('unpauseButton')
	clickUnpauseButton.onclick = async () => {
		var value = await grantMgmt.methods.unpause().send({from: ethereum.selectedAddress})
		//console.log(value)
		var pauseValue = document.getElementById('pause-value');
		pauseValue.innerHTML = 'Contract is Not Paused'
		// const getCheckPauseValue = document.getElementById('checkPauseButton')
		// getCheckPauseValue.style.visibility = "hidden"
		const getUnPauseValue = document.getElementById('unpauseButton')
		getUnPauseValue.style.visibility = "hidden"
		const getPauseValue = document.getElementById('pauseButton')
		getPauseValue.style.visibility = "visible"
	}
}


// Ownership Functionality
if (document.getElementById('clickTransfer')) {
	const clickTransfer = document.getElementById('clickTransfer')

	clickTransfer.onclick = async () => {
		const newOwnerValue = document.getElementById('_newOwner').value;
		const ownershipChanged = document.getElementById('ownershipChanged')
		ownershipChanged.innerHTML = ``
		//console.log(newOwnerValue)
		await grantMgmt.methods.transferOwnership(newOwnerValue).send({from: ethereum.selectedAddress}).then(result => {
			//console.log(result.transactionHash)
			ownershipChanged.innerHTML = `New owner is Assigned`
			ownershipChanged.href = `https://ropsten.etherscan.io/tx/${result.transactionHash}`
// do I need await in the line below?
//			var valueOwner = grantMgmtStorage.methods.owner().call()
//			console.log(newOwnerValue)
			const showOwner = document.getElementById('whoIsOwner')
			showOwner.innerHTML = 'Current Contract Owner: ' + newOwnerValue
		})
	}
}