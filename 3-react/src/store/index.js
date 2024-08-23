import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSLice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSLice.reducer,
    bag: bagSlice.reducer,
  },
});

export default store;
