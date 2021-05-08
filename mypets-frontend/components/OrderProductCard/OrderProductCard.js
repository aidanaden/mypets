import React from 'react'
import { 
    Box, 
    HStack, 
    VStack, 
    Image, 
    Text, 
    Badge,
    Table,
    Thead,
    Tr,
    Th,
    Tbody 
} from '@chakra-ui/react'
import NextImage from 'next/image'
import OrderProductReviewBtn from '../OrderProductReviewBtn/OrderProductReviewBtn'

function OrderProductCard({ orderProduct }) {
    return (
        <Box>
            <HStack mb={4}>
                <NextImage src='/sierra-mountain-dry-canine-recipe.png' height='150' width='150'/>
                <Box>
                    <Text fontWeight='semibold'>ROASTED LAMB & GRAIN-FREE</Text>
                    <Badge colorScheme='blackAlpha'>Macho Pawz</Badge>
                </Box>
            </HStack>
            <Table variant='unstyled' size='sm'>
                <Thead>
                    <Tr fontStyle='italic'>
                        <Th textAlign='left'>Variant</Th>
                        <Th textAlign='right'>Price</Th>
                        <Th textAlign='right'>Quantity</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr fontWeight='semibold' textColor='gray.500'>
                        <Th textAlign='left' fontSize='sm'>0.80KG</Th>
                        <Th textAlign='right' fontSize='sm'>SG$4.99</Th>
                        <Th textAlign='right' fontSize='sm'>14</Th>
                    </Tr>
                    <Tr fontWeight='semibold' textColor='gray.500'>
                        <Th textAlign='left' fontSize='sm'>1.20KG</Th>
                        <Th textAlign='right' fontSize='sm'>SG$6.99</Th>
                        <Th textAlign='right' fontSize='sm'>6</Th>
                    </Tr>
                    <Tr fontWeight='semibold' textColor='gray.500'>
                        <Th textAlign='left' fontSize='sm'>1.50KG</Th>
                        <Th textAlign='right' fontSize='sm'>SG$9.99</Th>
                        <Th textAlign='right' fontSize='sm'>17</Th>
                    </Tr>
                </Tbody>
            </Table>
            <OrderProductReviewBtn />
        </Box>
    )
}

export default OrderProductCard
