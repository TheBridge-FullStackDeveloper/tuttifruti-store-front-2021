import axios from "axios";
import { getAll } from "./products";

const client = axios.create({
  baseURL: "https://tutti-frutti-store.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
const products = {
  getProducts: getAll(client),
};

export { products };
