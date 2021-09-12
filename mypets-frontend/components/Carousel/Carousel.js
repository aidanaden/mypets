import { useState } from 'react'
import {
    Text,
    Flex,
    HStack,
    Box,
    Image
} from '@chakra-ui/react'

export default function Carousels({ bannerImgNames=["banner-a.jpg", "banner-b.jpg", "banner-c.jpg"] }) {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
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
    const slidesCount = bannerImgNames.length;

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
        <Flex
            mt={{ base: 4, md: 8 }}
            mb={{ base: 8, md: 16 }}
            rounded={{ base: 20, md: 40 }}
            w="full"
            bg="gray.200"
            p={0}
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                w="full"
                overflow="hidden"
                pos="relative"
            >
                <Flex
                    h="400px"
                    w="full"
                    {...carouselStyle}
                >
                    {bannerImgNames.map((bannerImgName, sid) => (
                        <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                            <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                            >
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Image src={bannerImgName} boxSize="full" backgroundSize="cover" />
                        </Box>
                    ))}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                    &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                    &#10095;
                </Text>
                <HStack
                    justify="center"
                    pos="absolute"
                    bottom="8px"
                    w="full"
                >
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
                        >

                        </Box>
                    ))}
                </HStack>
            </Flex>
        </Flex>
    );
};
