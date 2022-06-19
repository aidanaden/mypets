import { useState } from "react";
import { Box, Flex, Text, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import ProductListCard from "../ProductListCard/ProductListCard";
import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";

export default function ProductCarousel({ products, header, ...props }) {
  const arrowStyles = {
    cursor: "pointer",
    w: "auto",
    opacity: 0.4,
    color: "grey",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.3s ease",
    userSelect: "none",
    _hover: {
      opacity: 0.6,
      color: "black",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = products.length / 6;

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

  console.log("first product : ", products[0]);

  return (
    <Box>
      <PageContainer
        pb={{ base: 8, lg: 12 }}
        maxW={{ lg: "1260px" }}
        {...props}
      >
        <SectionHeader mx={"30px"} textTransform="capitalize">
          {header}
        </SectionHeader>
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
            <HStack
              // columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
              spacing={{ base: 4 }}
              h="max"
              w="full"
              mb={6}
              {...carouselStyle}
            >
              {products.map((product, sid) => (
                <ProductListCard
                  product={product}
                  key={`slide-${sid}`}
                  minW={{ lg: "186px" }}
                />
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
