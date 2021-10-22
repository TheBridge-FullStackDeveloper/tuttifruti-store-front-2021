import SearchBox from "components/Searchbox"
import Products from "pages/Products"
import Pagination from "components/Pagination"
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

  return (
    <>
      <Container maxW="full" fontFamily="Gluten" color="teal" fontSize={80}>
        <Heading fontFamily="Raleway">Welcome to the home page!</Heading>

      </Container>

      <SearchBox/>

      <Container minW="container.xl" p={4} borderStyle="double" borderColor="teal" borderWidth={4} margin={10}>
        <Flex h="90vh" px={-8} py={5}>
          <VStack
            v="full"
            h="full"
            p={8}
            spacing={10}
            alignItems="center">
            <Products v="100" h="20"/>
            <Box alignContent="center" fontFamily="Source Code Pro">
              <Pagination/>
            </Box>
          </VStack>
        </Flex>
        </Container>
    </>
  )
}

export default Home