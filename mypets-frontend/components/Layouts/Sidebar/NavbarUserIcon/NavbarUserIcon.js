import { useContext } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";

import AuthContext from "../../../../context/AuthContext";
import NavbarUserModalBtn from "../NavbarUserModalBtn/NavbarUserModalBtn";

function NavbarUserIcon() {
  const { logoutUser } = useContext(AuthContext);
  const router = useRouter();

  const handlePastOrders = () => {
    router.push("/orders");
  };

  return (
    <Box display={{ base: "none", lg: "block" }}>
      <Menu>
        <MenuButton
          as={Avatar}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          boxSize={{ base: "2.25em" }}
        />
        <MenuList zIndex="popover">
          <NavbarUserModalBtn />
          <MenuItem onClick={handlePastOrders}>Past orders</MenuItem>
          <MenuDivider />
          <MenuItem onClick={logoutUser}>Log out</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default NavbarUserIcon;
