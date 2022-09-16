import { createSlice } from "@reduxjs/toolkit";

let eth;
let pol;
let rin;

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "d7d612ee-b448-47eb-8155-f5c87aa89ebf",
  },
};

async function ethereum() {
  let ethereum;
  const response = await fetch(
    `https://api.nftport.xyz/v0/nfts?chain=ethereum&include=all`,
    options
  );

  ethereum = await response.json();

  return [ethereum];
}
// async function polygon() {
//   let polygon;

//   const response = await fetch(
//     `https://api.nftport.xyz/v0/nfts?chain=polygon&include=all`,
//     options
//   );

//   polygon = await response.json();

//   return [polygon];
// }
// async function rinkeby() {
//   let rinkeby;

//   const response = await fetch(
//     `https://api.nftport.xyz/v0/nfts?chain=rinkeby&include=all`,
//     options
//   );

//   rinkeby = await response.json();

//   return [rinkeby];
// }

eth = ethereum().then((dt) => {
  return dt[0];
});
// pol = polygon().then((dt) => {
//   return dt;
// });
// rin = rinkeby().then((dt) => {
//   return dt;
// });

const initalState = {
  ethereum: eth,
  polygon: "djwjw",
  rinkeby: "djkwhui",
};
// const initalState = {
//   ethereum: async () => {
//     await ethereum();
//   },
//   polygon: async () => {
//     await polygon();
//   },
//   rinkeby: async () => {
//     await rinkeby();
//   },
// };

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
