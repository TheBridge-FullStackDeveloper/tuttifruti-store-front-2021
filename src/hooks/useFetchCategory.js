import { useState, useEffect } from "react";
import { products } from "services";

// // 🔥 review
export const useFetchByCategory = (category) => {
	  const [items, setItems] = useState([]);

		useEffect(() => {
			async function fetchData() {
				const results = await products.getByCategory(category);
				setItems(() => [...results.data]);
			}
			fetchData();
		}, [category]);
	return  items
}