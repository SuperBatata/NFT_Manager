const CONTRACT_ADDRESS = "0xaad7Db09Da8309BC40b14B075464763Ec4A40ad6";
const META_DATA_URL =
  "ipfs://bafyreif4kwqtazluietfemmk55odviuquylcsfb4httqggionbn6ydwawq/metadata.json";

async function mintNFT(contractAddress, recipientAddress, metaDataURL) {
  const SoulBoundTest = await ethers.getContractFactory("SoulBoundTest");
  const contract = await SoulBoundTest.attach(contractAddress);

  // Call the safeMint function with the recipient's address
  await contract.safeMint(recipientAddress, metaDataURL);

  console.log("NFT minted to: ", recipientAddress);
}

const recipientAddress = "0x6bd3c4195a0E268C9dE21566D2fCfB53fBA48fB9"; // Replace with the desired recipient's address
mintNFT(CONTRACT_ADDRESS, recipientAddress, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
