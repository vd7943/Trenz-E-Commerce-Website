import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSLice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false: "PENDING" and true: "DONE"
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSLice.actions;

export default fetchStatusSLice;
