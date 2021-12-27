import { useContext, useState } from 'react'
import {
  Stack,
  Spacer,
  Center,
  Flex,
  HStack,
  VStack,
  IconButton,
  Text,
  Box,
  useToast,
  Tooltip,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import NextImage from 'next/image'

import MerchantBadge from '../MerchantBadge/MerchantBadge'
import RatingDisplay from '../RatingDisplay/RatingDisplay'
import { imageToUrl } from '../../utils/urls'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import AuthContext from '../../context/AuthContext'

function ProductQtyPicker({ qty, setQty }) {
  const addQty = () => {
    setQty(qty + 1)
  }

  const minusQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  return (
    <HStack w='auto' justifyContent='center'>
      <IconButton
        icon={<MinusIcon />}
        size="sm"
        onClick={minusQty}
      />
      <Text w='36px' align="center" alignSelf='center' fontSize="md">
        {qty}
      </Text>
      <IconButton
        icon={<AddIcon />}
        size="sm"
        onClick={addQty}
      />
    </HStack>
  )
}

function ProductListCard({ product }) {
  const toast = useToast()
  const { user, updateCart } = useContext(AuthContext)
  const [qty, setQty] = useState(1)

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
      if (product.variants[0].available) {
        // create order product
        const order_product = {
          variant: product.variants[0],
          quantity: qty,
          total_price: product.variants[0].price
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

  return (
    <LinkBox
      bg='white'
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="sm"
      transitionDuration="300ms"
      _hover={{
        shadow: "lg"
      }}
    // as={`/products/${product.slug}`}
    >      
      <Stack
        direction='column'
        p={{ base: '2', sm: '3' }}
        w="full"
        alignItems="center"
        justifyContent="center"
        h='100%'
      >
        <Stack
          direction='column'
          h='100%'
          w='100%'
        >
          <LinkOverlay
            href={`/products/${product.slug}`}
          >
            <Center
              mb={{ base: 4 }}
              roundedTop="lg"
            >
              <NextImage
                src={imageToUrl(product.image)}
                alt={`Picture of ${product.name}`}
                width='150'
                height='150'
                quality='50'
              />
            </Center>
            <Box>
              <Box
                display="flex"
                alignItems="baseline"
              >
                <MerchantBadge merchantName={product.merchant.name} />
              </Box>
              <Stack mt="1" justifyContent="space-between">
                <Box
                  fontSize="sm"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated={{ base: false, md: false }}
                >
                  {product.name}
                </Box>
              </Stack>
            </Box>
          </LinkOverlay>
          <Spacer />
          <Box>
            <VStack spacing={4} mb={{ base: 4 }}>
              <ProductQtyPicker
                qty={qty}
                setQty={setQty}
              />
              <MypetsBtn
                btnText='Add to cart'
                onClick={handleAddToCart}
                w={{ base: '100%', md: 'auto' }}
              />
            </VStack>
            <Stack
              direction='row'
              justifyContent="space-between"
              alignContent="center"
              justifySelf='flex-end'
            >
              <RatingDisplay rating={product.rating} numReviews={0} />
              <Box
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight='bold'
                color='gray.800'
              >
                <Box as="span" color={'gray.600'}>
                  $
                </Box>
                {product.variants ? product.variants[0].price.toFixed(2) : 0.00}
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </LinkBox>
  );
}

export default ProductListCard;