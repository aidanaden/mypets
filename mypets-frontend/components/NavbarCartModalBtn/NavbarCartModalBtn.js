import React from 'react'
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
import { FaShoppingCart } from 'react-icons/fa'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import CartModalProductCard from '../CartModalProductCard/CartModalProductCard'
import CartPriceBreakdownList from '../CartPriceBreakdownList/CartPriceBreakdownList'

/**
 * Cart containing array of different products 
 * e.g. products = [product1, product2, ...]
 * 
 * @param  {[product]} Products 
 */
function NavbarCartModalBtn({ products }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                                <CartModalProductCard />
                                <CartModalProductCard />
                                <CartModalProductCard />
                                <CartModalProductCard />
                                <CartModalProductCard />
                            </Box>
                            <Box flex='1' px={4}>
                                <CartPriceBreakdownList />
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
