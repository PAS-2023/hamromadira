import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/searchReducer";
import loggedUser from "./reducers/userReducer";

const reducer = {
  filter: filterReducer,
  loggedUser: loggedUser,
};

const store = configureStore({ reducer });

export default store;
