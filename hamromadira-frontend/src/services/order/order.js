import axios from "axios";
const orderURL = "http://localhost:3001/api/order";

const setToken = () => {
  const token = JSON.parse(window.localStorage.getItem("userData"));
  if (token) {
    return token.token;
  }
};

export const addOrder = async (orderDetails) => {
  let token = setToken();
  const response = await axios.post(orderURL, orderDetails, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getOrder = async () => {
  let token = setToken();
  const response = await axios.get(orderURL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
