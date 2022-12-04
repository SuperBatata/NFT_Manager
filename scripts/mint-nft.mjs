const CONTRACT_ADDRESS = "0x1Fdb5268Ab76FA67BFDBa909F3052Ca5B8Ad2Cbf";
const META_DATA_URL =
  "ipfs:/bafyreie6jqawhw22tidle2sv3xvhesi7vimfhrxvhpwnake2x2zz25yjxm/metadata.json";

async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
