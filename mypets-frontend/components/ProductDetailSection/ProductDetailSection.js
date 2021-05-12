import React from 'react'
import { useState } from 'react'
import { Heading, HStack, Flex, Stack, Badge, Select, Box, Text, Button, Image } from "@chakra-ui/react"
import NextImage from 'next/image'
import ProductQuantityPicker from "../ProductQuantityPicker/ProductQuantityPicker"
import { FaCartPlus } from 'react-icons/fa'
import Rating from '../Rating/Rating'
import ProductDetailVariantSelect from '../ProductDetailVariantSelect/ProductDetailVariantSelect'
import ProductDetailMerchantBadge from '../ProductDetailMerchantBage/ProductDetailMerchantBadge'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import { imageToUrl } from '../../utils/urls'

function ProductDetailSection({ product }) {

    const variants = [
        product.weight
    ]

    const [quantity, setQuantity] = useState(1)

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const minusQuantity = () => {
        setQuantity(quantity <= 1 ? 1 : quantity - 1)
    }

    const price = (product.price * quantity).toFixed(2)

    return (
        <>
            <HStack justifyContent="space-evenly" p={4}>
                <NextImage src={`${imageToUrl(product.image)}`} width='500' height='500'/>
                <Flex direction="column" w="360px" h="400px">
                    <Heading as="h2" fontSize="4xl">
                        {product.name}
                    </Heading>
                    <HStack spacing={3} mt={2}>
                        <ProductDetailMerchantBadge merchant={product.merchant.name}/>
                        <Rating rating={product.rating} numReviews={product.reviews.length}/>
                    </HStack>
                    <ProductDetailVariantSelect options={variants}/>
                    <HStack mt={8} justifyContent="space-between">
                        <Text fontSize="4xl" mr={4}>
                            SG${price}
                        </Text>
                        <ProductQuantityPicker addQuantity={addQuantity} minusQuantity={minusQuantity} quantity={quantity} />
                    </HStack>
                    <MypetsBtn btnText='Add to cart' leftIcon={<FaCartPlus />} w='100%' mx={0} mt="auto"/>
                </Flex>
            </HStack>
        </>
    )
}

export default ProductDetailSection
