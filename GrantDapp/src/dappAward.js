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

//
//
//
//
// My dApp behavior is detailed below...
//
//
//
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
				// increase allowance
				// Labs: 0x71041468469E2B638B0E60CeC2a128c336E07F96

			})
		}
