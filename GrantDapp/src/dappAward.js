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
	// do nothing
    } else {
      // console.log('MetaMask is not available')
		window.location.assign("Onboard.html")
	}
  } else {
    // console.log('window.ethereum - metamask - is not found')
	window.location.assign("Onboard.html")
  }
})


//
	const getCreateGrant = document.getElementById('createGrant-button')
		getCreateGrant.onclick = async () => {

			const _awardeeName = document.getElementById('_awardeeName').value;
			const _awardeeAddr = document.getElementById('_awardeeAddr').value;
			const _grantNumber = document.getElementById('_grantNumber').value;
			const _naicsCode = document.getElementById('_naicsCode').value;
			const _cageCode = document.getElementById('_cageCode').value;
			const _effectiveDate = document.getElementById('_effectiveDate').value;
			const _completionDate = document.getElementById('_completionDate').value;
			const _laborCLINValue = document.getElementById('_laborCLINValue').value;
			const _travelCLINValue = document.getElementById('_travelCLINValue').value;
			const _odcValue = document.getElementById('_odcValue').value;
			const _totalAwardValue = document.getElementById('_totalAwardValue').value;
			const creationComplete = document.getElementById('creationComplete')

			await grantMgmt.methods.createGrant(
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
				).send({from: ethereum.selectedAddress}).then(result => {
				//console.log(result.transactionHash)

				document.forms[0].reset();
				creationComplete.innerHTML = `Grant Creation Successful`
				creationComplete.href = `https://ropsten.etherscan.io/tx/${result.transactionHash}`


				// mint tokens
				// grantMgmt.methods.mint(_awardeeAddr, _totalAwardValue)
				// increase allowance
				// grantMgmt.methods.increaseAllowance(_awardeeAddr, _totalAwardValue)
	
				
				// Labs: 0x71041468469E2B638B0E60CeC2a128c336E07F96

			})
		}
