import axios from "axios";
const baseURL = "http://localhost:3001/api/user";

const setToken = () => {
  const token = JSON.parse(window.localStorage.getItem("userData"));
  if (token) {
    return token.token;
  }
};

export const getUserInfo = async () => {
  let token = setToken();
  const response = await axios.get(`${baseURL}/info`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const addAddressInfo = async (newAddress) => {
  let token = setToken();
  const response = await axios.put(`${baseURL}/address`, newAddress, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
