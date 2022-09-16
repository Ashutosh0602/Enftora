import { configureStore } from "@reduxjs/toolkit";
import nftSlice from "./state";

const dataStore = configureStore({
  reducer: { nfts: nftSlice },
});

export default dataStore;
