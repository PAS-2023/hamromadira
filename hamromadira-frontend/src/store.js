import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/searchReducer";
import loggedUser from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import userInfoReducer from "./reducers/userInfoReducer";

const reducer = {
  filter: filterReducer,
  loggedUser: loggedUser,
  cart: cartReducer,
  userInfo: userInfoReducer,
};

const store = configureStore({ reducer });

export default store;
