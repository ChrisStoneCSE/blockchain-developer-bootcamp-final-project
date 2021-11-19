# Avoiding Common Attacks

I have taken care to avoid common attacks through mitigation steps identified as follows:

## SWC-102 Outdated Compiler Version

### Use a recent version of the Solidity compiler

Using an outdated compiler version can be problematic especially if there are publicly disclosed bugs and issues that affect the current compiler version.

Reference:

```
https://swcregistry.io/docs/SWC-102
```

## SWC-103 Floating Pragma

### Lock pragmas to specific compiler version

Contracts should be deployed with the same compiler version and flags that they have been tested the most with. Locking the pragma helps ensure that contracts do not accidentally get deployed using, for example, the latest compiler which may have higher risks of undiscovered bugs. Contracts may also be deployed by others and the pragma indicates the compiler version intended by the original authors.

Reference:

```
https://swcregistry.io/docs/SWC-103
```
## SWC-105 Unprotected Ether Withdrawal

### ERC-20 functions are protected by the onlyOwner access controls

Due to missing or insufficient access controls, malicious parties can withdraw some or all Ether from the contract account.

This bug is sometimes caused by unintentionally exposing initialization functions. By wrongly naming a function intended to be a constructor, the constructor code ends up in the runtime byte code and can be called by anyone to re-initialize the contract.

Reference:

```
https://swcregistry.io/docs/SWC-105
```
## SWC-131 Presence of Unused Variables

### Irrelevant Code

Unused variables are allowed in Solidity and they do not pose a direct security issue. It is best practice though to avoid them as they can:

- cause an increase in computations (and unnecessary gas consumption)
indicate bugs or malformed data structures and they are generally a sign of poor code quality
- cause code noise and decrease readability of the code
Remediation

Remove all unused variables from the code base.

Reference:

```
https://swcregistry.io/docs/SWC-131
```
