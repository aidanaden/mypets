import { useState, useEffect, useContext } from 'react'
import { 
    Spacer,
    Box,
    Stack,
    Flex,
    HStack,
    Text,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Tooltip,
    IconButton
} from '@chakra-ui/react'
import lodash from 'lodash'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { DeleteIcon } from '@chakra-ui/icons'

import MerchantBadge from '../MerchantBadge/MerchantBadge'
import CartProductQuantityPicker from '../CartProductQuantityPicker/CartProductQuantityPicker'
import { imageToUrl } from '../../utils/urls'
import AuthContext from '../../context/AuthContext'

/**
 * Product with different variations 
 * 
 * @param  {product} 
 */
function CartModalProductCard({ order_products, onClose }) {
    const [quantities, setQuantities] = useState(null)
    const [productsCategorized, setProductsCategorized] = useState([])
    const [variants, setVariants] = useState([])
    const { updateCart, deleteOrderProductFromCart } = useContext(AuthContext)

    const addQuantities = (variant) => {
        let tempQuantities = quantities
        tempQuantities[variant] += 1
        setQuantities(tempQuantities)

        // create order product and add to cart
        const existing_order_product = productsCategorized[variant][0]

        const order_product = {
            variant: existing_order_product.variant,
            quantity: 1,
            total_price: parseFloat(existing_order_product.variant.price),
        }
        productsCategorized[variant][0] = order_product
        updateCart(order_product)
    }

    const minusQuantities = (variant) => {
        const existing_order_product = productsCategorized[variant][0]
        let tempQuantities = quantities

        if (tempQuantities[variant] > 1) {
            tempQuantities[variant] -= 1
            setQuantities(tempQuantities)

            const order_product = {
                variant: existing_order_product.variant,
                quantity: -1,
                total_price: parseFloat(existing_order_product.variant.price) * -1.0,
            }

            productsCategorized[variant][0] = order_product
            updateCart(order_product)
        } else {
            const data = deleteOrderProductFromCart(existing_order_product.id)
        }
    }

    const deleteProductCard = () => {
        order_products.map((order_product) => {
            deleteOrderProductFromCart(order_product.id)
        })
    }

    useEffect(() => {
        if (order_products) {
            const sample_quantities = {}
            const categorized_products = order_products[0].variant.variant_type_is_float ?
            lodash.groupBy(order_products, 'variant.variant_type_float') :
            lodash.groupBy(order_products, 'variant.variant_type_str')

            const temp_variants = Object.keys(categorized_products)

            temp_variants.map(variant => {
                sample_quantities[variant] = categorized_products[variant][0].quantity
            })

            setQuantities(sample_quantities)
            setProductsCategorized(categorized_products)
            setVariants(temp_variants)
        }
    }, [order_products])

    return (
        <Box 
            mb={{ base: 6, lg: 8 }} 
            w='100%'
            minW={{ lg: '480px' }} 
        >
            {order_products ? (
                <>
                    <HStack mb={6}>
                        <NextLink 
                            href={`/products/${order_products[0].variant.product.slug}`} 
                            as={`/products/${order_products[0].variant.product.slug}`}    
                        > 
                            <a onClick={onClose}>
                                <Tooltip
                                    label={order_products[0].variant.product.name}
                                    bg="white"
                                    placement={'top-start'}
                                    color={'gray.800'}
                                    fontSize="xs"
                                >
                                    <Flex
                                        direction={{ base: 'row' }}
                                        // align='stretch'
                                        justify='space-between'
                                    >
                                        <NextImage
                                            src={imageToUrl(order_products[0].variant.product.image)}
                                            width='100'
                                            height='100'
                                            objectFit='cover'
                                        />
                                        <Box ml={4}>
                                            <Text 
                                                fontWeight='bold' 
                                                fontSize={{ base: 'md' }}
                                            >
                                                {order_products[0].variant.product.name}
                                            </Text>
                                            <MerchantBadge merchantName={order_products[0].variant.product.merchant.name} />
                                        </Box>
                                    </Flex>
                                </Tooltip>
                            </a>
                        </NextLink>     
                        <Spacer/>
                        <IconButton
                            icon={<DeleteIcon />}
                            size='sm'
                            bgColor='white'
                            onClick={deleteProductCard}
                        />
                    </HStack>
                    <Table variant='unstyled' size={{ base: 'md', lg: 'lg' }}>
                        <Thead>
                            <Tr fontStyle='italic' fontSize='xs'>
                                <Th textAlign='center'>Variant</Th>
                                <Th textAlign='center'>Price</Th>
                                <Th textAlign='center'>Qty</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {variants.map((variant, i) => (
                                <Tr key={i}>
                                    <Th textAlign='center' fontSize='sm'>{variant}{productsCategorized[variant][0].variant.product.unit}</Th>
                                    <Th textAlign='center' fontSize='sm'>SG${productsCategorized[variant][0].variant.price.toFixed(2)}</Th>
                                    <Th textAlign='center' fontSize='sm'>
                                        <CartProductQuantityPicker 
                                            addQuantity={() => addQuantities(variant)} 
                                            minusQuantity={() => minusQuantities(variant)}
                                            quantity={quantities[variant]} 
                                        />
                                    </Th>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </>
            ) : (
                <Text>No product in cartmodal product cart</Text>
            )}
        </Box>
    )
}

export default CartModalProductCard
