var data;
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "d7d612ee-b448-47eb-8155-f5c87aa89ebf",
  },
};
const rand = Math.floor(Math.random() * 3 + 1 - 1);
const chain = ["ethereum", "polygon", "rinkeby"];
async function intial() {
  const response = await fetch(
    `https://api.nftport.xyz/v0/nfts?chain=${chain[rand]}&include=all`,
    options
  );

  data = await response.json();
  return data;
}
data = intial();

export default data;
