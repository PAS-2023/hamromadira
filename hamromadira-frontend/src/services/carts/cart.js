import axios from "axios";
const cartURL = "http://localhost:3001/api/cart";

export const getCartDetail = async (userId) => {
  let response = await axios.get(`${cartURL}/${userId}`);
  return response.data;
};

export const editCart = async (userId, cartProd) => {
  let response = await axios.put(`${cartURL}/${userId}`, cartProd);
  return response.data;
};

export const deleteCartItems = async (userId, skus) => {
  let response = await axios.delete(`${cartURL}/remove/${userId}`, skus);
  return response.data;
};
