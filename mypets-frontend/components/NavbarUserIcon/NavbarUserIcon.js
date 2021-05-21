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
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                />
            </MenuButton>
            <MenuList>
                <NavbarUserModalBtn />
                <MenuItem onClick={handlePastOrders}>Past orders</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logoutUser}>Log out</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default NavbarUserIcon
