import { useState, useContext } from 'react'
import { Flex, IconButton, Text, HStack } from '@chakra-ui/react'
import { AddIcon, MinusIcon, SpinnerIcon } from '@chakra-ui/icons'

import MypetsSpinner from '../MypetsSpinner/MypetsSpinner'
import AuthContext from '../../context/AuthContext'

function CartProductQuantityPicker({ addQuantity, minusQuantity, quantity }) {

    const [qty, setQty] = useState(quantity)
    const [loading, setLoading] = useState(false)
    const { cartLoading } = useContext(AuthContext)

    const combinedAddQuantity = () => {
        addQuantity()
        let temp_qty = qty
        temp_qty += 1
        setQty(temp_qty)
    }

    const combinedMinusQuantity = () => {
        minusQuantity()
        let temp_qty = qty
        qty > 0 ? temp_qty -= 1 : 0
        setQty(temp_qty)
    }

    return (
        <HStack w='auto' justifyContent='center'>
            <IconButton 
                icon={<MinusIcon />} 
                size="sm" 
                onClick={combinedMinusQuantity}
                isLoading={cartLoading}
            />
            <Text w="32px" align="center" alignSelf='center' fontSize="lg">
                {qty}
            </Text>
            <IconButton 
                icon={<AddIcon />} 
                size="sm"
                onClick={combinedAddQuantity}
                isLoading={cartLoading}
            />
        </HStack>
    )
}

export default CartProductQuantityPicker
