import { createSlice } from "@reduxjs/toolkit";

let asset;
let pol;
let rin;

// const options = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "d7d612ee-b448-47eb-8155-f5c87aa89ebf",
//   },
// };

// async function ethereum() {
//   let ethereum;
//   const response = await fetch(
//     `https://api.nftport.xyz/v0/nfts?chain=ethereum&include=all`,
//     options
//   );

//   ethereum = await response.json();

//   return [ethereum];
// }
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bcc8098ffamshce8bb38499c7410p14e8e6jsnac5a1d470508",
    "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
  },
};

async function intial() {
  let assets;
  const response = await fetch(
    "https://opensea13.p.rapidapi.com/assets?order_direction=desc&limit=30&include_orders=false",
    options
  );
  assets = await response.json();
  //   console.log(assets);
  return [assets];
}

asset = intial();
// asset = intial().then((dt) => {
//   return dt[0];
// });

const initalState = {
  assets: asset,
};

const nftSlice = createSlice({
  name: "nfts",
  initialState: initalState,
  reducers: {
    polygon(state) {
      state.polygon = "police";
    },
  },
});

export const IState = initalState;
export const nftActions = nftSlice.actions;
export default nftSlice.reducer;
