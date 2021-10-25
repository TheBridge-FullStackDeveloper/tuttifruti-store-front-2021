import Searchbar from "components/Searchbar"
import Products from "components/Products"
import Pagination from "components/Pagination"
import Featured from "components/Featured"
import useFetchProducts from "hooks/useFetchProducts"
import {products} from "services"
import {
  Container,
  Flex,
  VStack,
  Box,
  Heading
} from "@chakra-ui/react"
import "@fontsource/gluten"
import "@fontsource/raleway"
import "@fontsource/source-code-pro"

const Home = () => {
  const listOfProducts = useFetchProducts(products)
  return (
    <>
      <Container maxW="full" fontFamily="Gluten" color="teal" fontSize={80}>
        <Heading fontFamily="Raleway">Welcome to the home page!</Heading>

      </Container>

      <Searchbar/>

      <Container minW="container.xl" p={4} borderStyle="double" borderColor="teal" borderWidth={4} margin={10}>
        <Flex h="90vh" px={-8} py={5}>
          <VStack
            v="full"
            h="full"
            p={8}
            spacing={10}
            alignItems="center">
            <Products v="100" h="20" items={listOfProducts}/>
            <Box alignContent="center" fontFamily="Source Code Pro">
              <Pagination/>
            </Box>
          </VStack>
        </Flex>
        </Container>
        <Featured/>
    </>
  )
}

export default Home