import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';
import NextLink from 'next/link'

import MerchantBadge from '../MerchantBadge/MerchantBadge'
import RatingDisplay from '../RatingDisplay/RatingDisplay'
import { imageToUrl } from '../../utils/urls'

function ProductListCard({ product }) {
  return (
    <Tooltip
            label={product.name}
            bg="white"
            placement={'bottom-end'}
            color={'gray.800'}
            fontSize="md"
    >
      <LinkBox 
        bg={useColorModeValue('white', 'white')}
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
            <Flex p={0} w="full" alignItems="center" justifyContent="center">
              <Box>

                <Image
                  src={imageToUrl(product.image)}
                  alt={`Picture of ${product.name}`}
                  roundedTop="lg"
                  boxSize='200px'
                />

                <Box p="3">
                  <Box d="flex" alignItems="baseline">
                    <MerchantBadge merchantName={product.merchant.name} />
                  </Box>
                  <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                      fontSize="sm"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated>
                      {product.name.substring(0, 16)}
                    </Box>
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
                    <RatingDisplay rating={product.rating} numReviews={0} />
                    <Box fontSize="md" color={useColorModeValue('gray.800', 'gray.800')}>
                      <Box as="span" color={'gray.600'} fontSize="sm">
                        $
                      </Box>
                      {
                        product.variant ?
                        product.variant.price.toFixed(2) :
                        0.00
                      }
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </Tooltip>
      

  );
}

export default ProductListCard;