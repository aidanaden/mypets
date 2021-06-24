import React from 'react'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    IconButton
} from "@chakra-ui/react"

function CartPriceBreakdownList({ groupedProducts, productNames, totalPrice }) {
    const productTotalQuantity = (order_products) => {
        let totalQuantity = 0
        order_products.map((order_product) => {
            totalQuantity += order_product.quantity
        })
        return totalQuantity
    }

    const productTotalPrice = (order_products) => {
        let totalPrice = 0
        order_products.map((order_product) => {
            totalPrice += order_product.total_price
        })
        return totalPrice
    }

    return (
        <>
            <Table
                variant="unstyled" 
                size={{ base: 'sm', lg: 'md' }} 
                mt={{ base: 8, lg: 0 }}
            >
                <Thead>
                    <Tr fontSize='xs' fontWeight='light'>
                        <Th>Product</Th>
                        <Th>Qty</Th>
                        <Th textAlign='right'>Subtotal</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {productNames.map((productName, i) => (
                        <Tr key={i}>
                            <Td fontWeight='bold'>{productName}</Td>
                            <Td fontWeight='bold'>{productTotalQuantity(groupedProducts[productName])}</Td>
                            <Td textAlign='right' fontWeight='bold'>{productTotalPrice(groupedProducts[productName]).toFixed(2)}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Box fontWeight='bold' fontSize='xl' textAlign='right' mt={4}>
                SG${totalPrice.toFixed(2)}
            </Box>
        </>
    )
}

export default CartPriceBreakdownList
