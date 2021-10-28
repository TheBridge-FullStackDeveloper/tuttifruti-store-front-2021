import axios from "axios";
import { getAll, getBySearch } from "./products";

const client = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const products = {
  getProducts: getAll(client),
  getSearchedProducts: getBySearch(client),
};

export { products };
