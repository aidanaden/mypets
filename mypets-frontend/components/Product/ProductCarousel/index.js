import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  SimpleGrid,
  Stack,
  IconButton,
  Circle,
  Button,
  Center,
} from "@chakra-ui/react";
import Carousel, { consts } from "react-elastic-carousel";
import ProductListCard from "../ProductListCard/ProductListCard";
import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import { createGroups } from "../../../utils";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import ProductList from "../ProductList/ProductList";

const CarouselArrow = ({ type, onClick, isEdge }) => {
  return (
    <Box
      display="flex"
      pos="absolute"
      right={type !== consts.PREV && 0}
      left={type === consts.PREV && 0}
      alignSelf={"center"}
      justifySelf="center"
      mt="auto"
      zIndex="dropdown"
      // ml={type === consts.PREV ? 8 : 0}
      // mr={type === consts.PREV ? 0 : 8}
    >
      <IconButton
        rounded="full"
        size="lg"
        bg="gray.200"
        // _hover={{ bg: "white" }}
        // _active={{ bg: "white" }}
        boxShadow="lg"
        onClick={onClick}
        disabled={isEdge}
        icon={
          type === consts.PREV ? (
            <>
              <ChevronLeftIcon boxSize={{ base: 8 }} />
            </>
          ) : (
            <>
              <ChevronRightIcon boxSize={{ base: 8 }} />
            </>
          )
        }
      />
    </Box>
  );
};

const CarouselPagination = ({ pages, activePage, onClick }) => {
  return (
    <Stack direction="row" mt={4} spacing={1}>
      {pages.map((page) => {
        const isActivePage = activePage === page;
        return (
          <Button
            // as={Button}
            size="4"
            minH="4"
            minW="4"
            bg={isActivePage ? "mypets.100" : "transparent"}
            rounded="full"
            key={page}
            onClick={() => onClick(page)}
            active={isActivePage}
            _active={{ bg: "mypets.100" }}
            _selected={{ bg: "mypets.100" }}
            borderWidth="2px"
            borderColor="mypets.100"
          />
        );
      })}
    </Stack>
  );
};

export default function ProductCarousel({ products, header, ...props }) {
  const breakpoints = [
    { width: 300, itemsToShow: 1, pagination: false, showArrows: true }, // sm
    { width: 360, itemsToShow: 2, pagination: true, showArrows: true }, // md
    { width: 480, itemsToShow: 2, pagination: true, showArrows: true }, // lg
    { width: 500, itemsToShow: 3, pagination: true, showArrows: true }, // xl
    { width: 700, itemsToShow: 5, pagination: true, showArrows: true },
    { width: 1750, itemsToShow: 6 },
  ];

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(true);
  };

  return (
    <Box>
      {!expanded ? (
        <>
          <PageContainer
            px={0}
            pb={{ base: 8, lg: 12 }}
            // pb={0}
            maxW={{ lg: "1332px" }}
            {...props}
          >
            <Stack
              direction="row"
              spacing={6}
              align="center"
              mb={{ base: 4, md: 6 }}
            >
              <SectionHeader
                // mx={{ xl: "66px" }}
                mb={0}
                textTransform="capitalize"
              >
                {header}
              </SectionHeader>
              <Button
                rounded="full"
                size="xs"
                bg="gray.200"
                px={3}
                display={{ base: "none", md: "block" }}
                onClick={handleExpandClick}
              >
                View more
              </Button>
            </Stack>
            <Box display={{ xs: "none", md: "block" }} pos="relative">
              <Carousel
                enableAutoPlay={false}
                enableSwipe
                pagination={false}
                itemsToShow={4}
                itemPadding={[0, 10]}
                breakPoints={breakpoints}
                renderArrow={CarouselArrow}
                renderPagination={CarouselPagination}
                itemPosition="CENTER"
              >
                {products.map((prod, i) => (
                  <ProductListCard product={prod} key={`product-${i}`} />
                ))}
              </Carousel>
            </Box>
          </PageContainer>
          <Center w="100%">
            <Button
              alignSelf={"center"}
              size="md"
              bg="gray.200"
              display={{ base: "block", md: "none" }}
              onClick={handleExpandClick}
            >
              View more
            </Button>
          </Center>
        </>
      ) : (
        <>
          <SectionHeader textTransform="capitalize" mt={{ base: 10, md: 14 }}>
            {header}
          </SectionHeader>
          <SimpleGrid
            columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
            spacing={{ base: 4 }}
          >
            {products.map((product, index) => (
              <ProductListCard product={product} key={index} />
            ))}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
}
