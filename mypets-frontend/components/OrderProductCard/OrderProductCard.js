import { useEffect, useState, useContext } from 'react'
import { 
    Box, 
    Stack,
    HStack,
    Text, 
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Tooltip, 
    useToast
} from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import lodash from 'lodash'

import MerchantBadge from '../MerchantBadge/MerchantBadge'
import OrderProductReviewModalBtn from '../OrderProductReviewModalBtn/OrderProductReviewModalBtn'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import { imageToUrl } from '../../utils/urls'
import AuthContext, { callAPI } from '../../context/AuthContext'

const OrderProductReorderBtn = ({ onClick, ...props }) => {
    return (
        <MypetsBtn
            btnText='Re-order product'
            onClick={onClick}
        />
    )
}

export default function OrderProductCard({ order_products }) {
    const [merchantName, setMerchantName] = useState('')
    const [product, setProduct] = useState(null)
    const [quantities, setQuantities] = useState(null)
    const [productsWeighted, setProductsWeighted] = useState([])
    const [weights, setWeights] = useState([])
    const { user, updateCart } = useContext(AuthContext)
    const toast = useToast()

    const succesToast = (text) => toast({
        title: text,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })

    const errorToast = (text) => toast({
        title: text,
        status: 'error',
        duration: 3000,
        isClosable: true,
    })

    const handleAddToCart = async (order_products) => {
        if (user) {
            // create order product
            order_products.map((order_product) => {
                const newOrderProduct = {
                    variant: order_product.variant,
                    quantity: order_product.quantity,
                    total_price: order_product.total_price
                }
                updateCart(newOrderProduct)
            })
            succesToast('Product(s) added to cart')
        } else {
            errorToast('Please login/register before purchasing :)')
        }
    }

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
        <Box
            w={{ base: '100%', lg: '450px' }}
            mb={{ base: 8 }}
        >
            {product && 
                <>
                    <NextLink
                        href={`/products/${product.slug}`}
                        as={`/products/${product.slug}`}
                    >
                        <a>
                            <HStack mb={4} w={{ base: '100%', lg: 'auto' }}>
                                <NextImage src={`${imageToUrl(product.image)}`} height='150' width='150' />
                                <Box>
                                    <Text fontWeight='semibold' fontSize={{ base: 'xl', lg: 'md' }}>{product.name}</Text>
                                    <MerchantBadge merchantName={merchantName} mt={1} />
                                </Box>
                            </HStack>
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
                                <Tr key={i} fontSize={{ base: 'md', lg: 'sm' }}>
                                    <Th textAlign='left'>{weight}KG</Th>
                                    <Th textAlign='right'>SG${productsWeighted[weight][0].variant.price.toFixed(2)}</Th>
                                    <Th textAlign='right'>{quantities[weight]}</Th>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        // spacing={{ base: 2, md: 4 }}
                        textAlign='center'
                        mt={{ base: 8 }}
                        // justifyContent='center'
                        // alignContent='center'
                        bg='green.100'
                    >
                        <OrderProductReviewModalBtn order_product={order_products[0]}/>
                        <OrderProductReorderBtn
                            onClick={() => handleAddToCart(order_products)}
                            order_products={order_products}
                        />
                    </Stack>
                </>
            }
        </Box>
    )
}
