import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, addAddressInfo } from "../services/userAccess/userInfo";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    setUserInfo(state, action) {
      return action.payload;
    },

    addUserAddress(state, action) {
      return state.address[action.payload];
    },
    updateUserAddress(state, action) {
      return state.address.map((value) =>
        value._id === action.payload.id ? action.payload.address : value
      );
    },
  },
});

export const { setUserInfo, addUserAddress, updateUserAddress } =
  userInfoSlice.actions;

export const userInfo = () => {
  return async (dispatch) => {
    const response = await getUserInfo();
    dispatch(setUserInfo(response));
  };
};

export const addAddress = (newAddress) => {
  return async (dispatch) => {
    const response = await addAddressInfo(newAddress);
    dispatch(addUserAddress(response));
  };
};

export default userInfoSlice.reducer;
