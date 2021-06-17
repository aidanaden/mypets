import {   
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement
} from '@chakra-ui/react'
import { CalendarIcon, CheckIcon } from '@chakra-ui/icons'

function BirthdayInputGroup({ field, valid, error }) {
    return (
        <>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<CalendarIcon />}
                />
                <Input {...field} id='dob' placeholder='e.g 20/11/1998' focusBorderColor='mypets.100' />
                <InputRightElement children={<CheckIcon color={valid ? 'green.400' : 'white' }/>} />
            </InputGroup>
        </>
    )
}

export default BirthdayInputGroup