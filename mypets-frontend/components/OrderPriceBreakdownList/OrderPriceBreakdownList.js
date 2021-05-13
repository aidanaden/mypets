
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

function OrderPriceBreakdownList({ groupedOrderProducts, productNames, totalPrice }) {

    let prices = {}
    let productQty = {}
    let calculatedTotalPrice = 0

    productNames.map((productName,i) => {
        prices[productName] = 0
        productQty[productName] = 0
        groupedOrderProducts[productName].map((orderProduct,i) => {
            prices[productName] += orderProduct.product.price * orderProduct.quantity 
            productQty[productName] += orderProduct.quantity
            calculatedTotalPrice += orderProduct.product.price
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
                        <Td textAlign='right' fontWeight='bold'>{productQty[productName]}</Td>
                        <Td textAlign='right' fontWeight='bold'>{prices[productName].toFixed(2)}</Td>
                    </Tr>
                ))}
                <Tr>
                    <Td fontWeight='bold'></Td>
                    <Td textAlign='right' fontWeight='bold'></Td>
                    <Td textAlign='right' fontWeight='bold'>SG${calculatedTotalPrice.toFixed(2)}</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}

export default OrderPriceBreakdownList
