import { Box, Input } from "@chakra-ui/react";

export default function Searchbar({ search, handleSearch }) {
  return (
    <Box w={800} borderWidth={3} borderColor="pink.300" textAlign="center">
      <Input
        placeholder="Write the product name"
        value={search}
        onChange={handleSearch}
      />
    </Box>
  );
}
