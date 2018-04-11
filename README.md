# Token Creator Dapp

This repo contains an example of a reactive Dapp built using angular-cli and truffle. It allows you to create your own crypto token .

This project was bootstrapped from Quintor's [angular-truffle-box](https://github.com/Quintor/angular-truffle-box).

Test units have been removed.

## Prerequisites

In order to run the Truffle box, you will need [Node.js](https://nodejs.org) (tested with version 8.9.x). This will include `npm`, needed to install dependencies.

In order to install these dependencies, you will also need [Python](https://www.python.org) (version 2.7.x) and
[git](https://git-scm.com/downloads).

You will also need the [MetaMask](https://metamask.io/) plugin for Chrome.

## Building

1. Make sure Truffle, Angular-cli and ganache-cli are installed globally
  ```bash
  $ npm install -g truffle
  $ npm install -g @angular/cli
  $ npm install -g ganache-cli
  ```

2. Download the repo, unzip the folder and install dependencies
  ```bash
  $ npm install
  ```

3. Run your ethereum client (in our case ganache-cli):
  ```bash
  $ ganache-cli
  ```
4. Save the mnemonic 12-word phrase printed you will need to import it into Metamask later
  `e.g. poet music emerge still anchor asset then timber fog thing exclude process`

5. Compile and migrate your contracts.
  ```bash
  $ truffle compile && truffle migrate
  ```

## Configuration

1. Use the 12-word phrase obtained from ganache-cli to import ganache generated addresses into Metamask after clicking on
  `restore from seed phrase`

3. Select `localhost:8545` from the Metamask network options.


## Running

1. Run the app using Angular CLI:
  ```bash
  ng serve
  ```

2. The app can be accessed @ localhost:4200

3. Once you have created your token, you will be provided with the contract address. You can use the contract address to load your tokens into your metamask or send tokens to friends and family via [etherwallet](https://www.myetherwallet.com/)
