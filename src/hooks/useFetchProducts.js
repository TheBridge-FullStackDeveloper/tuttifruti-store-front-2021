import { useState, useEffect } from "react";

const useFetchProducts = (productService) => {
	  const [items, setItems] = useState([]);

		useEffect(() => {
			async function fetchData() {
				const results = await productService.getProducts(1, 5);
				setItems((prevState) => [...prevState, ...results.products]);
			}
			fetchData();
		}, []);
	return  items
}

export default useFetchProducts