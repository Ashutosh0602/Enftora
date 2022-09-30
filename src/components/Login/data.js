// const options = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "d7d612ee-b448-47eb-8155-f5c87aa89ebf",
//   },
// };
// const rand = Math.floor(Math.random() * 3 + 1 - 1);
// const chain = ["ethereum", "polygon", "rinkeby"];
// async function all_nft() {
//   const response = await fetch(
//     `https://api.nftport.xyz/v0/nfts?chain=${chain[rand]}&include=all`,
//     options
//   );

//   var data = await response.json();
//   return data;
// }

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ad11b2b852mshb911cd884c7238ep1fda53jsnf320c74be2de",
    "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
  },
};

async function all_nft() {
  const response = await fetch(
    "https://opensea13.p.rapidapi.com/assets?collection_slug=cryptopunks&order_direction=desc&limit=50&include_orders=false",
    options
  );

  var data = await response.json();
  return data;
}
// export default all_nft;
