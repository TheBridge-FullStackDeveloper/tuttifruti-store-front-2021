import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";

import routes from "routes";
import Header from "./components/header";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<CSSReset />
			<BrowserRouter>
				<Header />
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
