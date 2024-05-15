const axios = require("axios");
const MerkleTree = require("../utils/MerkleTree");
const niceList = require("../utils/niceList.json");

const serverUrl = "http://localhost:1225";

async function main() {
  const merkleTree = new MerkleTree(niceList);
  // TODO: how do we prove to the server we're on the nice list?
  // from 0 to length-1
  const i = Math.floor(Math.random() * niceList.length);
  const name = niceList[i];
  console.log(name);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: merkleTree.getProof(i),
    name,
  });

  console.log({ gift });
}

main();
