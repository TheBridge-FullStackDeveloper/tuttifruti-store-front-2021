import "@fontsource/gluten/100.css";
import "@fontsource/gluten/600.css";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/600.css";
import "@fontsource/source-code-pro/200.css";
import "@fontsource/source-code-pro/600.css";

import {extendTheme, theme as base} from "@chakra-ui/react"
const theme = extendTheme({
	fonts: {
		heading: `Source Code Pro, ${base.fonts?.heading}`,
		body: `Raleway, ${base.fonts?.body}`,
		mono: `Gluten, ${base.fonts?.mono}`
	},
});

export default theme
