import Products from "pages/Products";
import Home from "pages/Home";

export default [
  {
    path: "/products",
    component: Products,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
];
