import {   
    Input,
    InputGroup,
    InputRightElement,
    InputLeftAddon,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function TelInputGroup({ field, valid }) {
    return (
        <>
            <InputGroup>
                <InputLeftAddon children='+65' />
                <Input {...field} id='tel' type='tel' placeholder='Phone number' focusBorderColor='mypets.100' />
                <InputRightElement children={<CheckIcon color={valid ? 'green.400' : 'white' }/>} />
            </InputGroup>
        </>
    )
}

export default TelInputGroup
