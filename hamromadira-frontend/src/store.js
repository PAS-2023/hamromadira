import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/searchReducer";
import loggedUser from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import userInfoReducer from "./reducers/userInfoReducer";
import orderReducer from "./reducers/orderReducer";

const reducer = {
  filter: filterReducer,
  loggedUser: loggedUser,
  cart: cartReducer,
  userInfo: userInfoReducer,
  order: orderReducer,
};

const store = configureStore({ reducer });

export default store;
