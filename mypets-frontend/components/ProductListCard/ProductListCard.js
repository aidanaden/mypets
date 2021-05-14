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
  Link
} from '@chakra-ui/react';
import NextLink from 'next/link'
import RatingDisplay from '../RatingDisplay/RatingDisplay'
import { imageToUrl } from '../../utils/urls'

function ProductListCard({ product }) {
  return (
    
      <NextLink href={`/products/${product.slug}`} as={`/products/${product.slug}`}>
        <a>
          <Tooltip
            label={product.name}
            bg="white"
            placement={'bottom-end'}
            color={'gray.800'}
            fontSize="md"
          >
            <Flex p={0} w="full" alignItems="center" justifyContent="center">
              <Box
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

                <Image
                  src={imageToUrl(product.image)}
                  alt={`Picture of ${product.name}`}
                  roundedTop="lg"
                  boxSize='200px'
                />

                <Box p="3">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="blackAlpha">
                      {product.merchant.name}
                    </Badge>
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
                      {product.price.toFixed(2)}
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Tooltip>
        </a>
      </NextLink>
  );
}

export default ProductListCard;