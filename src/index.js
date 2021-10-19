import React from "react";
import ReactDOM from "react-dom";
import Products from "pages/Products";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Products />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
