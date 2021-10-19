import { getProducts } from "services";
import { useEffect, useState } from "react";

export default () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await getProducts();
      console.log("results", results);
      for (let product of results.products) {
        setProducts((prevState) => [...prevState, product]);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>This is the Products page</h1>
      {products
        ? products.map((product, i) => {
            return <p key={i}>{product.name}</p>;
          })
        : null}
    </div>
  );
};
