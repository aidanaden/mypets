import {   
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function PostalInputGroup({ field, valid }) {
    return (
        <InputGroup>
            <Input {...field} id='postal' placeholder='Postal code' focusBorderColor='mypets.100' />
            <InputRightElement children={<CheckIcon color={valid ? 'green.400' : 'white' }/>} />
        </InputGroup>
    )
}

export default PostalInputGroup