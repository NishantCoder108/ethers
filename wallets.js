import "dotenv/config";
import { Wallet } from "ethers";
import { ethers } from "ethers"

// const wallet = ethers.Wallet.createRandom();

// console.log("Address : ", wallet.address)
// console.log("Private Key : ", wallet.privateKey)
// console.log("Mnemonic password : ", wallet.mnemonic.password)
// console.log("Mnemonic pharases: ", wallet.mnemonic.phrase)

//* m/44'/60'/0'/0/0
let path, myWallet;

/*
* --- Create Wallet from seed pharases ---

const seed = `clerk fsdff ecology sff opera recycle affa resource diamond foil able 3333f`;

const seedPhrase = seed
const wallet1 = ethers.HDNodeWallet.fromPhrase(seedPhrase);
const mnemonic = wallet1.mnemonic;

console.log("Mnemonic of seed , ", mnemonic)

*/
// for (let i = 0; i < 10; i++) {
//     path = `m/44'/60'/0'/0/${i}`;

//     myWallet = ethers.HDNodeWallet.fromMnemonic(wallet.mnemonic, path);

//     console.log("Address : ", i, ": ", myWallet.address)
//     console.log("Private key : ", i, ": ", myWallet.privateKey)
// }

// * Create wallet address by private key

const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraUrl);
const signer = new Wallet(process.env.PRIVATE_KEY, provider);

// console.log("Wallet Address :", wallet.address);
// console.log("Sign Message : ", wallet.signMessage("Hello"))


// const signMess = await wallet.signMessage("Hello");

// console.log("Sign Message : ", signMess)

// // const verifyMess = ethers.verifyMessage("Hello", signMess)

// // console.log("Verify Message : ", verifyMess)

// const mess = ethers.toUtf8String(signMess)
// console.log("Message : ", mess)
const providerBal = await provider.getBalance(signer.address)
console.log({ providerBal })
const tx = await signer.sendTransaction({
    to: "0xc15130dD56Ce38b62AFce618A66B963b9A86f75E",
    value: 3333
})

console.log({ tx })
/*
{
  tx: TransactionResponse {
    provider: JsonRpcProvider {},
    blockNumber: null,
    blockHash: null,
    index: undefined,
    hash: '0x21424bf58344816fc83cd4489999562a4a9aa43f8710f6de68df6ab7a60342f4',
    type: 2,
    to: '0xc15130dD56Ce38b62AFce618A66B963b9A86f75E',
    from: '0xd7c165aB129BB0838d509c8F2faC0Cd45B9532F1',
    nonce: 1,
    gasLimit: 21000n,
    gasPrice: undefined,
    maxPriorityFeePerGas: 14315458n,
    maxFeePerGas: 27263824n,
    maxFeePerBlobGas: null,
    data: '0x',
    value: 3333n,
    chainId: 11155111n,
    signature: Signature { r: "0xfbb140158751cd1e9c76a76a9fd194a2264c62cba0ecddf4b7d8b2c624a6d214", s: "0x66b7f84662fed88d551762ee63e5d4c00281dbbe46614ab24b583c2b5b1e571a", yParity: 1, networkV: null },
    accessList: [],
    blobVersionedHashes: null
  }

*/
