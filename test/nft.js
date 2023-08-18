const { expect } = require("chai");

describe("SoulBoundTest", function () {
  it("should mint an NFT for a given address", async function () {
    const SoulBoundTest = await ethers.getContractFactory("SoulBoundTest");
    const contract = await SoulBoundTest.deploy();
    await contract.deployed();

    const recipient = "0x6bd3c4195a0E268C9dE21566D2fCfB53fBA48fB9"; // Replace with the recipient's address
    const uri =
      "ipfs://bafyreif4kwqtazluietfemmk55odviuquylcsfb4httqggionbn6ydwawq/metadata.json"; // Replace with a valid URI

    await expect(contract.safeMint(recipient, uri))
      .to.emit(contract, "Transfer")
      .withArgs(address(0), recipient, 0);

    const owner = await contract.ownerOf(0);
    expect(owner).to.equal(recipient);

    const tokenURI = await contract.tokenURI(0);
    expect(tokenURI).to.equal(uri);
  });
});
