import { useState, useEffect } from "react";

const useFetchProducts = (productService, search) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (search) {
        const results = await productService.getSearchedProducts(search);
        setItems(results.data);
      } else {
        const results = await productService.getProducts(1, 5);
        setItems(results.products);
      }
    }
    fetchData();
  }, [search]);
  return items;
};

export default useFetchProducts;
