import { useState, useContext, useEffect } from 'react'
import {
    Box,
    Center,
    Heading, 
    Stack,
    HStack, 
    Flex,
    Text,
    useToast,
    Badge,
    Icon
} from "@chakra-ui/react"
import NextImage from 'next/image'
import { FaCartPlus, FaDog, FaCat } from 'react-icons/fa'

import ProductQuantityPicker from "../ProductQuantityPicker/ProductQuantityPicker"
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

function AnimalBadge({ type='dog', ...props }) {
    return (
        <Stack
            direction='row'
            spacing={2}
            align='center'
            {...props}
        >
            <Icon
                as={type == 'dog' ? FaDog : FaCat}
                w={4}
                h={4}
            />
            <Text textTransform='uppercase' fontSize='md' fontWeight='bold'>
                {type}
            </Text>
        </Stack>
    )
}

function ProductDetailSection({ product }) {
    const toast = useToast()
    const [variant, setVariant] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [originalPrice, setOriginalPrice] = useState(0)
    const [price, setPrice] = useState(0)
    const { user, updateCart } = useContext(AuthContext)

    const getVariantFromVariantValue = (variantValue) => {
        if (typeof variantValue === 'string')
            return product.variants.filter((variant) => variant.variant_type_str == variantValue)[0]
        else
            return product.variants.filter((variant) => parseFloat(variant.variant_type_float) == variantValue)[0]
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
        const foundVariant = getVariantFromVariantValue(e.target.value)
        setVariant(foundVariant)
        const updatedPrice = (parseFloat(foundVariant.price) * parseFloat(quantity))
        setPrice(updatedPrice)
    }

    useEffect(() => {
        setVariant(product.variants[0])
        if (product.variants[0].discounted_price) {
            setOriginalPrice(product.variants[0].price)
            setPrice(product.variants[0].discounted_price)
        } else {
            setPrice(product.variants[0].price)
        }
    }, [])

    return (
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-evenly" p={4}>
            <Center boxSize={{ base: '100%', md: '500px' }}>
                <NextImage
                    src={imageToUrl(product.image)}
                    alt={product.alternativeText}
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
                    fontSize={{ base: '2xl', lg: '4xl' }}
                >
                    {product.name}
                </Heading>
                <Stack
                    direction='column'
                    spacing={{ base: 3 }}
                    mt={{ base: 3 }}
                >
                    <Stack
                        direction={{ base: 'row', md: 'row' }}
                        spacing={{ base: 3, md: 4 }}
                        align='baseline'
                    >
                        <AnimalBadge>
                            {product.animal.name}
                        </AnimalBadge>
                        <RatingDisplay
                            rating={product.rating}
                            numReviews={product.reviews.length}
                            spacing={{ base: 3, md: 4 }}
                        />
                    </Stack>
                    <HStack
                        spacing={{ base: 2 }}
                        align='center'
                    >
                        <ProductDetailBadge mt={0}>
                            {product.category.name}
                        </ProductDetailBadge>
                        <ProductDetailBadge mt={0}>
                            {product.merchant.name}
                        </ProductDetailBadge>
                        {/* <ProductDetailBadge mt={0}>
                            {`${(price/originalPrice) * 100}% OFF`}
                        </ProductDetailBadge> */}
                        {originalPrice != 0 &&
                        <ProductDetailBadge
                            mt={0}
                            bg='mypets-green'
                            // textColor='white'
                        >
                            {`${((1 - price/originalPrice) * 100).toFixed(0)}% OFF`}
                        </ProductDetailBadge>}
                    </HStack>
                </Stack>
                <Stack
                    w="160px"
                    direction='column'
                    spacing={{ base: 2, md: 2 }}
                >
                    {variant.variant_type_is_float != null && 
                    <ProductDetailVariantSelect
                        mt={{ base: 6, md: 8 }}
                        variantValue={variant.variant_type_is_float ? variant.variant_type_float : variant.variant_type_str}
                        variantUnit={product.unit}
                        variantIsFloat={variant.variant_type_is_float}
                        options={product.variants}
                        onChange={variantSelectOnChange}
                    />}
                    {variant.available == false &&
                    <ProductSoldBadge w='120px' mt={2} />}
                </Stack>
                <Box
                    mt={{ base: 6, md: 12 }}
                    mb={{ base: 6 }}
                >
                    {originalPrice != 0 &&
                        <Text
                            mt='auto'
                            fontSize='sm'
                            textDecorationLine='line-through'
                        >
                            SG${originalPrice.toFixed(2)}
                        </Text>}
                    <HStack
                        justifyContent="space-between"
                        align='center'
                    >
                        <Box
                            fontSize={{ base: '3xl', md: "4xl" }}
                            fontWeight='bold'
                            textColor='mypets-green.100'
                            mr={4}
                        >
                            SG${price.toFixed(2)}
                        </Box>
                        <ProductQuantityPicker
                            addQuantity={addQuantity}
                            minusQuantity={minusQuantity}
                            quantity={quantity}
                        />
                    </HStack>
                </Box>
                
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
