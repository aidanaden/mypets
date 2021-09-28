import React from 'react'
import ReactMarkdown from 'react-markdown/react-markdown.min'
import {
    Box,
    Heading,
    List,
    Text,
    Stack,
    Center,
    Spacer
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

const SectionHeading = ({ children, ...props }) => {
    return (
        <Heading
            as="h3"
            fontSize="2xl"
            mb={{ base: 4 }}
            {...props}
        >
            {children}
        </Heading>
    )
}

const ProductDescription = ({ markdownContent }) => {
    return (
        <Box>
            <SectionHeading>
                Description
            </SectionHeading>
            <Box>
                <ReactMarkdown
                    components={ChakraUIRenderer()}
                    children={markdownContent}
                />
            </Box>
        </Box>
    )
}

const ProductIngredient = ({ ingredients }) => {
    return (
        <Box>
            <SectionHeading>
                Ingredients
            </SectionHeading>
            <Text>
                {ingredients}
            </Text>
        </Box>
    )
}

const ProductNutrients = ({ nutrients }) => {
    // nutrients = ["chicken - 30%"]
    return (
        <Center
            rounded='lg'
            bg='gray.200'
            p={{ base: 4 }}
        >
            <Stack
                direction='column'
                spacing={{ base: 1 }}
                w='100%'
                h='100%'
            >
                {nutrients.map((nutrient, i) => (
                    <Stack
                        key={i}
                        direction='row'
                        justify='space-between'
                        w='100%'
                    >
                        <Text>
                            {nutrient.split('-')[0]}
                        </Text>
                        <Spacer />
                        <Text>
                            {nutrient.split('-')[1]}
                        </Text>
                    </Stack>
                ))}
            </Stack>
        </Center>
    )
}

export default function ProductDescriptionSection({ product }) {
    // const descriptions = [
    //     'Grain-free/soy-free/wheat-free',
    //     'Yucca schidigera extract which reduces odors associated with waste',
    //     'Omega-3 & 6 fatty acids  that promotes healthy skin and shiny coat',
    //     'Grain-free/soy-free/wheat-free',
    //     'Yucca schidigera extract which reduces odors associated with waste',
    //     'Omega-3 & 6 fatty acids  that promotes healthy skin and shiny coat'
    // ]
    const nutrients = product.nutrional_analysis.split(/[\r\n]+/)

    return (
        <Stack
            p={8}
            direction='column'
            spacing={{ base: 12 }}
        >
            <ProductDescription markdownContent={product.content} />
            <ProductIngredient ingredients={product.ingredients} />
            <ProductNutrients nutrients={nutrients} />
        </Stack>
    )
}