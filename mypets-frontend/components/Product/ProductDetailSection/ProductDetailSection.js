import { useState, useContext, useEffect } from "react";
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
  Icon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { FaCartPlus, FaDog, FaCat } from "react-icons/fa";
import { SRLWrapper } from "simple-react-lightbox";

import ProductQuantityPicker from "../ProductQuantityPicker/ProductQuantityPicker";
import RatingDisplay from "../../Common/RatingDisplay/RatingDisplay";
import ProductDetailVariantSelect from "../ProductDetailVariantSelect/ProductDetailVariantSelect";
import ProductDetailBadge from "../ProductDetailBadge/ProductDetailBadge";
import MypetsBtn from "../../Common/MypetsBtn/MypetsBtn";
import { imageToUrl } from "../../../utils/urls";
import AuthContext from "../../../context/AuthContext";

function ProductSoldBadge({ ...props }) {
  return (
    <Badge
      rounded="full"
      p="1"
      fontSize="0.8em"
      colorScheme="red"
      w="auto"
      textAlign="center"
      alignContent="center"
      justifyContent="center"
      {...props}
    >
      Out of stock
    </Badge>
  );
}

function AnimalBadge({ type = "Dog", ...props }) {
  return (
    <Stack direction="row" spacing={2} align="center" {...props}>
      <Icon as={type == "Dog" ? FaDog : FaCat} w={4} h={4} />
      <Text textTransform="uppercase" fontSize="md" fontWeight="bold">
        {type}
      </Text>
    </Stack>
  );
}

function ProductImageRow({ images }) {
  return (
    <Stack direction="row" spacing={3} align="center">
      {images.map((image) => (
        <Box
          css={{
            cursor: "pointer",
          }}
        >
          <NextImage
            src={imageToUrl(image)}
            alt={image.alternativeText}
            width="150"
            height="150"
            priority={true}
          />
        </Box>
      ))}
    </Stack>
  );
}

function ProductDetailSection({ product }) {
  const toast = useToast();
  const [variant, setVariant] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const { user, updateCart } = useContext(AuthContext);

  const getVariantFromVariantValue = (variantValue) => {
    if (!variant.variant_type_is_float) {
      return product.variants.filter(
        (variant) => variant.variant_type_str == variantValue
      )[0];
    } else {
      return product.variants.filter(
        (variant) => variant.variant_type_float == parseFloat(variantValue)
      )[0];
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
    setPrice(discountPrice > 0 ? price + discountPrice : price + originalPrice);
  };

  const minusQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
      setPrice(discountPrice > 0 ? discountPrice : originalPrice);
    } else {
      setQuantity(quantity - 1);
      setPrice(
        discountPrice > 0 ? price - discountPrice : price - originalPrice
      );
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
      if (variant.available) {
        // create order product
        const order_product = {
          variant: variant,
          quantity: quantity,
          total_price: price,
        };
        updateCart(order_product);
        succesToast("Product added to cart");
      } else {
        errorToast("Product not available");
      }
    } else {
      errorToast("Please login/register before purchasing :)");
    }
  };

  const variantSelectOnChange = (e) => {
    const foundVariant = getVariantFromVariantValue(e.target.value);
    setVariant(foundVariant);

    var updatedPrice = 0;
    if (foundVariant.discounted_price) {
      updatedPrice =
        parseFloat(foundVariant.discounted_price) * parseFloat(quantity);
    } else {
      updatedPrice = parseFloat(foundVariant.price) * parseFloat(quantity);
    }

    setPrice(updatedPrice);
  };

  useEffect(() => {
    setVariant(product.variants[0]);
    const variantOriginalPrice = product.variants[0].price;
    const variantDiscountPrice = product.variants[0].discounted_price;
    if (variantDiscountPrice && variantDiscountPrice > 0) {
      setOriginalPrice(variantOriginalPrice);
      setDiscountPrice(variantDiscountPrice);
      setPrice(variantDiscountPrice);
      setDiscountPercentage(
        (1 - variantDiscountPrice / variantOriginalPrice) * 100
      );
    } else {
      setPrice(variantOriginalPrice);
    }
  }, []);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="space-evenly"
      spacing={{ base: 8, md: 4 }}
      py={12}
      px={8}
      // bg='red.100'
    >
      <SRLWrapper>
        <Box w={{ base: "100%", md: "400px" }}>
          <Center
            boxSize={{ base: "100%", md: "400px" }}
            css={{
              cursor: "pointer",
            }}
          >
            <NextImage
              src={imageToUrl(product.image)}
              alt={product.image.alternativeText}
              width="400"
              height="400"
              priority={true}
            />
          </Center>
          <ProductImageRow images={product.images} />
        </Box>
      </SRLWrapper>
      <Flex
        direction="column"
        w={{ base: "100%", md: "auto", lg: "400px" }}
        h={{ base: "100%", md: "auto" }}
      >
        <Heading as="h2" fontSize={{ base: "2xl", lg: "4xl" }}>
          {product.name}
        </Heading>
        <Stack direction="column" spacing={{ base: 3 }} mt={{ base: 3 }}>
          <Stack
            direction={{ base: "row", md: "row" }}
            spacing={{ base: 3, md: 4 }}
            align="baseline"
          >
            <AnimalBadge type={product.animal.name} />
            <RatingDisplay
              rating={product.rating}
              numReviews={product.reviews.length}
              spacing={{ base: 3, md: 4 }}
            />
          </Stack>
          <Wrap spacing={{ base: 2 }} align="center">
            <WrapItem>
              <ProductDetailBadge mt={0}>
                {product.category.name}
              </ProductDetailBadge>
            </WrapItem>
            <WrapItem>
              <ProductDetailBadge mt={0}>
                {product.merchant.name}
              </ProductDetailBadge>
            </WrapItem>
            {originalPrice != 0 && (
              <WrapItem>
                <ProductDetailBadge
                  mt={0}
                  bg="mypets-green.100"
                  textColor="white"
                >
                  {`${discountPercentage.toFixed(0)}% OFF`}
                </ProductDetailBadge>
              </WrapItem>
            )}
          </Wrap>
        </Stack>
        <Stack w="160px" direction="column" spacing={{ base: 2, md: 2 }}>
          {variant.variant_type_is_float != null && (
            <ProductDetailVariantSelect
              mt={{ base: 6, md: 8 }}
              variantValue={
                variant.variant_type_is_float
                  ? variant.variant_type_float
                  : variant.variant_type_str
              }
              variantUnit={product.unit}
              variantIsFloat={variant.variant_type_is_float}
              options={product.variants}
              onChange={variantSelectOnChange}
            />
          )}
          {variant.available == false && <ProductSoldBadge w="120px" mt={2} />}
        </Stack>
        <Box mt={{ base: 6, md: 12 }} mb={{ base: 6 }}>
          {originalPrice != 0 && (
            <Text mt="auto" fontSize="sm" textDecorationLine="line-through">
              SG${originalPrice.toFixed(2)}
            </Text>
          )}
          <HStack justifyContent="space-between" align="center">
            <Box
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              textColor="mypets-green.100"
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
        {variant.available ? (
          <MypetsBtn
            onClick={handleAddToCart}
            btnText="Add to cart"
            leftIcon={<FaCartPlus />}
            w="100%"
            mx={0}
            mt="auto"
          />
        ) : (
          <MypetsBtn
            mb={{ base: 2 }}
            btnText="Sold out"
            isDisabled={true}
            w={{ base: "100%", md: "100%" }}
          />
        )}
      </Flex>
    </Stack>
  );
}

export default ProductDetailSection;
