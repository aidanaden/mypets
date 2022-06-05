import { useState } from "react";
import { Box, Flex, Text, HStack, SimpleGrid } from "@chakra-ui/react";
import ProductListCard from "../ProductListCard/ProductListCard";

export default function ProductCarousel({ products }) {
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
    <HStack
      w="full"
      bg={"gray.200"}
      py={10}
      spacing={10}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text {...arrowStyles} onClick={prevSlide}>
        &#10094;
      </Text>
      <Flex w="full" overflow="hidden" pos="relative">
        <HStack
          // columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
          spacing={{ base: 4 }}
          // h="400px"
          h="fit-content"
          w="full"
          {...carouselStyle}
        >
          {products.map((product, sid) => (
            <ProductListCard product={product} key={`slide-${sid}`} />
            // <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
            //   <Image
            //     src={slide.img}
            //     alt="carousel image"
            //     boxSize="full"
            //     backgroundSize="cover"
            //   />
            // </Box>
          ))}
        </HStack>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
      <Text {...arrowStyles} onClick={nextSlide}>
        &#10095;
      </Text>
    </HStack>
  );
}
