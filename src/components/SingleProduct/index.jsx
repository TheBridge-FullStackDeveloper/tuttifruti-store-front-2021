import { getOneProduct } from "services/products"
import {
	Box,
	Text,
	Heading
 } from "@chakra-ui/react"

export default function SingleProduct(productId){
	const getProductData = getOneProduct(productId)
	return (
		<>
			<Box>{getProductData.product_pic}</Box>
			<Heading>Name of product</Heading>
			<Text>Product description</Text>
		</>
	)
}