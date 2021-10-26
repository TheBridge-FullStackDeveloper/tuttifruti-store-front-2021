import { useState, useEffect } from "react";
import { products } from "services";

export const useFetchByCategory = (category) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await products.getByCategory(category);
      setItems(() => [...results.data]);
    };
    fetchData();
  }, [category]);
  return items;
};
