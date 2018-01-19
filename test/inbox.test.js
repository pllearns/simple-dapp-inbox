const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // This is a constructor function!

const web3 = new Web3(ganache.provider());

beforeEach(() => {
  web3.eth.getAccounts().then(fetchedAccounts => {
    console.log(fetchedAccounts);
  });
});

describe('contract', () => {
  it('deploys a contract', () => {
  });
});


