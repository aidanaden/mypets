import { useState, useContext, useEffect } from 'react'
import { 
    Center,
    Heading, 
    Stack,
    HStack, 
    Flex,
    Text,
    useToast,
    Badge
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

function ProductSoldBadge({ ...props }) {
    return (
        <Badge
            rounded="full"
            p="1"
            fontSize="0.8em"
            colorScheme="red"
            w='auto'
            textAlign='center'
            alignContent='center'
            justifyContent='center'
            {...props}
        >
            Out of stock
        </Badge>
    )
}

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
            if (variant.available) {
                // create order product
                const order_product = {
                    variant: variant,
                    quantity: quantity,
                    total_price: price
                }
                updateCart(order_product)
                succesToast('Product added to cart')
            } else {
                errorToast('Product not available')
            }
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
                h={{ base: "100%", md: 'auto' }}
                px={2}
                pt={{ base: 8, md: 8 }}
                pb={{ base: 2, md: 8 }}
            >
                <Heading
                    as="h2"
                    fontSize="4xl"
                >
                    {product.name}
                </Heading>
                <Stack
                    direction='column'
                    spacing={{ base: 2 }}
                    mt={{ base: 3 }}
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
                    <HStack
                        spacing={{ base: 2 }}
                        align='center'
                    >
                        <ProductDetailBadge mt={0}>
                            {product.category.name}
                        </ProductDetailBadge>
                        <ProductDetailBadge mt={0}>
                            {product.animal.name}
                        </ProductDetailBadge>
                    </HStack>
                </Stack>
                <Stack
                    w="160px"
                    direction='column'
                    spacing={{ base: 2, md: 2 }}
                >
                    <ProductDetailVariantSelect
                        mt={{ base: 6, md: 8 }}
                        variantWeight={variant.weight}
                        options={product.variants}
                        onChange={variantSelectOnChange}
                    />
                    {variant.available == false &&
                    <ProductSoldBadge w='120px' mt={2} />}
                </Stack>
                <HStack
                    mt={{ base: 4, md: 8 }}
                    mb={{ base: 6 }}
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
