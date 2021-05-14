import { MenuButton, Button } from '@chakra-ui/react'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import { ChevronDownIcon } from '@chakra-ui/icons'

function MypetsMenuBtn({ menuBtnText }) {
    return (
        <>
        <MenuButton 
            px={4} 
            py={6} 
            as={Button} 
            rightIcon={<ChevronDownIcon />} 
            variant='outline' 
            borderColor='mypets.100' 
            _hover={{ textColor: 'mypets.100' }}
            _expanded={{ textColor: 'mypets.100' }}
        >
            {menuBtnText}
        </MenuButton>
        </>
    )
}

export default MypetsMenuBtn
