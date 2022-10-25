import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const sliceState = createSlice({
  name: "stae",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth } = sliceState.actions;
export default reducer;
