import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

let asset;

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "bcc8098ffamshce8bb38499c7410p14e8e6jsnac5a1d470508",
//     "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
//   },
// };

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ad11b2b852mshb911cd884c7238ep1fda53jsnf320c74be2de",
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

async function next(payload) {
  let assets;
  const response = await fetch(
    `https://opensea13.p.rapidapi.com/assets?order_direction=desc&limit=30&cursor=${payload}&include_orders=false`,
    options
  );
  assets = await response.json();
  //   console.log(assets);
  return [assets];
}

async function slug(payload) {
  let assets;

  let response = await fetch(
    `https://opensea13.p.rapidapi.com/assets?collection_slug=${payload}&limit=30&include_orders=false`,
    options
  );

  assets = await response.json();
  //   console.log(assets);
  return [assets];
}

async function addresscoll(payload) {
  let assets;

  let response = await fetch(
    `https://opensea13.p.rapidapi.com/assets?order_direction=desc&asset_contract_address=${payload}&limit=30&include_orders=false`,
    options
  );

  assets = await response.json();
  //   console.log(assets);
  return [assets];
}

const initalState = {
  counter: 0,
  assets: asset,
  slugs: asset,
  address: asset,
  //   next: "hello",
  //   prev:"hello"
};

const nftSlice = createSlice({
  name: "nfts",
  initialState: initalState,
  reducers: {
    nextPage(state, action) {
      state.counter++;
      state.assets = next(action.payload);
    },
    prevPage(state, action) {
      state.counter--;
      state.assets = next(action.payload);
    },
    slugcoll(state, action) {
      state.slugs = slug(action.payload);
    },
    address(state, action) {
      state.address = addresscoll(action.payload);
    },
  },
});

export const IState = initalState;
export const nftActions = nftSlice.actions;
export default nftSlice.reducer;
