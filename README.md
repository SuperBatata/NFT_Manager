<h1 align="center" id="title">Manage NFT smart contract using Hardhat</h1>

<h2>🧐 Features</h2>

Here're some of the project's best features:

- Deploy soulbound NFT on IOTA
- Deploy ERC721 NFT smart contract
- Minting NFT
- Upload Metadata to IPFS

<h2>🛠️ Installation Steps:</h2>

<p>1. install depencencies</p>

```
npm install
```

<p>2. deploy smart contract</p>

```
npx hardhat run scripts/deploy-contract.mjs --network [choose network here]
```

<p>3. Upload metadata to IPFS</p>

```
npx hardhat run scripts/store-asset.mjs
```

<p>4. mint NFT</p>

```
npx hardhat run scripts/mint-nft.mjs --network [choose network here]
```

<h2>💻 Built with</h2>

Technologies used in the project:

- hardhat
- solidity
- javascript
