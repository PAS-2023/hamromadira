/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  getCartDetail,
  editCart,
  deleteCartItems,
} from "../services/carts/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartItems(state, action) {
      return action.payload;
    },
    appendItem(state, action) {
      return state.concat(action.payload);
    },
    editCartItems(state, action) {
      return state.map((item) =>
        item.skus === action.payload.skus
          ? item.quantity === action.payload.quantity
          : item
      );
    },
    removeItem(state, action) {
      return state.filter((item) => item.skus !== action.payload.skus);
    },
    cartCount(state, action) {
      return state.length;
    },
  },
});

export const initializeCart = (userId) => {
  return async (dispatch) => {
    const cartDetail = await getCartDetail(userId);
    dispatch(setCartItems(cartDetail));
  };
};

export const addItemsToCart = (userId, item) => {
  return async (dispatch) => {
    const response = await editCart(userId, item);
    dispatch(appendItem(response));
  };
};

export const editItemsToCart = (userId, item) => {
  return async (dispatch) => {
    const response = await editCart(userId, item);
    dispatch(editCartItems(response));
  };
};

export const removeCartItem = (userId, skus) => {
  return async (dispatch) => {
    const response = await deleteCartItems(skus);
    dispatch(removeItem(response));
  };
};

export const {
  setCartItems,
  appendItem,
  removeItem,
  cartCount,
  editCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
