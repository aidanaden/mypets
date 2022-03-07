import { useContext, useState } from "react";
import {
  Stack,
  Spacer,
  Center,
  Text,
  HStack,
  IconButton,
  Box,
  useToast,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import NextImage from "next/image";

import MerchantBadge from "../MerchantBadge/MerchantBadge";
import RatingDisplay from "../RatingDisplay/RatingDisplay";
import { imageToUrl } from "../../utils/urls";
import MypetsBtn from "../MypetsBtn/MypetsBtn";
import AuthContext from "../../context/AuthContext";

function ProductListCard({ product }) {
  const toast = useToast();
  const { user, updateCart } = useContext(AuthContext);
  const [qty, setQty] = useState(1);

  const addQty = () => {
    let tempQty = qty;
    tempQty += 1;
    setQty(tempQty);
  };

  const minusQty = () => {
    let tempQty = qty;
    if (tempQty > 1) {
      tempQty -= 1;
      setQty(tempQty);
    }
  };

  const succesToast = (text) =>
    toast({
      title: text,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

  const errorToast = (text) =>
    toast({
      title: text,
      status: "error",
      duration: 3000,
      isClosable: true,
    });

  const handleAddToCart = async () => {
    if (user) {
      if (product.variants[0].available) {
        // create order product
        var orderProductTotal = 0;
        if (
          product.variants[0].discounted_price &&
          product.variants[0].discounted_price > 0
        ) {
          orderProductTotal = qty * product.variants[0].discounted_price;
        } else {
          orderProductTotal = qty * product.variants[0].price;
        }

        const order_product = {
          variant: product.variants[0],
          quantity: qty,
          total_price: orderProductTotal,
        };

        updateCart(order_product);
        succesToast("Product added to cart");
        setQty(1);
      } else {
        errorToast("Product not available");
      }
    } else {
      errorToast("Please login/register before purchasing :)");
    }
  };

  console.log("product data: ", product);

  return (
    <LinkBox
      bg="white"
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="sm"
      transitionDuration="300ms"
      _hover={{
        shadow: "lg",
      }}
      // as={`/products/${product.slug}`}
    >
      <Stack
        direction="column"
        p={{ base: 3, sm: 3 }}
        w="full"
        alignItems="center"
        justifyContent="center"
        h="100%"
        position="relative"
      >
        {product.variants[0].discounted_price > 0 && (
          <Box
            position="absolute"
            top="0"
            left="0"
            p={3}
            zIndex="overlay"
            bg="mypets-green.100"
            textColor="white"
            fontWeight="bold"
            roundedTopLeft="lg"
            roundedRight="3xl"
          >
            {(
              (1 -
                product.variants[0].discounted_price /
                  product.variants[0].price) *
              100
            ).toFixed(0)}
            % OFF
          </Box>
        )}
        <Stack direction="column" h="100%" w="100%">
          <LinkOverlay href={`/products/${product.slug}`}>
            <Center mb={{ base: 4 }} roundedTop="lg">
              <NextImage
                src={imageToUrl(product.image)}
                alt={`Picture of ${product.name}`}
                width="150"
                height="150"
                quality="50"
              />
            </Center>
            <Box>
              <Box display="flex" alignItems="baseline">
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
            <HStack w="auto" justifyContent="center" mb={2}>
              <IconButton icon={<MinusIcon />} size="sm" onClick={minusQty} />
              <Text w="36px" align="center" alignSelf="center" fontSize="md">
                {qty}
              </Text>
              <IconButton icon={<AddIcon />} size="sm" onClick={addQty} />
            </HStack>
            {product.variants[0].available ? (
              <MypetsBtn
                mb={{ base: 2 }}
                btnText="Add to cart"
                onClick={handleAddToCart}
                w={{ base: "100%", md: "100%" }}
              />
            ) : (
              <MypetsBtn
                mb={{ base: 2 }}
                btnText="Sold out"
                isDisabled={true}
                w={{ base: "100%", md: "100%" }}
              />
            )}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignContent="center"
              justifySelf="end"
            >
              <Box
                justifyContent="center"
                alignContent="center"
                textAlign="center"
              >
                <Text fontSize="xs" fontWeight="semibold" my={1}>
                  {product.reviews.length} reviews
                </Text>
                <RatingDisplay rating={product.rating} numReviews={0} />
              </Box>
              {product.variants && (
                <Box justifySelf="end" alignSelf="end">
                  {product.variants[0].discounted_price &&
                    product.variants[0].discounted_price > 0 && (
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.800"
                        justifySelf="end"
                        alignSelf="end"
                        my={0}
                        py={0}
                        textDecorationLine="line-through"
                      >
                        ${product.variants[0].price.toFixed(2)}
                      </Text>
                    )}
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    color={
                      product.variants[0].discounted_price &&
                      product.variants[0].discounted_price > 0
                        ? "mypets-green.100"
                        : "gray.800"
                    }
                    justifySelf="end"
                    alignSelf="end"
                    my={0}
                    py={0}
                  >
                    $
                    {product.variants[0].discounted_price &&
                    product.variants[0].discounted_price > 0
                      ? product.variants[0].discounted_price.toFixed(2)
                      : product.variants[0].price.toFixed(2)}
                  </Text>
                </Box>
              )}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </LinkBox>
  );
}

export default ProductListCard;
