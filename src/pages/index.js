import { ChakraProvider, theme, CSSReset } from "@chakra-ui/core";
import Products from "pages/Products";
import Home from "pages/Home";

const App = () => {

	return (
		<>
			<Home/>
			<Products/>
		</>
	)

}

export default App