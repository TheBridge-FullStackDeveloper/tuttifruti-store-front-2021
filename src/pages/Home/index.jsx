import SearchBox from "components/Searchbox"
import Products from "pages/Products"
import Pagination from "components/Pagination"
import {
  Container,
  Flex,
  VStack,
  Box
} from "@chakra-ui/react"
import "@fontsource/gluten"
import "@fontsource/raleway"
import "@fontsource/source-code-pro"

const Home = () => {

  return (
    <>
      <Container maxW="full" fontFamily="Gluten" color="teal" fontSize={80}>
        Welcome to the home page!

      </Container>

      <SearchBox/>

      <Container maxW="container.xl" p={4} borderColor="green" borderWidth={4} margin={3}>
        <Flex h="90vh" py={20}>
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