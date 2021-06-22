import React from 'react'
import { Flex, IconButton, Text } from "@chakra-ui/react"
import { AddIcon, MinusIcon, SmallAddIcon } from "@chakra-ui/icons"
import { useState } from 'react'

function ProductQuantityPicker({ addQuantity, minusQuantity, quantity=1 }) {

    return (
        <Flex>
            <IconButton 
                icon={<MinusIcon />} 
                size="sm" 
                onClick={minusQuantity}/>
            <Text w="42px" align="center" alignSelf='center' fontSize="xl">
                {quantity}
            </Text>
            <IconButton 
                icon={<AddIcon />} 
                size="sm"
                onClick={addQuantity}
            />
        </Flex>
    )
}

export default ProductQuantityPicker
