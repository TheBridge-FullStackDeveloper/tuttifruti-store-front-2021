
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

export default function Nav() {
    return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>TuttiFrutti Store</Box>
            <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <Button
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://www.svgrepo.com/show/48190/shopping-cart.svg'}
                  />
                </Button>
                <Button
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Button>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}