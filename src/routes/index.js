import Home from "pages/Home";
import Product from "pages/Product";

export default [
   {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/product",
    component: Product,
    exact: true,
  }
];
