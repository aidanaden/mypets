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

function CartPriceBreakdownList() {
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
                <Tr>
                    <Td fontWeight='bold'>Roasted Lamb & Grain-Free</Td>
                    <Td textAlign='right' fontWeight='bold'>14</Td>
                    <Td textAlign='right' fontWeight='bold'>SG$37.40</Td>
                </Tr>
                <Tr>
                    <Td fontWeight='bold'>Roasted Lamb & Grain-Free</Td>
                    <Td textAlign='right'fontWeight='bold'>14</Td>
                    <Td textAlign='right' fontWeight='bold'>SG$37.40</Td>
                </Tr>
                <Tr>
                    <Td fontWeight='bold'>Roasted Lamb & Grain-Free</Td>
                    <Td textAlign='right' fontWeight='bold'>14</Td>
                    <Td textAlign='right' fontWeight='bold'>SG$37.40</Td>
                </Tr>
                <Tr>
                    <Td fontWeight='bold'></Td>
                    <Td textAlign='right' fontWeight='bold'></Td>
                    <Td textAlign='right' fontWeight='bold'>SG$124.39</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}

export default CartPriceBreakdownList
