import {
	Box,
	Button,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";
import {ArrowBackIcon} from "@chakra-ui/icons"
import "@fontsource/gluten";
import "@fontsource/raleway";
import "@fontsource/source-code-pro";

export default function SingleProduct() {
	return (
		<>
			<Button
				as={ReachLink}
				to="/home"
				variantColor="teal"
				size="md"
				variant="ghost"
				leftIcon={<ArrowBackIcon />}
			>
				Back
			</Button>
		</>
	);
}
