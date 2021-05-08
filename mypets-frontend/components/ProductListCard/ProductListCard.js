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
import Rating from '../Rating/Rating'
import { imageToUrl } from '../../utils/urls'

const data = {
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
  merchant: 'Merchant1'
};

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
                bg={useColorModeValue('white', 'gray.800')}
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
                    <Rating rating={product.rating} numReviews={0} />
                    <Box fontSize="md" color={useColorModeValue('gray.800', 'white')}>
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