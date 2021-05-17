import { useState } from 'react'
import { Flex, IconButton, Text, HStack } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

function CartProductQuantityPicker({ addQuantity, minusQuantity, quantity }) {

    const [qty, setQty] = useState(quantity)

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
                onClick={combinedMinusQuantity}/>
            <Text w="32px" align="center" alignSelf='center' fontSize="lg">
                {qty}
            </Text>
            <IconButton 
                icon={<AddIcon />} 
                size="sm"
                onClick={combinedAddQuantity}/>
        </HStack>
    )
}

export default CartProductQuantityPicker
