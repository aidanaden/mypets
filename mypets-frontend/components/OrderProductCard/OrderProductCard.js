import { useEffect, useState } from 'react'
import { 
    Box, 
    HStack, 
    Text, 
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Tooltip 
} from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import lodash from 'lodash'

import MerchantBadge from '../MerchantBadge/MerchantBadge'
import OrderProductReviewModalBtn from '../OrderProductReviewModalBtn/OrderProductReviewModalBtn'
import { imageToUrl } from '../../utils/urls'
import { callAPI } from '../../context/AuthContext'

function OrderProductCard({ order_products }) {
    const [merchantName, setMerchantName] = useState('')
    const [product, setProduct] = useState(null)
    const [quantities, setQuantities] = useState(null)
    const [productsWeighted, setProductsWeighted] = useState([])
    const [weights, setWeights] = useState([])

    useEffect(() => {
        if (order_products) {
            const sample_quantities = {}
            const weighted_products = lodash.groupBy(order_products, 'variant.weight')
            const temp_weights = Object.keys(weighted_products)

            temp_weights.map(weight => {
                sample_quantities[weight] = weighted_products[weight][0].quantity
            })
            
            const firstProduct = order_products[0].variant.product

            setProduct(firstProduct)
            setQuantities(sample_quantities)
            setProductsWeighted(weighted_products)
            setWeights(temp_weights)

            callAPI(`/merchants/${order_products[0].variant.product.merchant}`, 'GET').then((merchant) => {
                setMerchantName(merchant.name)
            })
        }
    }, [order_products])

    return (
        <Box w={{ base: '100%', lg: '450px' }} px={{ base: 0, md: 6, lg: 0 }} mb={8}>
            { product && 
                <>
                    <NextLink
                        href={`/products/${product.slug}`}
                        as={`/products/${product.slug}`}
                    >
                        <a>
                            <Tooltip
                                label={product.name}
                                bg="white"
                                placement='top-start'
                                color='gray.800'
                                fontSize="xs"
                            >
                                <HStack mb={4} w={{ base: '100%', lg: 'auto' }}>
                                    <NextImage src={`${imageToUrl(product.image)}`} height='150' width='150' />
                                    <Box>
                                        <Text fontWeight='semibold' fontSize={{ base: 'xl', lg: 'md' }}>{product.name}</Text>
                                        <MerchantBadge merchantName={merchantName} mt={1}/>
                                    </Box>
                                </HStack>
                            </Tooltip>
                        </a>
                    </NextLink>
                    <Table variant='unstyled' size='sm'>
                        <Thead textColor='gray.600'>
                            <Tr fontStyle='italic'>
                                <Th textAlign='left'>Variant</Th>
                                <Th textAlign='right'>Price</Th>
                                <Th textAlign='right'>Qty</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {weights.map((weight, i) => (
                                <Tr key={i}  fontSize={{ base: 'md', lg: 'sm' }}>
                                    <Th textAlign='left'>{weight}KG</Th>
                                    <Th textAlign='right'>SG${productsWeighted[weight][0].variant.price.toFixed(2)}</Th>
                                    <Th textAlign='right'>{quantities[weight]}</Th>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    <OrderProductReviewModalBtn order_product={order_products[0]}/>
                </>
            }
        </Box>
    )
}

export default OrderProductCard
