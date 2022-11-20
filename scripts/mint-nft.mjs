const CONTRACT_ADDRESS = "0xe8df34C84F5478e8F8d7f1d408460B7F139e2AF9";
const META_DATA_URL =
  "ipfs:/bafyreigakinwgn23bdn54trrjvi4haiti6oybkbqzz6h4kbi45eq56l6ca/metadata.json";

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
