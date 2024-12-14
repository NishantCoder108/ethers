import 'dotenv/config';
import { ethers } from "ethers";


const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;

// const provider = ethers.getDefaultProvider(infuraUrl);

// It would be generic provider
// const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// Infura provider 
// const provider = new ethers.providers.InfuraProvider([network = "sepolia", process.env.INFURA_KEY])

// console.log("Current block number", provider.getBlockNumber())

// with latest v6
const provider = new ethers.JsonRpcProvider(infuraUrl)
provider
    .getBlockNumber()
    .then((blockNumber) => {
        console.log("Current block number", blockNumber)
    })
    .catch((error) => {
        console.error(error)
    })