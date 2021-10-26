import { useState, useEffect } from "react";

const useFetchOneProduct = (productService) => {
	const [item, setItems] = useState({});

	useEffect(() => {
		async function fetchData(productId) {
			const results = await productService.getOneProduct(productId);
			setItems((prevState) => [...prevState, ...results.products]);
		}
		fetchData();
	}, []);
	return item;
};

export default useFetchOneProduct;
