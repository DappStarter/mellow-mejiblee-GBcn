require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index repeat noble essay give glimpse flock ghost'; 
let testAccounts = [
"0xac9ef8fc212e7c32ac60cc6d09d35d2f51443daaa30c4a315a82dcb9a601b371",
"0x97bef902ffb2ec5c4ef4bdea32767ac4aa8b3d4d6fe3ddc9d99f8479ce93f555",
"0x0651c70f0130a2951bd516d5b82074cc252366301c3be325d80e717d9d2b07be",
"0x0454b991265dc2f9db903466824ccdb91f8829b00b311d2f563e7ce3b76587bb",
"0xc9077745ddb99d32285704998dd6e8594843791899302fe5d2156ea206055011",
"0xf4b27761a587ae968b8e59a3a853776ddb1f1e3c387f2fdc12b6a9fab65911b8",
"0x5bd8d81ea7fe2a516289dd6c5cdb91c4397cda24621be4e2d76b893f6ecae6e7",
"0x8e5d2232ccd9776cbb4a2a045b94064f695d5e6f07810b01effc88affc50d30f",
"0xd5ea24169926455d255d814353c6c84013a3b37161a31cedbb4be28c8747d075",
"0x6857f92f2a4614f3a4c8339343f5d76827d16169a17587f70f688c24f91f0691"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

