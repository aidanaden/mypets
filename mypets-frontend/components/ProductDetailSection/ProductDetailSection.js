import { useState, useContext, useEffect } from 'react'
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

    const toast = useToast()

    const [variant, setVariant] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)
    const { updateCart } = useContext(AuthContext)

    const getVariantFromWeight = (weight) => {
        return product.variants.filter((variant) => parseFloat(variant.weight) == parseFloat(weight))[0]
    }

    const addQuantity = () => {
        setQuantity(quantity + 1)
        setPrice(price + variant.price)
    }

    const minusQuantity = () => {
        if (quantity <= 1) {
            setQuantity(1)
            setPrice(variant.price)
        } else {
            setQuantity(quantity - 1)
            setPrice(price - variant.price)
        }
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
            variant: variant,
            quantity: quantity,
            total_price: price
        }

        console.log('updating cart with: ', order_product)
        // update cart with new order product
        updateCart(order_product)
        succesToast('Product added to cart')
    }

    const variantSelectOnChange = (e) => {

        const foundVariant = getVariantFromWeight(e.target.value)
        setVariant(foundVariant)
        console.log('selected variant: ', foundVariant)
        const updatedPrice = (parseFloat(foundVariant.price) * parseFloat(quantity))
        setPrice(updatedPrice)
        console.log('updated price: ', updatedPrice)
    }

    useEffect(() => {

        setVariant(product.variants[0])
        setPrice(product.variants[0].price)
        console.log('useEffect product: ', product)
        console.log('useEffect variants are: ', product.variants)
        console.log('useEffect initial variant is: ', variant)

    }, [])

    useEffect(() => {
        console.log('variant value has been updated to: ', variant)
    }, [variant])

    useEffect(() => {
        console.log('price value has been updated to: ', price)
    }, [price])

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
                    <ProductDetailVariantSelect variantWeight={variant.weight} options={product.variants} onChange={variantSelectOnChange}/>
                    <HStack mt={8} justifyContent="space-between">
                        <Text fontSize="4xl" mr={4}>
                            SG${price.toFixed(2)}
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
