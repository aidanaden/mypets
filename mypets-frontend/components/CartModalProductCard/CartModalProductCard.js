import React from 'react'
import { useState } from 'react'
import { 
    Box, 
    Flex, 
    HStack, 
    VStack,
    Text, 
    Image, 
    Badge, 
    Table, 
    TableCaption, 
    Thead,
    Tr,
    Th,
    Td,
    Tbody
} from '@chakra-ui/react'
import lodash from 'lodash'

import CartProductQuantityPicker from '../CartProductQuantityPicker/CartProductQuantityPicker'
import NextImage from 'next/image'
import { imageToUrl } from '../../utils/urls'

/**
 * Product with different variations 
 * 
 * @param  {product} 
 */
function CartModalProductCard({ products }) {

    const [quantity, setQuantity] = useState(1)

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const minusQuantity = () => {
        setQuantity(quantity <= 0 ? 0 : quantity - 1)
    }

    const products_weighted = lodash.groupBy(products, 'weight')
    const weights = Object.keys(products_weighted)

    return (
        <Box mb={8}>
            {/* <HStack mb={6}>
                <NextImage src='/sierra-mountain-dry-canine-recipe.png' width='100' height='100'/>
                <Box>
                    <Text fontWeight='semibold'>ROASTED LAMB & GRAIN-FREE</Text>
                    <Badge colorScheme='blackAlpha'>Merchant Name</Badge>
                </Box>
            </HStack> */}
            <HStack mb={6}>
                <NextImage src={imageToUrl(products[0].image)} width='100' height='100'/>
                <Box>
                    <Text fontWeight='semibold'>{products[0].name}</Text>
                    <Badge colorScheme='blackAlpha'>{products[0].merchant.name}</Badge>
                </Box>
            </HStack>
            <Table variant='unstyled' size='sm'>
                <Thead>
                    <Tr fontStyle='italic'>
                        <Th textAlign='center'>Variant</Th>
                        <Th textAlign='center'>Price</Th>
                        <Th textAlign='center'>Quantity</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {weights.map((weight, i) => (
                        <Tr key={i}>
                            <Th textAlign='center' fontSize='sm'>{weight}KG</Th>
                            <Th textAlign='center' fontSize='sm'>SG${products_weighted[weight][0].price}</Th>
                            <Th>
                                <CartProductQuantityPicker 
                                    addQuantity={addQuantity} 
                                    minusQuantity={minusQuantity}
                                    quantity={quantity} 
                                />
                            </Th>
                        </Tr>
                    ))}
                    
                    {/* <Tr>
                        <Th textAlign='center' fontSize='sm'>1.50KG</Th>
                        <Th textAlign='center' fontSize='sm'>SG$6.99</Th>
                        <Th>
                            <CartProductQuantityPicker 
                            addQuantity={addQuantity} 
                            minusQuantity={minusQuantity}
                            quantity={quantity} 
                            />
                        </Th>
                    </Tr>
                    <Tr>
                        <Th textAlign='center' fontSize='sm'>1.50KG</Th>
                        <Th textAlign='center' fontSize='sm'>SG$6.99</Th>
                        <Th>
                            <CartProductQuantityPicker 
                            addQuantity={addQuantity} 
                            minusQuantity={minusQuantity}
                            quantity={quantity} 
                            />
                        </Th>
                    </Tr> */}
                </Tbody>
            </Table>
        </Box>
    )
}

export default CartModalProductCard
