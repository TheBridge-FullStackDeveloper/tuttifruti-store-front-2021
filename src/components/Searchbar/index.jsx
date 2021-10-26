import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function Searchbar({ search, handleSearch }) {
  return (
    <Box w={800} textAlign="center" margin="auto" my={8}>
      <InputGroup>
        <Input
          variant="filled"
          type="text"
          placeholder="Busca acá"
          value={search}
          onChange={handleSearch}
        />
        <InputLeftElement children={<Search2Icon />} color="gray.500" />
      </InputGroup>
    </Box>
  );
}
