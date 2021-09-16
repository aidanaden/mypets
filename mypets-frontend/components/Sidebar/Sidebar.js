import { useContext } from 'react'
import {
    useDisclosure,
    Box,
    Flex,
    Icon,
    Text,
    Collapse,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    IconButton,
    Stack,
    ButtonGroup,
    InputGroup,
    InputLeftElement,
    Input,
    Avatar
} from '@chakra-ui/react'
import { MdKeyboardArrowRight, MdHome } from 'react-icons/md'
import { FaBell, FaClipboardCheck, FaRss } from 'react-icons/fa'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { BsGearFill } from 'react-icons/bs'
import { AiFillGift } from 'react-icons/ai'
import { HiCollection, HiCode } from 'react-icons/hi'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import SearchbarGroup from '../SearchbarGroup/SearchbarGroup'
import NavbarCartModalBtn from '../NavbarCartModalBtn/NavbarCartModalBtn';
import NavbarUserModalBtn from '../NavbarUserModalBtn/NavbarUserModalBtn'
import NavbarUserIcon from '../NavbarUserIcon/NavbarUserIcon';
import AuthContext from '../../context/AuthContext'
import LoginModalBtn from '../LoginModalBtn/LoginModalBtn';
import SignupModalBtn from '../SignupModalBtn/SignupModalBtn';

export default function Sidebar() {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const { user, logoutUser } = useContext(AuthContext)

    const Logo = () => {
        return (
            <Box display={{ base: 'none', lg: 'block' }}>
                <NextLink
                    href='/'
                    as='/'
                    passHref
                >
                    <a><img src='/cropped-logo.svg' width='125' height='52' /></a>
                </NextLink>
            </Box>
        )
    }

    const NavItem = (props) => {
        const { icon, children, ...rest } = props;
        return (
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color="inherit"
                _hover={{
                    bg: "gray.100",
                    color: "gray.900"
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="2"
                        boxSize="4"
                        _groupHover={{
                            color: "gray.600"
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

    const SidebarContent = (props) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="white"
            borderColor="inherit"
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                <Logo />
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <NavItem icon={MdHome}>
                    Home
                </NavItem>
                <NavItem icon={FaRss}>
                    Articles
                </NavItem>
                <NavItem icon={HiCollection}>
                    Collections
                </NavItem>
                <NavItem icon={FaClipboardCheck}>
                    Checklists
                </NavItem>
                <NavItem
                    icon={HiCode}
                    onClick={integrations.onToggle}
                >
                    Integrations
                    <Icon
                        as={MdKeyboardArrowRight}
                        ml="auto"
                        transform={integrations.isOpen && "rotate(90deg)"}
                    />
                </NavItem>
                <Collapse in={integrations.isOpen}>
                    <NavItem pl="12" py="2">
                        Shopify
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Slack
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Zapier
                    </NavItem>
                </Collapse>
                <NavItem icon={AiFillGift}>
                    Changelog
                </NavItem>
                <NavItem icon={BsGearFill}>
                    Settings
                </NavItem>
            </Flex>
        </Box>
    );
    return (
        <Box
            zIndex='banner'
            position='absolute'
        >
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Stack
                direction='column'
                spacing={{ base: 6 }}
                color='gray.600'
                py={{ base: 4 }}
                px={{ base: 6 }}
                borderBottom={1}
                borderStyle='solid'
                borderColor='gray.200'
                align='center'
                justifyContent='center'
                transition=".3s ease"
            >
                <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    maxW={{ lg: '1200px' }}
                    w='100%'
                >
                    <Box
                        flex={{ base: 1, lg: 'auto' }}
                        display={{ base: 'flex', lg: 'none' }}
                    >
                        <IconButton
                            onClick={sidebar.onOpen}
                            icon={
                                sidebar.isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant='ghost'
                            aria-label='Toggle Navigation'
                        />
                    </Box>
                    <Logo />
                    <SearchbarGroup display={{ base: 'none', md: 'inherit' }} />
                    {user ? (
                        <ButtonGroup
                            alignItems='center'
                            spacing={6}
                        >
                            <NavbarCartModalBtn />
                            <NavbarUserIcon />
                        </ButtonGroup>
                    ) : (
                            <ButtonGroup
                                spacing={4}
                            >
                                <LoginModalBtn />
                                <SignupModalBtn />
                            </ButtonGroup>
                        )}
                </Stack>
                <SearchbarGroup
                    display={{ base: 'inherit', md: 'none' }}
                />
            </Stack>
        </Box>
    );
}