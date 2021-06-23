
import React from 'react'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption
} from "@chakra-ui/react"

function OrderPriceBreakdownList({ groupedOrderProducts, productNames, totalPrice }) {
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
        <Table variant="unstyled" size={{ base: 'sm', md: 'md', lg: 'md' }}>
            <Thead textColor='gray.600'>
                <Tr fontSize='xs'>
                    <Th>Product</Th>
                    <Th textAlign='right'>Qty</Th>
                    <Th textAlign='right'>Subtotal</Th>
                </Tr>
            </Thead>
            <Tbody>
                {productNames.map((productName, i) => (
                    <Tr key={i}>
                        <Td fontWeight='bold'>{productName}</Td>
                        <Td textAlign='right' fontWeight='bold'>{productTotalQuantity(groupedOrderProducts[productName])}</Td>
                        <Td textAlign='right' fontWeight='bold'>{productTotalPrice(groupedOrderProducts[productName]).toFixed(2)}</Td>
                    </Tr>
                ))}
            </Tbody>
            <Box fontWeight='bold' fontSize='xl' textAlign='right' mt={4} w='100%'>
                SG${totalPrice.toFixed(2)}
            </Box>
        </Table>
    )
}

export default OrderPriceBreakdownList
