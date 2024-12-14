import "dotenv/config";
import { ethers } from "ethers";

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;

// const provider = ethers.getDefaultProvider(infuraUrl);

const provider = new ethers.JsonRpcProvider(infuraUrl);

// provider.getBlockNumber()
//     .then((blockNumber) => {
//         console.log("Current block number", blockNumber);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// console.log("BLOCK Number : ", await provider.getBlockNumber())

// We can see Public address of ENS name provider
// console.log("vitalik.eth is ", await provider.resolveName("vitalik.eth")) // elon.eth is  0x313BFD99a71f999dF8A084A90f0A138f11eA2bC7

//Lookup address : just oppsite of resolveName
// console.log("Lookup address : ", await provider.lookupAddress("0x313BFD99a71f999dF8A084A90f0A138f11eA2bC7"))

//Get balance :
// console.log("Elon ETH Bal: ", (await provider.getBalance("elon.eth")).toString()) //Elon ETH Bal:  338341084462521290

// Utils :
// const vitalikBal = await provider.getBalance("vitalik.eth")
// console.log("elon.eth has ", ethers.formatEther(vitalikBal))//elon.eth has  415.638890357515803686 at 15-12-2024

const vitBal = await provider.getBalance("vitalik.eth");
let sanfordBal = await provider.getBalance("sanfordstout.eth");

console.log({ vitBal, sanfordBal });

sanfordBal = vitBal + BigInt(5555); //both must have BigInt
if (vitBal > sanfordBal) {
    console.log("Vitalik is more balance");
} else {
    console.log("Sanford have more balance");
}

