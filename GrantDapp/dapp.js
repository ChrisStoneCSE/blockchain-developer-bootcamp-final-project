

// contract address on Ropsten:
const ssAddress = '0x2D2f6019CAc290294c05dBef7E04a73d527279ae'

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

window.addEventListener('load', function() {
  
  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      console.log('MetaMask is active')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Is Available!'

      // add in web3 here
      var web3 = new Web3(window.ethereum)

    } else {
      console.log('MetaMask is not available')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Not Available!'
      // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
      // mmDetected.appendChild(node)
    }
  } else {
    console.log('window.ethereum is not found')
    let mmDetected = document.getElementById('mm-detected')
    mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
  }
})


var web3 = new Web3(window.ethereum)

// Grabbing the button object,  

const mmEnable = document.getElementById('mm-connect');

// since MetaMask has been detected, we know
// `ethereum` is an object, so we'll do the canonical
// MM request to connect the account. 
// 
// typically we only request access to MetaMask when we
// need the user to do something, but this is just for
// an example
 
mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'})
  // grab mm-current-account
  // and populate it with the current address
  var mmCurrentAccount = document.getElementById('mm-current-account');
  mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
}

// grab the button for input to a contract:

const ssSubmit = document.getElementById('ss-input-button');

ssSubmit.onclick = async () => {
  // grab value from input
  
  const ssInputValue = document.getElementById('ss-input-box').value;
  console.log(ssInputValue)

  var web3 = new Web3(window.ethereum)

  // instantiate smart contract instance
  
  const grantMgmt = new web3.eth.Contract(ssABI, ssAddress)
  grantMgmt.setProvider(window.ethereum)

  await grantMgmt.methods.transferOwnership(ssInputValue).send({from: ethereum.selectedAddress})
}

// Get Contract Owner
const ssGetValue = document.getElementById('ss-get-value')
ssGetValue.onclick = async () => {
  var web3 = new Web3(window.ethereum)
  const grantMgmtStorage = new web3.eth.Contract(ssABI, ssAddress)
  grantMgmtStorage.setProvider(window.ethereum)
  var value = await grantMgmtStorage.methods.owner().call()
  console.log(value)
  const ssDisplayValue = document.getElementById('ss-display-value')
  ssDisplayValue.innerHTML = 'Current Contract Owner: ' + value
}

// Pause Button
const clickPauseButton = document.getElementById('pauseButton')
clickPauseButton.onclick = async () => {
	var web3 = new Web3(window.ethereum)
	const grantMgmt = new web3.eth.Contract(ssABI, ssAddress)
	grantMgmt.setProvider(window.ethereum)
	var value = await grantMgmt.methods.pause().send({from: ethereum.selectedAddress})
}

// Unpause Button
const clickUnpauseButton = document.getElementById('unpauseButton')
clickUnpauseButton.onclick = async () => {
	var web3 = new Web3(window.ethereum)
	const grantMgmt = new web3.eth.Contract(ssABI, ssAddress)
	grantMgmt.setProvider(window.ethereum)
	var value = await grantMgmt.methods.unpause().send({from: ethereum.selectedAddress})
}

// Get Paused Status
const getPauseValue = document.getElementById('checkPauseButton')
getPauseValue.onclick = async () => {
  var web3 = new Web3(window.ethereum)
  const grantMgmt = new web3.eth.Contract(ssABI, ssAddress)
  grantMgmt.setProvider(window.ethereum)
  var value = await grantMgmt.methods.paused().call()
  console.log(value)
  const pausedValue = document.getElementById('pause-value')
  pausedValue.innerHTML = value
}

// Get Token Information

const getTokenSupply = document.getElementById('checkTokenButton')
getTokenSupply.onclick = async () => {
  var web3 = new Web3(window.ethereum)
  const grantMgmt = new web3.eth.Contract(ssABI, ssAddress)
  grantMgmt.setProvider(window.ethereum)
  var valueName = await grantMgmt.methods.name().call()
  var valueSymbol = await grantMgmt.methods.symbol().call()
  var valueSupply = await grantMgmt.methods.totalSupply().call()
  //console.log('Current Supply: ' + valueSupply)
  const tokenNameValue = document.getElementById('tokenName')
  tokenName.innerHTML = 'Token Name: ' + valueName
  const tokenSymbol = document.getElementById('tokenSymbol')
  tokenSymbol.innerHTML = 'Token Symbol: ' + valueSymbol
  const totalSupplyValue = document.getElementById('totalSupply')
  totalSupply.innerHTML = 'Current Supply: ' + (valueSupply * .000000000000000001)
} 

// Mint Tokens
const clickMintButton = document.getElementById('mintTokens')
clickMintButton.onclick = async () => {
	const addressValue = document.getElementById('_receiveAddr').value;
	console.log(addressValue)
	const numberTokens = document.getElementById('_numToMint').value;
	//const bnNumberTokens = web3.utils.toBN(numberTokens)
	console.log(numberTokens)
	var web3 = new Web3(window.ethereum)
	const grantMgmt = new web3.eth.Contract(ssABI, ssAddress)
	grantMgmt.setProvider(window.ethereum)
	await grantMgmt.methods.mint(addressValue, numberTokens).send({from: ethereum.selectedAddress})
	//var value = await grantMgmt.methods.unpause().send({from: ethereum.selectedAddress})
}

// 0x645613D29062BFD2249faE7842C7eD184AaF0EA4