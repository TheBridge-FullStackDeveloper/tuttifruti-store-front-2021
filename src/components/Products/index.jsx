import ProductCard from "components/card";
import { Flex } from "@chakra-ui/react";

export default ({items}) => {

  return (
    <Flex d="flex">
      {items.length ?
      (items.map((item, i) => {
          return <ProductCard key={i} {...item}/>;
        })) :
      (<h4>Loading...</h4>)}
    </Flex>
  );
};