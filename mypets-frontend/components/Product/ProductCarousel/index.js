import { useState } from "react";
import { Box, Flex, Text, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import ProductListCard from "../ProductListCard/ProductListCard";
import PageContainer from "../../Layouts/PageContainer/PageContainer";

export default function ProductCarousel({ products, ...props }) {
  const arrowStyles = {
    cursor: "pointer",
    w: "auto",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = products.length / 5;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Box bgColor="green.400">
      <PageContainer pb={{ base: 8, lg: 12 }} bgColor="purple.400" {...props}>
        <HStack
          w="full"
          bg={"gray.200"}
          py={10}
          spacing={10}
          alignItems="center"
          justifyContent="space-between"
          mx={"-40"}
        >
          <Text {...arrowStyles} onClick={prevSlide}>
            &#10094;
          </Text>
          <Stack
            direction="column"
            spacing={3}
            w="full"
            overflow="hidden"
            bgColor="red.400"
          >
            <HStack
              // columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
              spacing={{ base: 4 }}
              // h="400px"
              h="max"
              w="full"
              mb={4}
              {...carouselStyle}
            >
              {products.map((product, sid) => (
                <ProductListCard product={product} key={`slide-${sid}`} />
              ))}
            </HStack>
            <HStack justify="center" w="full" bgColor="blue.400">
              {Array.from({ length: slidesCount }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor="pointer"
                  boxSize={["7px", , "15px"]}
                  m="0 2px"
                  bg={
                    currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                  }
                  rounded="50%"
                  display="inline-block"
                  transition="background-color 0.6s ease"
                  _hover={{ bg: "blackAlpha.800" }}
                  onClick={() => setSlide(slide)}
                ></Box>
              ))}
            </HStack>
          </Stack>
          <Text {...arrowStyles} onClick={nextSlide}>
            &#10095;
          </Text>
        </HStack>
      </PageContainer>
    </Box>
  );
}
