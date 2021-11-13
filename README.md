
**Title: Blockchain Dev Bootcamp Final Project**

**Student: Christopher Stone**

# 1. Project Description

**Project Name**: Grant Delivery Workflow

**Summary**: This project will allow a Contracting Officer (CO) to award a "grant" to a Company. The Company Point of Contact (CPOC) can accept the grant award and submit a monthly report during the period of the grant. The CO reviews the monthly report, and authorizes that month's payment for the work performed.

**Steps**:

1. CO awards grant with:
 - Company Name
 - Title and Description of contract
 - Total funding
 - Number of Months
 - CLINs and Quantity

2. CO funds smart contract with award value.

3. Company POC receives award notice.

4. CPOC counter signs the contract award to accept.

5. CO countersigns to fully execute the contract.

6. CPOC delivers a MS Word Document. (via IPFS?)

7. CO reviews MS Word doc for acceptance.

8. Upon acceptance, (Total funding/number of months) funding is released to Company wallet address from smart contract.

**Additional ideas**:

* Independently, an auditor can go to a web page to verify all contract info and TXs.
* Make the Grant Award an NFT? Or create a NFT at grant completion?


## Detailed Project Information:

* [todo] Avoiding Common Attacks can be found [here](avoiding_common_attacks.md).

* [todo] Design Pattern Decisions can be found [here](design_pattern_decisions.md).

* [todo] Deployed address can be found [here](deployed_address.txt).


# 2. Directory Structure

The dApp  and its supporting HTML/CSS/JS files are in the folder "*/GrantDapp/*"

The solidity code and supporting files are in the folder "*/GrantMgmt/*"

### /GrantDapp

* [images/](./GrantDapp/images)
  * [logos/](./GrantDapp/images/logos)
    * [TechStack.png](./GrantDapp/images/logos/TechStack.png)
    * [568px-NSF.svg.png](./GrantDapp/images/568px-NSF.svg.png)
    * [favicon1.ico.gif](./GrantDapp/images/favicon1.ico.gif)
    * [faviconCSE.png](./GrantDapp/images/faviconCSE.png)
* [src/](./GrantDapp/src)
  * [dapp.js](./GrantDapp/src/dapp.js)
  * [dappAward.js](./GrantDapp/src/dappAward.js)
  * [dappGrants.js](./GrantDapp/src/dappGrants.js)
  * [dappSecurity.js](./GrantDapp/src/dappSecurity.js)
  * [dappTreasury.js](./GrantDapp/src/dappTreasury.js)
  * [dappWeb3.js](./GrantDapp/src/dappWeb3.js)
  * [style.css](./GrantDapp/src/style.css)
* [AwardGrant.html](./GrantDapp/AwardGrant.html)
* [Onboard.html](./GrantDapp/Onboard.html)
* [Security.html](./GrantDapp/Security.html)
* [Treasury.html](./GrantDapp/Treasury.html)
* [ViewGrants.html](./GrantDapp/ViewGrants.html)
* [index.html](./GrantDapp/index.html)

### /GrantMgmt

* [build/](./GrantMgmt/build)
  * [contracts/](./GrantMgmt/build/contracts)
    * [Context.json](./GrantMgmt/build/contracts/Context.json)
    * [ERC20.json](./GrantMgmt/build/contracts/ERC20.json)
    * [ERC20Burnable.json](./GrantMgmt/build/contracts/ERC20Burnable.json)
    * [GrantManager.json](./GrantMgmt/build/contracts/GrantManager.json)
    * [IERC20.json](./GrantMgmt/build/contracts/IERC20.json)
    * [IERC20Metadata.json](./GrantMgmt/build/contracts/IERC20Metadata.json)
    * [Migrations.json](./GrantMgmt/build/contracts/Migrations.json)
    * [Ownable.json](./GrantMgmt/build/contracts/Ownable.json)
    * [Pausable.json](./GrantMgmt/build/contracts/Pausable.json)
* [contracts/](./GrantMgmt/contracts)
  * [GrantManager.sol](./GrantMgmt/contracts/GrantManager.sol)
  * [Migrations.sol](./GrantMgmt/contracts/Migrations.sol)
* [migrations/](./GrantMgmt/migrations)
  * [1_initial_migration.js](./GrantMgmt/migrations/1_initial_migration.js)
  * [2_deploy_contracts.js](./GrantMgmt/migrations/2_deploy_contracts.js)
* [test/](./GrantMgmt/test)
  * [.gitkeep](./GrantMgmt/test/.gitkeep)
  * [grant_manager.js](./GrantMgmt/test/grant_manager.js)
* [truffle-config.js](./GrantMgmt/truffle-config.js)

# 3. Frontend Access

The frontend was developed in HTML/CSS/JS. 

[todo] This demo is hosted at: [This is my link](https://www.example.com)

# 4. Public Ethereum Address for NFT Certificate

I would like my certification as an NFT sent to:

```
0x17Aa4c39d9B3996B2f7994da83E14c5ACB5f9d7b
```
*(ETH, ER20s, and Bored Ape Yacht Club NFTs are also accepted.)*
# 5. Installing Dependencies

Run the following commands to install dependencies needed for this project:

Install Node.js. Operating specific instructions are available at 
[Nodejs.org](https://nodejs.org/en/download/package-manager/)

Then install each of the following:

```
npm install -g npm
```
```
npm install @openzeppelin/contracts
```
```
npm install -g truffle
```
```
npm install --save-dev @truffle/hdwallet-provider
```
```
npm install bip39 dotenv --save
```

# 6. Accessing the Project

   [todo] Accessing or—if your project needs a server (not required)—running your project

# 7. Unit Testing

The unit tests are contained in the file at: *GrantMgmt/test/grant_manager.js*.


Ensure the file '*truffle-config.js*' has the following settings to set the port to **7545**:

```
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
	...
```
Spin up an instance of Ganache and select "**New Workspace (Ethereum)**."

Click "Add Project" and select the *truffle-config.js* file from the GrantMgmt folder. Then select "**Save Workspace**" to start the local host.

To run all tests, simply run:
```
$ truffle test
```

# 8. Screencast of Project Walk Through

[todo] Link to a screencast of me walking through the project.
