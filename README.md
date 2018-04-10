# Truffle Box for Angular

This Repo was bootstrapped from Quintor's [angular-truffle-box](https://github.com/Quintor/angular-truffle-box)
Testing units have been removed.

## Prerequisites

In order to run the Truffle box, you will need [Node.js](https://nodejs.org) (tested with version 8.9.x). This will include `npm`, needed
to install dependencies. In order to install these dependencies, you will also need [Python](https://www.python.org) (version 2.7.x) and
[git](https://git-scm.com/downloads). You will also need the [MetaMask](https://metamask.io/) plugin for Chrome.

## Building

Truffle, Angular CLI and an Ethereum client such as Ganache
  ```bash
  $ npm install -g truffle
  $ npm install -g @angular/cli
  $ npm install -g ganache-cli
  ```

2. Download the repo, unzip the folder and install dependencies
  ```bash
  $ npm install
  ```

3. Run your Ethereum client. For TestRPC:
  ```bash
  ganache-cli
  ```
Save the mnemonic 12-word phrase printed when you launch ganache-cli, you will need it later
  ```bash
  e.g:poet music emerge still anchor asset then timber fog thing exclude proces
  ```

4. Compile and migrate your contracts.
  ```bash
  truffle compile && truffle migrate
  ```

## Configuration

1. In order to connect with the Ethereum network, you will need to configure MetaMask

2. Use the 12-word phrase obtained from ganache-cli to import up to 10 Ethereum wallet addresses preloaded with ~100 ether/each into Metamask

3. Select network `localhost:8545` from the Metamask netowrk options.


## Running

1. Run the app using Angular CLI:
  ```bash
  ng serve
  ```
The app is now served on localhost:4200

2. The app is now served on localhost:4200
