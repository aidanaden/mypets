import {   
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement
} from '@chakra-ui/react'
import { LockIcon, CheckIcon } from '@chakra-ui/icons'

function PasswordInputGroup({ field, valid, id }) {
    return (
        <>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<LockIcon />}
                />
                <Input {...field} id={id} type='password' placeholder='Password' focusBorderColor='mypets.100' />
                <InputRightElement children={<CheckIcon color={valid ? 'green.400' : 'white' }/>} />
            </InputGroup>
        </>
    )
}

export default PasswordInputGroup
