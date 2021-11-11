// import 'ses';
// lockdown();
// hardens the entire surface of the JS environment
// be sure to npm install ses

// contract address on Ropsten:
const ssAddress = '0x18A30cbC6E692f0C6e3076fE15e019431EBE85DB'

// add contract ABI from Remix:

const ssABI =
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "PAUSER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "awards",
		"outputs": [
			{
				"internalType": "string",
				"name": "awardeeName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "awardeeAddr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "cageCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "naicsCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "grantNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "effectiveDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "completionDate",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "laborCLINValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "travelCLINValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "odcValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalAwardValue",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "completed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_awardeeName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_awardeeAddr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_cageCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_naicsCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_grantNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_effectiveDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_completionDate",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_laborCLINValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_travelCLINValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_odcValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalAwardValue",
				"type": "uint256"
			}
		],
		"name": "createGrant",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberAwards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

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


var web3 = new Web3(window.ethereum)
const grantMgmt = new web3.eth.Contract(ssABI, ssAddress)
grantMgmt.setProvider(window.ethereum)

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
					console.log('should be hidden');
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

