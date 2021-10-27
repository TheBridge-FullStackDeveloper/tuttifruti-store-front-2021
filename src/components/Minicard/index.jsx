import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from "@chakra-ui/react";
  
  
  
  export default function Minicard({ name, category, price, product_pic }) {
    return (
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          m={15}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            maxH={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${product_pic})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={130}
              width={180}
              objectFit={"cover"}
              src={product_pic}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text color={"gray.500"} fontSize={"m"} textTransform={"uppercase"}>
              {category}
            </Text>
            <Heading fontSize={"l"} fontFamily={"body"} fontWeight={500} color={"gray.500"}>
              {name}
            </Heading>
            <Stack direction={"row"} align={"center"} color={"gray.500"} fontSize={"l"}>
              <Text fontWeight={800} fontSize={"xl"}>
                {price}€
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
  