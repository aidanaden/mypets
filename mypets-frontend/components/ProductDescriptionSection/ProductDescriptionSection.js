import React from 'react'
import {
    Box,
    Heading,
    List,
    Text,
    Stack,
    Center,
    Spacer
} from '@chakra-ui/react'
import ProductDescriptionListItem from '../ProductDescriptionListItem/ProductDescriptionListItem'

const ProductDescription = ({ descriptions }) => {
    return (
        <Box>
            <Heading
                as="h3"
                fontSize="2xl"
                textAlign="center"
            >
                Description
            </Heading>
            <List
                spacing={3}
                textAlign='center'
            >
                {descriptions.map((description, i) => (
                    <ProductDescriptionListItem
                        key={i}
                        description={description}
                    />
                ))}
            </List>
        </Box>
    )
}

const ProductIngredient = ({ ingredients }) => {
    return (
        <Box>
            <Heading
                as="h3"
                fontSize="2xl"
                textAlign="center"
            >
                Ingredients
                </Heading>
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
            bg='gray.400'
            p={{ base: 4 }}
        >
            <Stack
                direction='column'
                spacing={{ base: 1 }}
            >
                {nutrients.map((nutrient, i) => (
                    <Stack
                        key={i}
                        direction='row'
                        justify='space-between'
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
    const descriptions = String(product.content).replace(/[0-9.]/g, "").split(/[\r\n]+/)
    const nutrients = product.nutrional_analysis.split(/[\r\n]+/)

    return (
        <Stack
            p={8}
            direction='column'
            spacing={{ base: 6 }}
        >
            <ProductDescription descriptions={descriptions} />
            <ProductIngredient ingredients={product.ingredients} />
            <ProductNutrients nutrients={nutrients} />
        </Stack>
    )
}