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

async function addOwner(payload) {
  let assets;

  let response = await fetch(
    `https://opensea13.p.rapidapi.com/collections?asset_owner=${payload}&limit=30`,
    options
  );

  assets = await response.json();
  //   console.log(assets);
  return [assets];
}

async function sasset(payload) {
  let assets;
  let response;
  if (payload == "") {
    response = await fetch(
      `https://opensea13.p.rapidapi.com/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1?include_orders=false`,
      options
    );
  } else {
    response = await fetch(
      `https://opensea13.p.rapidapi.com/asset/${payload}/1?include_orders=false`,
      options
    );
  }

  assets = await response.json();
  //   console.log(assets);
  return [assets];
}
const intailAsset = sasset("");
const initalState = {
  counter: 0,
  assets: asset,
  slugs: asset,
  address: asset,
  addressowner: asset,
  singleasset: intailAsset,
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
    addowner(state, action) {
      state.addressowner = addOwner(action.payload);
    },
    callSasset(state, action) {
      state.singleasset = sasset(action.payload);
    },
  },
});

export const IState = initalState;
export const nftActions = nftSlice.actions;
export default nftSlice.reducer;
