import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/searchReducer";

const reducer = {
  filter: filterReducer,
};

const store = configureStore({ reducer });

export default store;
