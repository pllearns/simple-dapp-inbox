const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'reunion people trip skull scorpion debris loyal hospital hamster negative riot movie',
  'https://rinkeby.infura.io/KrrBdu2V5YLwR9qkNv0I'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attempting account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hey!']})
    .send({gas: '1000000', from: accounts[0]});

  console.log('contract address', result.options.address);
};

deploy();

