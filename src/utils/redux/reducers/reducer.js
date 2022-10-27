import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  isLoggedIn: false,
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setCart: (state, action) => {
      state.carts = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth, setCart } = sliceState.actions;
export default reducer;
