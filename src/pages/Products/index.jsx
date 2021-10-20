import { products } from "services";
import { useEffect, useState } from "react";
import ProductCard from "components/card";
import { Box } from "@chakra-ui/react";

export default () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await products.getProducts(1, 5);
      setItems((prevState) => [...prevState, ...results.products]);
    }
    fetchData();
  }, []);

  return (
    <Box d="flex">
      {items.length ? (
        items.map((item, i) => {
          return <ProductCard key={i} {...item} />;
        })
      ) : (
        <h4>Loading...</h4>
      )}
    </Box>
  );
};
