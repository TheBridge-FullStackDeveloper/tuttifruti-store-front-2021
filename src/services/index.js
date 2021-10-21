import axios from "axios";
import { getAll } from "./products";

const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
const products = {
  getProducts: getAll(client),
};

export { products };
