import Searchbar from "components/Searchbar";
import SingleProduct from "components/SingleProduct";
import {
	Box,
	Button,
	Flex,
	Center,
	useColorModeValue,
	Heading,
	Text,
	VStack,
	Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon} from "@chakra-ui/icons";
import {FaCartArrowDown} from "react-icons/fa";
import "@fontsource/gluten";
import "@fontsource/raleway";
import "@fontsource/source-code-pro";

export default function ProductPage() {
	return (
		<>
			<Flex flexWrap="wrap" alignContent="center" justifyContent="center">
				<Button
					as={Link}
					to="/home"
					variantColor="teal"
					size="md"
					variant="ghost"
					leftIcon={<ArrowBackIcon />}
				>
					Back
				</Button>
				<Searchbar textAlign="left" />
			</Flex>
			<Box>
				<VStack>
					<SingleProduct />
					<Button>A la cesta {FaCartArrowDown}</Button>
					<Button>Unidades</Button>
				</VStack>
			</Box>
		</>
	);
}
