import {   
    Input
} from '@chakra-ui/react'

function UnitInput({ field }) {
    return (
        <Input {...field} id='unit' placeholder='Unit no.' focusBorderColor='mypets.100' />
    )
}

export default UnitInput