//https://eth-ropsten.alchemyapi.io/v2/qkDlKHTaudDGGA9gj3HvrOSe_eZ2mOcf

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/qkDlKHTaudDGGA9gj3HvrOSe_eZ2mOcf',
      accounts: [
        'eb3adf8575207683bf5d5d794c9a2985cb6672ccf3357f8c866ef9c5eff6e8b7',
      ],
    },
  },
};
