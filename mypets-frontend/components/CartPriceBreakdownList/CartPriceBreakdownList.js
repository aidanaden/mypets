import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption
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
        <Table variant="unstyled" size='md'>
            <Thead>
                <Tr>
                    <Th>Product</Th>
                    <Th textAlign='right'>Quantity</Th>
                    <Th textAlign='right'>Subtotal</Th>
                </Tr>
            </Thead>
            <Tbody>
                {productNames.map((productName, i) => (
                    <Tr key={i}>
                        <Td fontWeight='bold'>{productName}</Td>
                        <Td textAlign='right' fontWeight='bold'>{productTotalQuantity(groupedProducts[productName])}</Td>
                        <Td textAlign='right' fontWeight='bold'>{productTotalPrice(groupedProducts[productName]).toFixed(2)}</Td>
                    </Tr>
                ))}
                <Tr>
                    <Td fontWeight='bold'></Td>
                    <Td textAlign='right' fontWeight='bold'></Td>
                    <Td textAlign='right' fontWeight='bold'>SG${totalPrice.toFixed(2)}</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}

export default CartPriceBreakdownList
