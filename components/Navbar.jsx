import React from 'react'
import Link from 'next/link';
import { 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    IconButton,
    Flex,
    Box,
    Spacer,
} from '@chakra-ui/react';
import { FcMenu } from 'react-icons/fc'

const Navbar = () => {
  return (
    <Flex p="2" justifyContent="space-between" borderBottom="2px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/">Real State</Link>
        </Box>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400"/>
                <MenuList>
                    <Link href="/" passHref>
                       <MenuItem>About</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
  )
}

export default Navbar;