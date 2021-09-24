import { useState, useContext, useEffect } from 'react'
import { 
    Center,
    Heading, 
    Stack,
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
import ProductDetailBadge from '../ProductDetailBadge/ProductDetailBadge'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import { imageToUrl } from '../../utils/urls'
import AuthContext from '../../context/AuthContext'

function ProductDetailSection({ product }) {
    const toast = useToast()

    const [variant, setVariant] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)
    const { user, updateCart } = useContext(AuthContext)

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

    const errorToast = (text) => toast({
        title: text,
        status: 'error',
        duration: 3000,
        isClosable: true,
    })

    const handleAddToCart = async () => {
        if (user) {
            // create order product
            const order_product = {
                variant: variant,
                quantity: quantity,
                total_price: price
            }
            updateCart(order_product)
            succesToast('Product added to cart')
        } else {
            errorToast('Please login/register before purchasing :)')
        }
    }

    const variantSelectOnChange = (e) => {
        const foundVariant = getVariantFromWeight(e.target.value)
        setVariant(foundVariant)
        const updatedPrice = (parseFloat(foundVariant.price) * parseFloat(quantity))
        setPrice(updatedPrice)
    }

    useEffect(() => {
        setVariant(product.variants[0])
        setPrice(product.variants[0].price)
    }, [])

    return (
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-evenly" p={4}>
            <Center boxSize={{ base: '100%', md: '500px' }}>
                <NextImage
                    src={imageToUrl(product.image)}
                    width='500'
                    height='500'
                    priority={true}
                />
            </Center>
            <Flex
                direction="column"
                w={{ base: '100%', md: 'auto', lg: '400px' }}
                h={{ base: "100%", md: '500px' }}
                px={2}
                pt={{ base: 8, md: 12 }}
                pb={{ base: 2, md: 16 }}
            >
                <Heading
                    as="h2"
                    fontSize="4xl"
                >
                    {product.name}
                </Heading>
                <Stack
                    direction='column'
                    spacing={1}
                    mt={3}
                >
                    <HStack spacing={3}>
                        <ProductDetailBadge>
                            {product.merchant.name}
                        </ProductDetailBadge>
                        <RatingDisplay
                            rating={product.rating}
                            numReviews={product.reviews.length}
                        />
                    </HStack>
                    <HStack spacing={3}>
                        <ProductDetailBadge>
                            {product.category.name}
                        </ProductDetailBadge>
                        <ProductDetailBadge>
                            {product.animal.name}
                        </ProductDetailBadge>
                    </HStack>
                </Stack>
                <ProductDetailVariantSelect
                    variantWeight={variant.weight}
                    options={product.variants}
                    onChange={variantSelectOnChange}
                />
                <HStack
                    mt={{ base: 4, md: 8 }}
                    mb={{ base: 6, md: 0 }}
                    justifyContent="space-between"
                >
                    <Text fontSize={{ base: '3xl', md: "4xl" }} mr={4}>
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
        </Stack>
    )
}

export default ProductDetailSection
