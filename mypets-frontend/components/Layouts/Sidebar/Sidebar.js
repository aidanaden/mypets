import { useContext } from "react";
import {
  useDisclosure,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Stack,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";

// import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import SearchbarGroup from "../../Common/SearchbarGroup/SearchbarGroup";
import NavbarCartModalBtn from "./NavbarCartModalBtn/NavbarCartModalBtn";
import NavbarUserModalBtn from "./NavbarUserModalBtn/NavbarUserModalBtn";
import NavbarUserIcon from "./NavbarUserIcon/NavbarUserIcon";
import AuthContext from "../../../context/AuthContext";
import LoginModalBtn from "./LoginModalBtn/LoginModalBtn";
// import SignupModalBtn from "../../Form/SignupModalBtn/SignupModalBtn";

export default function Sidebar() {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const { user, logoutUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    sidebar.onClose();
  };

  const handlePastOrders = () => {
    router.push("/orders");
    sidebar.onClose();
  };

  const Logo = ({ isMobile, ...props }) => {
    return (
      <Center
        justifyContent="center"
        justifyItems="center"
        justifySelf="center"
        {...props}
      >
        <NextLink href="/" as="/" passHref>
          <a>
            <img
              src="/cropped-logo.svg"
              width={isMobile ? "187" : "125"}
              height={isMobile ? "78" : "52"}
            />
          </a>
        </NextLink>
      </Center>
    );
  };

  const NavItem = ({ children, ...rest }) => {
    return (
      <Box
        borderWidth="1px"
        borderColor="gray.400"
        rounded="lg"
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _hover={{
          bg: "gray.200",
          color: "gray.800",
        }}
        role="group"
        fontWeight="semibold"
        fontSize="lg"
        transition=".15s ease"
        {...rest}
      >
        {children}
      </Box>
    );
  };

  const SidebarContent = (props) => (
    <Stack
      direction="column"
      spacing={{ base: 8 }}
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      px={{ base: 4 }}
      py={{ base: 10 }}
      overflowX="hidden"
      overflowY="auto"
      borderColor="inherit"
      borderRightWidth="1px"
      w="60"
      bg="gray.100"
      {...props}
    >
      <Logo
        isMobile
        display={{ base: "block", lg: "none" }}
        // bg='red.100'
      />
      {user ? (
        <Stack
          spacing={{ base: 4 }}
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <NavItem onClick={handlePastOrders}>Past orders</NavItem>
          <NavbarUserModalBtn isMobile NavItem={NavItem} />
          <NavItem onClick={handleLogout}>Log out</NavItem>
        </Stack>
      ) : (
        <LoginModalBtn />
      )}
      {/* {categories ?
            <Box>
                <SectionHeader>
                    Categories
                </SectionHeader>
                <Stack
                    spacing={{ base: 2 }}
                    direction="column"
                    as="nav"
                    fontSize="sm"
                    color="gray.600"
                    aria-label="Sub Navigation"
                >
                    {categories.map((category, i) => (
                        <NavItem
                            key={i}
                            fontSize='sm'
                            fontWeight='normal'
                        >
                            {category}
                        </NavItem>
                    ))}
                </Stack>
            </Box> : <></>} */}
    </Stack>
  );
  return (
    <Box zIndex="banner" position="sticky">
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
        direction="column"
        spacing={{ base: 6 }}
        color="gray.600"
        py={{ base: 4 }}
        px={{ base: 6 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
        justifyContent="center"
        transition=".3s ease"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          maxW={{ lg: "1200px" }}
          w="100%"
        >
          <Box
            flex={{ base: 1, lg: "auto" }}
            display={{ base: "flex", lg: "none" }}
          >
            <IconButton
              onClick={sidebar.onOpen}
              icon={
                sidebar.isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Box>
          <Logo display={{ base: "none", lg: "inherit" }} />
          <SearchbarGroup display={{ base: "none", md: "inherit" }} />
          {user ? (
            <ButtonGroup alignItems="center" spacing={6}>
              <NavbarCartModalBtn />
              <NavbarUserIcon />
            </ButtonGroup>
          ) : (
            <ButtonGroup spacing={4}>
              <LoginModalBtn />
              {/* <SignupModalBtn /> */}
            </ButtonGroup>
          )}
        </Stack>
        <SearchbarGroup display={{ base: "inherit", md: "none" }} />
      </Stack>
    </Box>
  );
}
