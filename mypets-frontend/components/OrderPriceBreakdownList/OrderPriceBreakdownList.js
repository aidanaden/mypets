
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
    // const totalPrice = order.total_price
    // const shippingPrice = order.shipping_fee
    // const discountValue = order.discount_value
    // const finalPrice = order.final_price

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
            <Table variant="unstyled" size={{ base: 'sm', md: 'md', lg: 'md' }}>
                <Thead textColor='gray.600'>
                    <Tr fontSize='xs'>
                        <Th>Product</Th>
                        <Th textAlign='right'>Qty</Th>
                        <Th textAlign='right'>Price</Th>
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
            </Table>
            <Box mt={4}>
                <Stack direction='row'>
                    <Box as='h4' fontWeight='medium'>
                        Subtotal
                    </Box>
                    <Spacer />
                    <Box fontWeight='bold' textAlign='right'>
                        {order.total_price.toFixed(2)}
                    </Box>
                </Stack>
                { order.discount_value && 
                (<Stack direction='row' fontWeight='medium'>
                    <Box as='h4'>
                        Discount value
                    </Box>
                    <Spacer />
                    <Box fontWeight='bold' textAlign='right'>
                        - {order.discount_value.toFixed(2)}
                    </Box>
                </Stack>)}
                <Stack direction='row' fontWeight='medium'>
                    <Box as='h4'>
                        Shipping
                    </Box>
                    <Spacer />
                    <Box fontWeight='bold' textAlign='right'>
                        {order.shipping_fee.toFixed(2)}
                    </Box>
                </Stack>
                <Box fontWeight='bold' fontSize='xl' textAlign='right' mt={2}>
                    SG${order.final_price.toFixed(2)}
                </Box>
            </Box>
        </>
    )
}

export default OrderPriceBreakdownList
