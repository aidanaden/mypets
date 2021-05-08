import React from 'react'
import { Box, Heading, List, Text } from '@chakra-ui/react'
import ProductDescriptionListItem from '../ProductDescriptionListItem/ProductDescriptionListItem'

function ProductDescriptionSection({ product }) {

    // const descriptions = [
    //     'Grain-free/soy-free/wheat-free',
    //     'Yucca schidigera extract which reduces odors associated with waste',
    //     'Omega-3 & 6 fatty acids  that promotes healthy skin and shiny coat',
    //     'Grain-free/soy-free/wheat-free',
    //     'Yucca schidigera extract which reduces odors associated with waste',
    //     'Omega-3 & 6 fatty acids  that promotes healthy skin and shiny coat'
    // ]
    const descriptions = String(product.content).replace(/[0-9.]/g, "").split(/[\r\n]+/)

    return (
        <Box py={8} px={8}>
            <Heading as="h3" fontSize="2xl" textAlign="center" mb={6}>Description</Heading>
            <List spacing={3} textAlign='center'> 
                {descriptions.map((description, i) => (
                    <ProductDescriptionListItem key={i} description={description}/>   
                ))}
            </List>
            <Heading as="h3" fontSize="2xl" textAlign="center" mb={6} mt={24}>Ingredients</Heading>
            <Text>
                {product.ingredients}
            </Text>
        </Box>
    )
}

export default ProductDescriptionSection
