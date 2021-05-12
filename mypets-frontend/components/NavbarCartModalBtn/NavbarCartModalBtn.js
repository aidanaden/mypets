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
import { FaShoppingCart } from 'react-icons/fa'

import AuthContext, { callAPI } from '../../context/AuthContext'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import CartModalProductCard from '../CartModalProductCard/CartModalProductCard'
import CartPriceBreakdownList from '../CartPriceBreakdownList/CartPriceBreakdownList'

/**
 * Cart containing array of different products 
 * e.g. products = [product1, product2, ...]
 * 
 * @param  {[product]} Products 
 */
function NavbarCartModalBtn() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useContext(AuthContext)

    const [totalPrice, setTotalPrice] = useState(0)
    const [groupedProducts, setGroupedProducts] = useState([])
    const [productNames, setProductNames] = useState([])
    const [loading, setLoading] = useState(false)

    const setData = (data) => {

        setTotalPrice(data.total_price)
        setGroupedProducts(lodash.groupBy(data.products, 'name'))
        setProductNames(Object.keys(lodash.groupBy(data.products, 'name')))
    }

    useEffect(() => {
        const fetchCart = async () => {
            if (user) {
                setLoading(true)
                const data = await callAPI('/carts', 'GET')
                setData(data[0])
                setLoading(false)
            }
        }
        console.log('fetching cart data!')
        fetchCart()
    }, [user])

    console.log('total price: ', totalPrice)
    console.log('grouped products: ', groupedProducts)
    console.log('product names: ', productNames)
    
    return (
        <>
            <MypetsBtn btnText='Your cart' onClick={onOpen} leftIcon={<FaShoppingCart />} mx={0} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent maxW={1000} w={1000}>
                    <ModalHeader>Your Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody> 
                        <Flex direction='row' w='100%'>
                            <Box mr={12}>
                                {user && productNames.map((productName, i) => (
                                    <CartModalProductCard products={groupedProducts[productName]} key={i}/>
                                ))}
                            </Box>
                            <Box flex='1' px={4}>
                                <CartPriceBreakdownList groupedProducts={groupedProducts} productNames={productNames} totalPrice={totalPrice}/>
                                <MypetsBtn btnText='Checkout' onClick={onClose} w="stretch" mt={6}/>
                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NavbarCartModalBtn
