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


window.onload = async () => {
		var valueAwardsNumber = await grantMgmt.methods.getNumberAwards().call()

		const awardsNumberValue = document.getElementById('awardsNumber')
		awardsNumberValue.innerHTML = 'Number of Awards: ' + valueAwardsNumber

		// xxxxxxxxxxxxxxxxxxxxxxxxxxxx

		var tbodyRef = document.getElementById('grantsTable').getElementsByTagName('tbody')[0];


		//Array.map((item,index,array) -> {do stuff with item})
		for (let i = 0; i < valueAwardsNumber; i++) {
			//console.log(i);
			var valueAwardItem = await grantMgmt.methods.awards(i).call()
			//Object.values(valueAwardItem).forEach(val => console.log(val));
			let arr = valueAwardItem;

			// Insert a row at the end of table
			var newRow = tbodyRef.insertRow();

			var newVendorCell = newRow.insertCell();
			var newText = document.createTextNode(arr[0]);
			newVendorCell.appendChild(newText);

			var newGrantCell = newRow.insertCell();
			var newText2 = document.createTextNode(arr[4]);
			var aInfo = document.createElement('a');
			aInfo.setAttribute('href', 'ViewGrants.html?indexIs=' + i); // put URL here
			aInfo.setAttribute('html', "info");
			aInfo.setAttribute('target', "_self");
			aInfo.appendChild(newText2);
			newGrantCell.appendChild(aInfo);

			var newValueCell = newRow.insertCell();
			var newText3 = document.createTextNode('$' + arr[10]);
			newValueCell.appendChild(newText3);

			var newLinkCell = newRow.insertCell();
			var newText4 = document.createTextNode("Details");
			var a = document.createElement('a');
			a.setAttribute('href', 'https://ropsten.etherscan.io/address/' + arr[1] + '#tokentxns');
			a.setAttribute('html', "test");
			a.setAttribute('target', "_blank");
			a.appendChild(newText4);
			newLinkCell.appendChild(a);


			const urlParams = new URLSearchParams(window.location.search);
			const myParam = urlParams.get('indexIs');
			
			if (urlParams.get('indexIs')) {
			
					//	console.log('Page is loaded...');
			
					const awardIDValue = myParam;
			
					var valueAwardInfo = await grantMgmt.methods.awards(awardIDValue).call()
			
						let arr = valueAwardInfo;
			
						document.getElementById('awardeeName').innerHTML = 'Awardee: ' + arr[0];
						document.getElementById('awardeeAddr').innerHTML = 'Public Key: ' + arr[1];
						document.getElementById('cageCode').innerHTML = 'CAGE Code: ' + arr[2];
						document.getElementById('naicsCode').innerHTML = 'NAICS Code: ' + arr[3];
						document.getElementById('grantNumber').innerHTML = 'Grant Number: ' + arr[4];
						document.getElementById('effectiveDate').innerHTML = 'Effective Date: ' + arr[5];
						document.getElementById('completionDate').innerHTML = 'Completion Date: ' + arr[6];
						document.getElementById('laborCLINValue').innerHTML = 'Labor CLIN Value: $' + arr[7];
						document.getElementById('travelCLINValue').innerHTML = 'Travel CLIN Value: $' + arr[8];
						document.getElementById('odcValue').innerHTML = 'ODC CLIN Value: $' + arr[9];
						document.getElementById('totalAwardValue').innerHTML = 'Total Award Value: $' + arr[10];
						document.getElementById('completed').innerHTML = 'Completed: ' + arr[11];
			
					//})
			
				} else {
					const getDetailsForm = document.getElementById('awardDetailsForm')
					getDetailsForm.style.visibility = "hidden"
					//console.log('should be hidden');
				}



		}

		// const urlParams = new URLSearchParams(window.location.search);
		// const myParam = urlParams.get('indexIs');
		
		// if (urlParams.get('indexIs')) {
		
			
		// 			console.log('Page is loaded...');
		
		// 		const awardIDValue = myParam;
		
		// 		var valueAwardInfo = await grantMgmt.methods.awards(awardIDValue).call()
		
		// 			let arr = valueAwardInfo;
		
		// 			document.getElementById('awardeeName').innerHTML = 'Awardee: ' + arr[0];
		// 			document.getElementById('awardeeAddr').innerHTML = 'Public Key: ' + arr[1];
		// 			document.getElementById('cageCode').innerHTML = 'CAGE Code: ' + arr[2];
		// 			document.getElementById('naicsCode').innerHTML = 'NAICS Code: ' + arr[3];
		// 			document.getElementById('grantNumber').innerHTML = 'Grant Number: ' + arr[4];
		// 			document.getElementById('effectiveDate').innerHTML = 'Effective Date: ' + arr[5];
		// 			document.getElementById('completionDate').innerHTML = 'Completion Date: ' + arr[6];
		// 			document.getElementById('laborCLINValue').innerHTML = 'Labor CLIN Value: $' + arr[7];
		// 			document.getElementById('travelCLINValue').innerHTML = 'Travel CLIN Value: $' + arr[8];
		// 			document.getElementById('odcValue').innerHTML = 'ODC CLIN Value: $' + arr[9];
		// 			document.getElementById('totalAwardValue').innerHTML = 'Total Award Value: $' + arr[10];
		// 			document.getElementById('completed').innerHTML = 'Completed: ' + arr[11];
		
		// 		//})
		
		// 	}



		// xxxxxxxxxxxxxxxxxxxxxxxxxxxx

}

//
//
//
//
// My dApp behavior is detailed below...
//
//
//
//
// if (document.getElementById('checkAwards')) {
// 	const getTokenSupply = document.getElementById('checkAwards')
// 	getTokenSupply.onclick = async () => {

// 	var valueAwardsNumber = await grantMgmt.methods.getNumberAwards().call()
// 	// console.log('Number of Awards: ' + valueAwardsNumber)
// 	const awardsNumberValue = document.getElementById('awardsNumber')
// 	awardsNumberValue.innerHTML = 'Number of Awards: ' + valueAwardsNumber
// 	} 
// } else {
// 	// console.log('Check Awards Button does not exist.')
// }


// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('indexIs');
// console.log('step 1: ' + myParam);


// if (urlParams.get('indexIs')) {

// 	console.log('step 2: ' + myParam);

// 	// const getAwardInfo = document.getElementById('getAwardInfo')
// 	// getAwardInfo.onclick = async () => {
// 		window.onload = async () => {
	
// 			console.log('Page is loaded...');

// 		const awardIDValue = myParam;

// 		var valueAwardInfo = await grantMgmt.methods.awards(awardIDValue).call()

// 			let arr = valueAwardInfo;

// 			document.getElementById('awardeeName').innerHTML = 'Awardee: ' + arr[0];
// 			document.getElementById('awardeeAddr').innerHTML = 'Public Key: ' + arr[1];
// 			document.getElementById('cageCode').innerHTML = 'CAGE Code: ' + arr[2];
// 			document.getElementById('naicsCode').innerHTML = 'NAICS Code: ' + arr[3];
// 			document.getElementById('grantNumber').innerHTML = 'Grant Number: ' + arr[4];
// 			document.getElementById('effectiveDate').innerHTML = 'Effective Date: ' + arr[5];
// 			document.getElementById('completionDate').innerHTML = 'Completion Date: ' + arr[6];
// 			document.getElementById('laborCLINValue').innerHTML = 'Labor CLIN Value: $' + arr[7];
// 			document.getElementById('travelCLINValue').innerHTML = 'Travel CLIN Value: $' + arr[8];
// 			document.getElementById('odcValue').innerHTML = 'ODC CLIN Value: $' + arr[9];
// 			document.getElementById('totalAwardValue').innerHTML = 'Total Award Value: $' + arr[10];
// 			document.getElementById('completed').innerHTML = 'Completed: ' + arr[11];

// 		//})

// 	}
// } else {
// 	// console.log('Get Awards Info Button does not exist.')
// }

