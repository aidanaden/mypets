import { useContext } from 'react'
import {
  Stack,
  Spacer,
  Center,
  Flex,
  Box,
  useToast,
  Tooltip,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';
import NextLink from 'next/link'
import NextImage from 'next/image'

import MerchantBadge from '../MerchantBadge/MerchantBadge'
import RatingDisplay from '../RatingDisplay/RatingDisplay'
import { imageToUrl } from '../../utils/urls'
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import AuthContext from '../../context/AuthContext'

function ProductListCard({ product }) {
  const toast = useToast()
  const { user, updateCart } = useContext(AuthContext)

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
        variant: product.variants[0],
        quantity: 1,
        total_price: product.variants[0].price
      }
      updateCart(order_product)
      succesToast('Product added to cart')
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
            <Center>
              <MypetsBtn
                mb={{ base: 4 }}
                btnText='Add to cart'
                onClick={handleAddToCart}
                w={{ base: '100%', md: 'auto' }}
              />
            </Center>
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