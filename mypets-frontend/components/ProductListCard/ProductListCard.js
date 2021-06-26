import {
  Stack,
  Spacer,
  Center,
  Flex,
  Box,
  Tooltip,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';
import NextLink from 'next/link'
import NextImage from 'next/image'

import MerchantBadge from '../MerchantBadge/MerchantBadge'
import RatingDisplay from '../RatingDisplay/RatingDisplay'
import { imageToUrl } from '../../utils/urls'

function ProductListCard({ product }) {
  return (
    <Tooltip
      label={product.name}
      bg="white"
      placement='bottom-end'
      color='gray.800'
      fontSize="md"
    >
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
      >
        <NextLink href={`/products/${product.slug}`} as={`/products/${product.slug}`} passHref>
          <LinkOverlay>
            <Stack 
              direction='column' 
              p={{ base: '2', sm: '3' }} 
              w="full" 
              alignItems="center" 
              justifyContent="center" 
              h='100%'
            >
              <Stack direction='column' h='100%' w='100%'>
                <Center roundedTop="lg">
                  <NextImage src={imageToUrl(product.image)} alt={`Picture of ${product.name}`} width='150' height='150'/>
                </Center>
                <Spacer />
                <Box>
                  <Box display="flex" alignItems="baseline">
                    <MerchantBadge merchantName={product.merchant.name} />
                  </Box>
                  <Stack mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                      fontSize="sm"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated={{ base: false, md: true }}
                      maxW='180px'
                    >
                      {/* {product.name.substring(0, 16)} */}
                      {product.name}
                    </Box>
                  </Stack>
                </Box>
                <Spacer />
                <Stack 
                  direction='row' 
                  justifyContent="space-between" 
                  alignContent="center"
                  justifySelf='flex-end'
                >
                  <RatingDisplay rating={product.rating} numReviews={0} />
                  <Box fontSize="md" color='gray.800'>
                    <Box as="span" color={'gray.600'} fontSize="sm">
                      $
                    </Box>
                    {product.variants ? product.variants[0].price.toFixed(2) : 0.00}
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </Tooltip>
      

  );
}

export default ProductListCard;