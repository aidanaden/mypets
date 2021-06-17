import { useContext } from 'react'
import { useRouter } from 'next/router'
import { 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuDivider, 
    MenuItem, 
    Button, 
    Avatar, 
    useDisclosure 
} from '@chakra-ui/react'

import AuthContext from '../../context/AuthContext'
import NavbarUserModalBtn from '../NavbarUserModalBtn/NavbarUserModalBtn'


function NavbarUserIcon() {
    const { logoutUser } = useContext(AuthContext)
    const router = useRouter()

    const handlePastOrders = () => {
        router.push('/orders')
    }

    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
            >
                <Avatar
                    size={'md'}
                />
            </MenuButton>
            <MenuList zIndex='popover'>
                <NavbarUserModalBtn />
                <MenuItem onClick={handlePastOrders}>Past orders</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logoutUser}>Log out</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default NavbarUserIcon
