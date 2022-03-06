import React from "react";
import ReactMarkdown from "react-markdown/react-markdown.min";
import remarkGfm from "remark-gfm";
import { Box, Heading, Text, Stack, Center, Spacer } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const SectionHeading = ({ children, ...props }) => {
  return (
    <Heading as="h3" fontSize="2xl" mb={{ base: 4 }} {...props}>
      {children}
    </Heading>
  );
};

const ProductDescription = ({ markdownContent }) => {
  return (
    <Box>
      <SectionHeading>Description</SectionHeading>
      <Box fontFamily={"body"}>
        <ReactMarkdown
          components={ChakraUIRenderer()}
          remarkPlugins={[remarkGfm]}
          children={`${markdownContent}`}
        />
      </Box>
    </Box>
  );
};

const ProductIngredient = ({ ingredients }) => {
  return (
    <Box>
      <SectionHeading>Ingredients</SectionHeading>
      <Text>{ingredients}</Text>
    </Box>
  );
};

const ProductNutrients = ({ nutrients }) => {
  return (
    <Box>
      <SectionHeading>Nutritional Analysis</SectionHeading>
      <Center rounded="lg" bg="gray.200" p={{ base: 4 }}>
        <Stack direction="column" spacing={{ base: 1 }} w="100%" h="100%">
          {nutrients.map((nutrient, i) => (
            <Stack key={i} direction="row" justify="space-between" w="100%">
              <Text fontSize={{ base: "xs", md: "md" }} textAlign="left">
                {nutrient.split("-")[0]}
              </Text>
              <Spacer />
              <Text fontSize={{ base: "xs", md: "md" }} textAlign="right">
                {nutrient.split("-")[1]}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Center>
    </Box>
  );
};

export default function ProductDescriptionSection({ product }) {
  const nutrients = product.nutrional_analysis.split(/[\r\n]+/);
  return (
    <Stack p={8} direction="column" spacing={{ base: 12 }}>
      <ProductDescription markdownContent={product.content} />
      <ProductIngredient ingredients={product.ingredients} />
      <ProductNutrients nutrients={nutrients} />
    </Stack>
  );
}
