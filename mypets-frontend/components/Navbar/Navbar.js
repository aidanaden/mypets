import { ReactNode, useContext } from 'react';
import {
    Divider,
    Collapse,
    Box,
    Flex,
    IconButton,
    Link,
    useDisclosure,
    Stack,
    ButtonGroup
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import SearchbarGroup from '../SearchbarGroup/SearchbarGroup'
import NavbarCartModalBtn from '../NavbarCartModalBtn/NavbarCartModalBtn';
import NavbarUserModalBtn from '../NavbarUserModalBtn/NavbarUserModalBtn'
import NavbarUserIcon from '../NavbarUserIcon/NavbarUserIcon';
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

export default function Navbar({ products }) {

    const { isOpen, onToggle } = useDisclosure();
    const { user } = useContext(AuthContext)

    return (
        <Box>
            <Flex
                bg='white'
                color='gray.600'
                py={{ base: 4 }}
                px={{ base: 2 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor='gray.200'
                align={'center'}
                justifyContent='center'
            >
                <Flex
                    alignItems={'center'} 
                    justifyContent={'space-between'} 
                    maxW={{ lg: '1200px' }}
                    w='100%'
                    px={4}
                >
                    <Flex
                        flex={{ base: 1, lg: 'auto' }}
                        display={{ base: 'flex', lg: 'none' }}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    
                    <Box display={{ base: 'none', lg: 'block'}}>
                        <NextLink 
                            href='/' 
                            as='/' 
                            passHref
                        >
                            <a><img src='/cropped-logo.svg' width='125' height='52' /></a>
                        </NextLink>
                    </Box>

                    <SearchbarGroup display={{ base: 'none', lg: 'inherit' }}/>

                    { user ? ( 
                    <ButtonGroup alignItems='center' spacing={6}>
                        <NavbarCartModalBtn />
                        <NavbarUserIcon />
                    </ButtonGroup>     
                    ) : (
                    <ButtonGroup spacing={4}>
                        <LoginModalBtn />
                        <SignupModalBtn />
                    </ButtonGroup>
                    )}
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav user={user}/>
            </Collapse>
        </Box>
    );
}

const MobileNav = ({ user }) => {
    return (
        <Box
            bg='white'
            p={4}
            display={{ base: 'inherit', lg: 'none' }}
        >
            <Stack spacing={4}>
                <SearchbarGroup display={{ base: 'inherit', lg: 'none' }}/>
                { user && (
                    <>
                        <Divider/>
                        <NavbarUserModalBtn mode='mobile' />
                        <Box px={2}>
                            Past orders
                        </Box>
                        <Divider/>
                        <Box px={2}>
                            Log out 
                        </Box>
                    </>
                )}
            </Stack>
        </Box>
    );
};