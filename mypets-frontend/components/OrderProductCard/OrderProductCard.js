import { useEffect, useState } from 'react'
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
import useSWR from 'swr'
import OrderProductReviewBtn from '../OrderProductReviewBtn/OrderProductReviewBtn'
import { API_MERCHANTS_URL, imageToUrl } from '../../utils/urls'

function OrderProductCard({ product, quantity }) {

    const fetcher = url => fetch(url).then(res => res.json())
    const { data, err } = useSWR(`${API_MERCHANTS_URL}${product.merchant.id}`, fetcher)

    return (
        <Box w='450px' mb={8}>
            <HStack mb={4}>
                <NextImage src={`${imageToUrl(product.image)}`} height='150' width='150'/>
                <Box>
                    <Text fontWeight='semibold'>{product.name}</Text>
                    { (data) ? (<Badge colorScheme='blackAlpha'>{data.name}</Badge>) : 
                    (<Badge colorScheme='blackAlpha' w={24}/>)}
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
                        <Th textAlign='left' fontSize='sm'>{product.weight.toFixed(2)}KG</Th>
                        <Th textAlign='right' fontSize='sm'>{product.price.toFixed(2)}</Th>
                        <Th textAlign='right' fontSize='sm'>{quantity}</Th>
                    </Tr>
                </Tbody>
            </Table>
            <OrderProductReviewBtn />
        </Box>
    )
}

export default OrderProductCard
