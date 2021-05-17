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
    Tbody,
    Tooltip 
} from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import useSWR from 'swr'

import OrderProductReviewModalBtn from '../OrderProductReviewModalBtn/OrderProductReviewModalBtn'
import { API_MERCHANTS_URL, imageToUrl } from '../../utils/urls'

function OrderProductCard({ product, quantity, reviewed }) {

    const fetcher = url => fetch(url).then(res => res.json())
    const { data, err } = useSWR(`${API_MERCHANTS_URL}${product.merchant.id}`, fetcher)

    return (
        <Box w='450px' mb={8}>
            <NextLink
                href={`/products/${product.slug}`}
                as={`/products/${product.slug}`}
            >
                <a>
                    <Tooltip
                        label={product.name}
                        bg="white"
                        placement={'top-start'}
                        color={'gray.800'}
                        fontSize="xs"
                    >
                        <HStack mb={4}>
                            <NextImage src={`${imageToUrl(product.image)}`} height='150' width='150' />
                            <Box>
                                <Text fontWeight='semibold'>{product.name}</Text>
                                {(data) ? (<Badge colorScheme='gray'>{data.name}</Badge>) :
                                    (<Badge colorScheme='gray' w={24} />)}
                            </Box>
                        </HStack>
                    </Tooltip>
                </a>
            </NextLink>
            <Table variant='unstyled' size='sm'>
                <Thead textColor='gray.400'>
                    <Tr fontStyle='italic'>
                        <Th textAlign='left'>Variant</Th>
                        <Th textAlign='right'>Price</Th>
                        <Th textAlign='right'>Quantity</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr fontWeight='semibold' textColor='black'>
                        <Th textAlign='left' fontSize='sm'>{product.weight.toFixed(2)}KG</Th>
                        <Th textAlign='right' fontSize='sm'>{product.price.toFixed(2)}</Th>
                        <Th textAlign='right' fontSize='sm'>{quantity}</Th>
                    </Tr>
                </Tbody>
            </Table>
            <OrderProductReviewModalBtn product={product} productName={product.name} reviewed={reviewed}/>
        </Box>
    )
}

export default OrderProductCard
