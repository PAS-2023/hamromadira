import { createSlice } from "@reduxjs/toolkit";
import { getOrder, addOrder } from "../services/order";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    setOrder(state, action) {
      return action.payload;
    },
    getOrderById(state, action) {
      return state.filter((order) => order.userID === action.payload.userID);
    },
    addOrderInfo(state, action) {
      return state.concat(action.payload);
    },
    changeOrderStatus(state, action) {
      const orderToChange = state.find(
        (order) => order._id === action.payload.orderId
      );
      const changedOrder = { ...orderToChange, status: action.payload.status };
      return state.map((value) =>
        value._id === action.payload.orderId ? changedOrder : value
      );
    },
  },
});

export const { setOrder, getOrderById, addOrderInfo } = orderSlice.actions;

export const getOrderDetails = () => {
  return async (dispatch) => {
    const response = await getOrder();
    dispatch(setOrder(response));
  };
};

export const createOrder = (orderDetails) => {
  return async (dispatch) => {
    const response = await addOrder(orderDetails);
    dispatch(addOrderInfo(response));
  };
};
