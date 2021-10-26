import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import routes from "routes";
import Header from "./components/header";
import Pagination from "./components/pagination"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
          <Redirect to="/home" />
        </Switch>
        <Pagination />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
