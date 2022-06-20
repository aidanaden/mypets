import { useState } from "react";
import { Box, Flex, Text, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import ProductListCard from "../ProductListCard/ProductListCard";
import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import { createGroups } from "../../../utils";

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
  const slidesCount = Math.ceil(products.length / 5);

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

  const groupedProducts = createGroups(products, 5);
  console.log(groupedProducts);

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
          <Stack
            direction="column"
            spacing={3}
            w="full"
            overflow="hidden"
            bg="purple.300"
          >
            <HStack h="max" w="100%" mb={6} bg="blue.400" {...carouselStyle}>
              {groupedProducts.map((productGroup, gid) => (
                <SimpleGrid
                  w="full"
                  minW={"1200px"}
                  h="max"
                  bg="red.400"
                  gap={{ base: 3 }}
                  columns={{ base: 2, md: 5 }}
                  key={gid}
                  {...carouselStyle}
                >
                  {productGroup.map((product, sid) => (
                    <ProductListCard product={product} key={`slide-${sid}`} />
                  ))}
                </SimpleGrid>
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
