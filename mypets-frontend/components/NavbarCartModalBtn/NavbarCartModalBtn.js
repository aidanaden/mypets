import { useContext, useEffect, useState } from 'react'
import { 
    Button, 
    useDisclosure, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Box
} from '@chakra-ui/react'
import lodash from 'lodash'
import { loadStripe } from '@stripe/stripe-js'
import { FaShoppingCart } from 'react-icons/fa'

import AuthContext from '../../context/AuthContext'
import { callAPI } from '../../context/AuthContext'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import CartModalProductCard from '../CartModalProductCard/CartModalProductCard'
import CartPriceBreakdownList from '../CartPriceBreakdownList/CartPriceBreakdownList'
import { STRIPE_PK } from '../../utils/urls'

const stripePromise = loadStripe(STRIPE_PK)

/**
 * Cart containing array of different products 
 * e.g. products = [product1, product2, ...]
 * 
 * @param  {[product]} Products 
 */
function NavbarCartModalBtn() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, cart, clearCart } = useContext(AuthContext)

    const [totalPrice, setTotalPrice] = useState(0)
    const [groupedProducts, setGroupedProducts] = useState(null)
    const [productNames, setProductNames] = useState(null)

    const handleCheckout = async () => {
        const stripe = await stripePromise
        const session = await callAPI('/orders', 'POST', cart)
        if (!session.id) {
            console.error('Session does not contain id, failed to create order')
        }

        clearCart()
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })
    }   

    useEffect(() => {
        if (cart) {
            console.log('useEffect cart: ', cart)
            setTotalPrice(cart.total_price)
            setGroupedProducts(lodash.groupBy(cart.order_products, 'variant.product.name'))
            setProductNames(Object.keys(lodash.groupBy(cart.order_products, 'variant.product.name')))
        }
    }, [cart])

    return (
        <>
            <MypetsBtn btnText='Your cart' onClick={onOpen} leftIcon={<FaShoppingCart />} mx={0} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent maxW={1200} w={1100} minH={500}>
                    <ModalHeader>Your Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody w='100%'> 
                            { groupedProducts && (totalPrice > 0.1) ? 
                            <Flex direction='row' w='100%'>
                                <Box mr={12}>
                                    {productNames.map((productName, i) => (
                                        <CartModalProductCard 
                                            order_products={groupedProducts[productName]} 
                                            onClose={onClose}
                                            key={i}
                                        />
                                    ))}
                                </Box>
                                <Box flex='1' px={4}>
                                    <CartPriceBreakdownList 
                                        groupedProducts={groupedProducts} 
                                        productNames={productNames} 
                                        totalPrice={totalPrice}
                                    />
                                    <MypetsBtn btnText='Checkout' onClick={handleCheckout} w="stretch" mt={6}/>
                                </Box>
                            </Flex> :
                            <>
                                <Flex justifyContent='center' w='100%' h={400} alignItems='center'>
                                        No products in your cart!
                                </Flex>
                            </>
                            }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NavbarCartModalBtn
