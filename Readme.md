
### Setting Up the Application

1. **Initialize Application**:
   - Run: `npm init`  
   - Install `ethers` using npm.  
   - A `package-lock.json` file ensures an exact version of dependencies.

2. **Use ES6 Modules**:
   - Add `"type": "module"` in `package.json` to enable ES6 features.

3. **Install Dependencies**:
   - Install `dotenv` to manage environment variables.

4. **Set Up INFURA**:
   - Sign up at [Infura Pricing](https://www.infura.io/pricing) and get an API key.
   - Choose a network (e.g., `Sepolia` testnet).
   - Add your API key to `.env`:  
     ```
     INFURA_URL=https://sepolia.infura.io/v3/<YOUR-API-KEY>
     ```
   - Use the [Infura Documentation](https://docs.ethers.org/v5/api/providers/api-providers/#InfuraProvider) for setup.

5. **Provider Setup**:
   - Use Sepolia as a testnet provider.

   ```js
   const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
   console.log("Block Number:", await provider.getBlockNumber());
   ```

   - Verify block numbers on [Sepolia Etherscan](https://sepolia.etherscan.io/).

---

### Viewing Public Addresses and Balances

1. **Resolve ENS Names**:
   ```js
   console.log("elon.eth:", await provider.resolveName("elon.eth"));
   ```

2. **Reverse Lookup**:
   ```js
   console.log("Lookup Address:", await provider.lookupAddress("0x..."));
   ```

3. **Get Balances**:
   ```js
   const balance = await provider.getBalance("elon.eth");
   console.log("Balance:", ethers.formatEther(balance));
   ```

4. **Compare Balances**:
   ```js
   const vitBal = await provider.getBalance("vitalik.eth");
   const sanfordBal = await provider.getBalance("sanfordstout.eth");

   if (vitBal > sanfordBal) {
       console.log("Vitalik has more balance");
   } else {
       console.log("Sanford has more balance");
   }
   ```

---

### Working with Seed Phrases and Wallets

1. **Derive Wallets from Seed Phrase**:
   ```js
   const seedPhrase = `your seed phrase here`;
   const wallet = ethers.HDNodeWallet.fromPhrase(seedPhrase);

   for (let i = 0; i < 10; i++) {
       const path = `m/44'/60'/0'/0/${i}`;
       const derivedWallet = ethers.HDNodeWallet.fromMnemonic(wallet.mnemonic, path);

       console.log("Address:", derivedWallet.address);
       console.log("Private Key:", derivedWallet.privateKey);
   }
   ```

2. **Note**:  
   - Save both the **private key** and **seed phrase** securely.
   - Private keys do not allow you to retrieve seed phrases once imported into wallets like MetaMask.

---

### Transactions and Signing

1. **Sign Messages**:
   ```js
   console.log("Signed Message:", wallet.signMessage("Hello Ethereum!"));
   ```

2. **Send Transactions**:
   ```js
   const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

   const tx = await signer.sendTransaction({
       to: "0xRecipientAddress",
       value: ethers.parseUnits("0.01", "ether")
   });
   console.log("Transaction:", tx);
   ```

3. **View Hashes**:
   - In Ethereum, use transaction hashes to trace details.  
   - For Solana, check transactions with signatures instead.

---

### Utilities

- Get detailed examples and guidance for Ethers.js usage from the [Ethers.js Documentation](https://docs.ethers.org/v6/getting-started/).

