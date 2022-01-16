const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'pluck gate key cat volcano upper round tumble hollow word arctic orbit',
	'https://rinkeby.infura.io/v3/1c6afdfe23704757b6d25c4ea93cbc08'
);

const web3 = new Web3(provider);