import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import routes from "routes";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
