
const hre = require("hardhat");

async function main() {

  // Nous obtenons le ContractFactory pour notre contrat
  const Vote = await hre.ethers.getContractFactory("Voting");
  // Nous déployons le contrat
  const vote = await Vote.deploy();
  // Nous attendons que le contrat soit entièrement déployé
  await vote.deployed();

  console.log(
    `L'adresse du contrat intelligent est ${vote.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
