import axios from "axios";
const baseURL = "http://localhost:3001/api/products";
const categoryURL = "http://localhost:3001/api/products/category";

export const getAllProducts = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const getCategoryProducts = async (categoryName) => {
  const response = await axios.get(`${baseURL}/${categoryName}`);
  return response.data;
};

export const getCategoryList = async () => {
  const response = await axios.get(categoryURL);
  return response.data;
};
