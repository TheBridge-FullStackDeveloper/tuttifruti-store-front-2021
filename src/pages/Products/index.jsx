import { getProducts } from "services";
import { useEffect, useState } from "react";
import ProductCard from "components/card";
import { Box } from "@chakra-ui/react";

export default () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await getProducts(1, 5);
      console.log("results", results);
      for (let product of results.products) {
        setProducts((prevState) => [...prevState, product]);
      }
    }
    fetchData();
  }, []);

  return (
    <Box d="flex">
      {products ? (
        products.map((product, i) => {
          return <ProductCard key={i} {...product} />;
        })
      ) : (
        <h4>Loading...</h4>
      )}
    </Box>
  );
};
