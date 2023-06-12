import { configureStore } from "@reduxjs/toolkit";
import { productReducer as reducer } from "./product";

// Crea la tienda de Redux
const store = configureStore({
  reducer: reducer,
});

export default store;
