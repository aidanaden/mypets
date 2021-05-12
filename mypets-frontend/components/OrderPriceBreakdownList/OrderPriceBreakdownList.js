
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

function OrderPriceBreakdownList({ groupedProducts, productNames, totalPrice }) {

    let prices = {}

    productNames.map((productName,i) => {
        prices[productName] = 0
        groupedProducts[productName].map((product,i) => {
            prices[productName] += product.price
        })
    })

    console.log('total prices for each product type: ', prices)

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
                        <Td textAlign='right' fontWeight='bold'>{groupedProducts[productName].length}</Td>
                        <Td textAlign='right' fontWeight='bold'>{prices[productName].toFixed(2)}</Td>
                    </Tr>
                ))}
                <Tr>
                    <Td fontWeight='bold'></Td>
                    <Td textAlign='right' fontWeight='bold'></Td>
                    <Td textAlign='right' fontWeight='bold'>SG${totalPrice}</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}

export default OrderPriceBreakdownList
