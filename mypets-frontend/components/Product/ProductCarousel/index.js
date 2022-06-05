import { useState } from "react";
import { Box, Flex, Text, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import ProductListCard from "../ProductListCard/ProductListCard";
import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";

export default function ProductCarousel({ products, ...props }) {
  const arrowStyles = {
    cursor: "pointer",
    w: "auto",
    p: "16px",
    color: "grey.400",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.3s ease",
    userSelect: "none",
    _hover: {
      bg: "grey.800",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = products.length / 7 + 2;

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
    <Box>
      <PageContainer
        pb={{ base: 8, lg: 12 }}
        maxW={{ lg: "1320px" }}
        {...props}
      >
        <HStack
          w="full"
          spacing={5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text {...arrowStyles} onClick={prevSlide}>
            &#10094;
          </Text>
          <Stack direction="column" spacing={3} w="full" overflow="hidden">
            <SectionHeader>Everyday Essentials</SectionHeader>
            <HStack
              // columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
              spacing={{ base: 4 }}
              // h="400px"
              h="max"
              w="full"
              mb={6}
              {...carouselStyle}
            >
              {products.map((product, sid) => (
                <ProductListCard product={product} key={`slide-${sid}`} />
              ))}
            </HStack>
            <HStack justify="center" w="full">
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
