// components
import {
  Container,
  Flex,
  VStack,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import Searchbar from "components/Searchbar";
import Products from "components/Products";
import Pagination from "components/Pagination";
import Featured from "components/Featured";
import { Categories } from "components/Categories";
// styles
import "@fontsource/gluten";
import "@fontsource/raleway";
import "@fontsource/source-code-pro";
// hooks
import { useEffect, useState } from "react";
import useFetchProducts from "hooks/useFetchProducts";
import { useFetchByCategory } from "hooks/useFetchCategory";
// fetch
import { products } from "services";

const Home = () => {
  const listOfProducts = useFetchProducts(products);

  // by category
  const [category, setcategory] = useState("chicle");
  const handleCategory = (e) => setcategory(e.target.value);
  const productsByCategory = useFetchByCategory(category);

  return (
    <>
      <Container maxW="full" fontFamily="Gluten" color="teal" fontSize={80}>
        <Heading fontFamily="Raleway">Welcome to the home page!</Heading>
      </Container>

      <Searchbar />

      {/* render categories and products */}
      {/* <Categories /> */}
      <VStack>
        <Flex>
          <Button value="chicle" onClick={handleCategory}>
            Chicle
          </Button>
          <Button value="pipas" onClick={handleCategory}>
            Pipas
          </Button>
        </Flex>
        <Flex>
          <Products v="100" h="20" items={productsByCategory} />
        </Flex>
      </VStack>
      {/* render category */}

      <Container
        minW="container.xl"
        p={4}
        borderStyle="double"
        borderColor="teal"
        borderWidth={4}
        margin={10}
      >
        <Flex h="90vh" px={-8} py={5}>
          <VStack v="full" h="full" p={8} spacing={10} alignItems="center">
            <Products v="100" h="20" items={listOfProducts} />
            <Box alignContent="center" fontFamily="Source Code Pro">
              <Pagination />
            </Box>
          </VStack>
        </Flex>
      </Container>
      <Featured />
    </>
  );
};

export default Home;
