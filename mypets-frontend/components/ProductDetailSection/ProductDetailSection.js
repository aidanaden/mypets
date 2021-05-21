import { useState, useContext } from 'react'
import { 
    Heading, 
    HStack, 
    Flex,
    Text,
    useToast
} from "@chakra-ui/react"
import NextImage from 'next/image'

import ProductQuantityPicker from "../ProductQuantityPicker/ProductQuantityPicker"
import { FaCartPlus } from 'react-icons/fa'
import RatingDisplay from '../RatingDisplay/RatingDisplay'
import ProductDetailVariantSelect from '../ProductDetailVariantSelect/ProductDetailVariantSelect'
import ProductDetailMerchantBadge from '../ProductDetailMerchantBage/ProductDetailMerchantBadge'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import { imageToUrl } from '../../utils/urls'
import AuthContext from '../../context/AuthContext'

function ProductDetailSection({ product }) {

    const variants = [
        product.weight
    ]

    const [quantity, setQuantity] = useState(1)
    const price = (product.price * quantity).toFixed(2)
    const { user, updateCart } = useContext(AuthContext)

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const minusQuantity = () => {
        setQuantity(quantity <= 1 ? 1 : quantity - 1)
    }

    const succesToast = (text) => toast({
        title: text,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })

    const handleAddToCart = async () => {

        // create order product
        const order_product = {
            product: product,
            quantity: quantity,
            total_price: price
        }

        console.log('updating cart with: ', order_product)
        // update cart with new order product
        updateCart(order_product)
        succesToast('Product added to cart')
    }

    return (
        <>
            <HStack justifyContent="space-evenly" p={4}>
                <NextImage src={`${imageToUrl(product.image)}`} width='500' height='500'/>
                <Flex direction="column" w="400px" h="400px">
                    <Heading as="h2" fontSize="4xl">
                        {product.name}
                    </Heading>  
                    <HStack spacing={3} mt={2}>
                        <ProductDetailMerchantBadge merchant={product.merchant.name}/>
                        <RatingDisplay rating={product.rating} numReviews={product.reviews.length}/>
                    </HStack>
                    <ProductDetailVariantSelect options={variants}/>
                    <HStack mt={8} justifyContent="space-between">
                        <Text fontSize="4xl" mr={4}>
                            SG${price}
                        </Text>
                        <ProductQuantityPicker addQuantity={addQuantity} minusQuantity={minusQuantity} quantity={quantity} />
                    </HStack>
                    <MypetsBtn 
                        onClick={handleAddToCart}
                        btnText='Add to cart' 
                        leftIcon={<FaCartPlus />} 
                        w='100%' 
                        mx={0} 
                        mt="auto"
                    />
                </Flex>
            </HStack>
        </>
    )
}

export default ProductDetailSection
