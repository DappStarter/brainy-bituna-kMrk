require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name raise place modify hover another army gate'; 
let testAccounts = [
"0xedc2e02ac8ba60f8d1ff3207d55d817173bc5b6c939147ecb4eb15c1280d9024",
"0x63c445cf9836203c172c0bf5614ee9e9bcdae07836a99cffdf27b64b939bfb3b",
"0x85f903ba20eaeff17e2bcfd9936718fc1bb6c267fcd609f47d82400936915c50",
"0x4afa1478f8a5b8f9f70f383ff24faa1ad24c2d1a4b155ac11b41a1fd15ae7acc",
"0x063bf3687b436f8a22ca0439fa0809b4a3c9b280d0ba95c17e730ec41ce84df2",
"0x349ae1ff444870bac9226ba51d69718f908cb5a119b340ee95609c9658a53667",
"0x6953ed5a32bea4b301eb2063272b5cc21101e41f1a7ce9aed487272a65168b8d",
"0x8705b3062702f08c259ad5ab9b2e9fac5784fb7a7bed9c2b161648987ed67709",
"0xd3a6edf09637ef306b09633757360a580a2e87303368401b17edfec1bd84d1a7",
"0xcf46d9a8e4b383e5a616ee4961c158b94ac611be91452096d4fe2461d8d7b568"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

