import React from 'react'
import { Flex, IconButton, Text, HStack } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

function CartProductQuantityPicker({ addQuantity, minusQuantity, quantity=1 }) {
    return (
        <HStack w='auto' justifyContent='center'>
            <IconButton 
                icon={<MinusIcon />} 
                size="sm" 
                onClick={minusQuantity}/>
            <Text w="32px" align="center" alignSelf='center' fontSize="lg">
                {quantity}
            </Text>
            <IconButton 
                icon={<AddIcon />} 
                size="sm"
                onClick={addQuantity}/>
        </HStack>
    )
}

export default CartProductQuantityPicker
