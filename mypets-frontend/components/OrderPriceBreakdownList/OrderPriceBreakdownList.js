
import React from 'react'
import {
    Spacer,
    Stack,
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

function OrderPriceBreakdownList({ groupedOrderProducts, productNames, order }) {
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

    const BreakdownRow = ({ text, value }) => {
        return (
            <Stack direction='row'>
                <Box
                    as='h4'
                    fontFamily='heading'
                    fontWeight='medium'
                    textColor='gray.600'
                    fontSize='sm'
                >
                    {text}
                </Box>
                <Spacer />
                <Box
                    fontWeight='bold'
                    textAlign='right'
                >
                    {value}
                </Box>
            </Stack>
        )
    }

    return (
        <>
            <Table
                variant="unstyled"
                size={{ base: 'sm', md: 'md', lg: 'md' }}
            >
                <Thead textColor='gray.600'>
                    <Tr fontSize='xs'>
                        <Th>Product</Th>
                        <Th textAlign='right'>
                            Qty
                        </Th>
                        <Th textAlign='right'>
                            Price
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {productNames.map((productName, i) => (
                        <Tr key={i}>
                            <Td py={2} fontWeight='bold'>
                                {productName}
                            </Td>
                            <Td
                                py={2}
                                textAlign='center'
                                fontWeight='bold'
                            >
                                {productTotalQuantity(groupedOrderProducts[productName])}
                            </Td>
                            <Td
                                py={2}
                                textAlign='right'
                                fontWeight='bold'
                            >
                                {productTotalPrice(groupedOrderProducts[productName]).toFixed(2)}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Box
                mt={4}
            >
                <BreakdownRow
                    text='Subtotal'
                    value={order.total_price.toFixed(2)}
                />
                {order.discount_value > 0 &&
                    (<BreakdownRow
                        text='Discount'
                        value={-order.discount_value.toFixed(2)}
                    />)}
                <BreakdownRow
                    text='Delivery'
                    value={order.shipping_fee.toFixed(2)}
                />
                <BreakdownRow
                    text='Service fee'
                    value={order.tax_fee.toFixed(2)}
                />
                <BreakdownRow
                    text='Your contribution'
                    value={order.contribution_amount.toFixed(2)}
                />
                <Box fontWeight='bold' fontSize='xl' textAlign='right' mt={2}>
                    ${order.final_price.toFixed(2)}
                </Box>
            </Box>
        </>
    )
}

export default OrderPriceBreakdownList
