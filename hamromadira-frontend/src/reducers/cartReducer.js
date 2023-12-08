import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    getCartItems(state, actions) {
      return actions.payload;
    },
  },
});

export const { getCartItems } = cartSlice.actions;
export default cartSlice.reducer;
