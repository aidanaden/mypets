import { ReactNode, useContext } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Spacer,
    Image,
    ButtonGroup
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import SearchbarGroup from '../SearchbarGroup/SearchbarGroup'
import NavbarCartModalBtn from '../NavbarCartModalBtn/NavbarCartModalBtn';
import NavbarUserIcon from '../NavbarUserIcon/NavbarUserIcon';
import NextChakraLink from '../NextChakraLink/NextChakraLink';
import { API_ORDERS_URL } from '../../utils/urls'
import AuthContext from '../../context/AuthContext'
import LoginModalBtn from '../LoginModalBtn/LoginModalBtn';
import SignupModalBtn from '../SignupModalBtn/SignupModalBtn';

const Links = ['Past Orders', 'User Profile'];

const NavLink = ({ children }) => (
    <NextLink href='#' as='#' passHref>
        <Link
            p={1}
            borderBottomWidth={1}
            borderBottomColor="white"
            _hover={{
                borderBottomColor: "gray.900"
            }}
        >
            {children}
        </Link>
    </NextLink>
    
);

export default function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { user } = useContext(AuthContext)

    return (
        <>
            <Flex bg={useColorModeValue('white.100', 'white.100')} px={4} py={4} justifyContent={'center'} borderBottomWidth="1px">
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'} w="1200px" px={4}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: !isOpen ? 'none' : 'inherit' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <NextLink 
                        href='/' 
                        as='/' 
                        passHref
                    >
                        <a>
                            <NextImage src='/mypets-2.svg' width='150' height='35' />
                        </a>
                    </NextLink>
                    <SearchbarGroup />
                    <Flex alignItems={'center'}>
                        {/* if logged in, show past orders, cart + user icon */}
                        { user ? ( 
                            <ButtonGroup alignItems='center' spacing={6}>
                                <NavbarCartModalBtn />
                                <NavbarUserIcon />
                            </ButtonGroup>     
                        ) : (
                            // else, show login/sign up button group 
                            <ButtonGroup spacing={4}>
                                <LoginModalBtn />
                                <SignupModalBtn />
                            </ButtonGroup>
                        )}
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link,i) => (
                                <NavLink key={i}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Flex>
        </>
    );
}