import ReactPaginate from 'react-paginate';

import {
    Box,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';


export default function Pagination () {
    return (
        <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>TuttiFrutti Store</Box>
          </Flex>
          <ReactPaginate />
      </Box>
    </>

    )
}