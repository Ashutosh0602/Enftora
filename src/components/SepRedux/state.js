import { createSlice } from "@reduxjs/toolkit";

let asset;

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

async function next(payload) {
  let assets;
  const response = await fetch(
    `https://opensea13.p.rapidapi.com/assets?limit=20&cursor=${payload}&include_orders=false`,
    options
  );
  assets = await response.json();
  //   console.log(assets);
  return [assets];
}

async function slug(payload) {
  let assets;
  const response = await fetch(
    `https://opensea13.p.rapidapi.com/assets?collection_slug=${payload}&limit=20&include_orders=false`,
    options
  );
  assets = await response.json();
  //   console.log(assets);
  return [assets];
}

const initalState = {
  counter: 0,
  assets: asset,
  slugs: [],
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
  },
});

export const IState = initalState;
export const nftActions = nftSlice.actions;
export default nftSlice.reducer;
