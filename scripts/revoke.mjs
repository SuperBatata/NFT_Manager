const CONTRACT_ADDRESS = "0xaad7Db09Da8309BC40b14B075464763Ec4A40ad6";

async function revokeNFT(contractAddress, tokenId) {
  const SoulBoundTest = await ethers.getContractFactory("waltidSoulBound");
  const contract = await SoulBoundTest.attach(contractAddress);

  // Call the safeMint function with the recipient's address
  await contract.revoke(tokenId);

  console.log("NFT revoked: ", tokenId);
}

const tokenId = 0; // Replace with the desired recipient's address
revokeNFT(CONTRACT_ADDRESS, tokenId)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
