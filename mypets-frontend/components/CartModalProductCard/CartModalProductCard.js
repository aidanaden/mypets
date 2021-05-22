import { useState, useEffect, useContext } from 'react'
import { 
    Box, 
    Flex, 
    HStack, 
    VStack,
    Text, 
    Image, 
    Badge, 
    Table, 
    TableCaption, 
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Tooltip
} from '@chakra-ui/react'
import lodash, { update } from 'lodash'
import NextImage from 'next/image'
import NextLink from 'next/link'

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
    const [productsWeighted, setProductsWeighted] = useState([])
    const [weights, setWeights] = useState([])

    const { updateCart, deleteOrderProductFromCart } = useContext(AuthContext)

    const addQuantities = (weight) => {
        let tempQuantities = quantities
        tempQuantities[weight] += 1
        setQuantities(tempQuantities)
        
        // create order product and add to cart
        const existing_order_product = productsWeighted[weight][0]

        const order_product = {
            variant: existing_order_product.variant,
            quantity: 1,
            total_price: parseFloat(existing_order_product.variant.price),
        }

        productsWeighted[weight][0] = order_product
        console.log('updating cart order_products via PLUS button with: ', productsWeighted[weight][0])
        // // update cart with new order product
        // console.log('updating cart order_products via ADD button with: ', order_product)
        updateCart(order_product)
    }

    const minusQuantities = (weight) => {

        const existing_order_product = productsWeighted[weight][0]

        let tempQuantities = quantities
        if (tempQuantities[weight] > 1) {

            tempQuantities[weight] -= 1
            setQuantities(tempQuantities)

            const order_product = {
                variant: existing_order_product.variant,
                quantity: -1,
                total_price: parseFloat(existing_order_product.variant.price) * -1.0,
            }

            productsWeighted[weight][0] = order_product
            console.log('updating cart order_products via MINUS button with: ', productsWeighted[weight][0])
            // // update cart with new order product
            updateCart(order_product)
            // console.log('updating cart order_products via MINUS button with: ', order_product)

        } else {

            // if quantity of order_product is set to 0, delete it 
            const data = deleteOrderProductFromCart(existing_order_product.id)
            console.log('deted order product: ', data)
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
            
            setQuantities(sample_quantities)
            setProductsWeighted(weighted_products)
            setWeights(temp_weights)

            console.log('useEffect products passed to cart: ', order_products)
            console.log('useEffect products split by weight: ', weighted_products)
            console.log('useEffect quantities split by weight: ', sample_quantities)
        }
        
    }, [order_products])

    return (
        <Box mb={8}>
            {order_products ? (
                <>
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
                                <HStack mb={6}>
                                    <NextImage src={imageToUrl(order_products[0].variant.product.image)} width='100' height='100'/>
                                    <Box>
                                        <Text fontWeight='semibold'>{order_products[0].variant.product.name}</Text>
                                        <MerchantBadge merchantName={order_products[0].variant.product.merchant.name} />
                                    </Box>
                                </HStack>
                            </Tooltip>
                        </a>
                    </NextLink>
                    <Table variant='unstyled' size='sm'>
                        <Thead>
                            <Tr fontStyle='italic'>
                                <Th textAlign='center'>Variant</Th>
                                <Th textAlign='center'>Price</Th>
                                <Th textAlign='center'>Quantity</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {weights.map((weight, i) => (
                                <Tr key={i}>
                                    <Th textAlign='center' fontSize='sm'>{weight}KG</Th>
                                    <Th textAlign='center' fontSize='sm'>SG${productsWeighted[weight][0].variant.price.toFixed(2)}</Th>
                                    <Th>
                                        <CartProductQuantityPicker 
                                            addQuantity={() => addQuantities(weight)} 
                                            minusQuantity={() => minusQuantities(weight)}
                                            quantity={quantities[weight]} 
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
