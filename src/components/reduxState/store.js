import { createSlice, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Intial";

const dataStore = configureStore({
  reducer: { data: dataReducer },
});

// export default dataStore;
