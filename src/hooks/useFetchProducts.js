import { useState, useEffect } from "react";

export const useFetchProducts = (productService) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const results = await productService.getProducts(1, 5);
			setItems((prevState) => [...prevState, ...results.products]);
		}
		fetchData();
	}, []);
	return items
}

export const useFetchFeatured = (productService) => {
	const [featured, setFeatured] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const results = await productService.getFeatured();
			setFeatured((prevState) => [...prevState, ...results.data.featured]);
		}
		fetchData();
	}, []);
	return featured
}


