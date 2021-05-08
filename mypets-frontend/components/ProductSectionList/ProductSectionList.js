import React from 'react'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import ProductListCard from "../ProductListCard/ProductListCard"

function ProductSectionList({ products, fontSize='2xl', spacing=4 }) {

    return (
        <>
            <Heading as="h2" textAlign="left" mt={9} mb={6} fontSize={fontSize}>
                Recommended Products
            </Heading>
            <SimpleGrid columns={5} spacing={spacing}>
                {products.map((product, index) => (
                    <ProductListCard product={product} key={index}/>
                ))}
            </SimpleGrid>
        </>
    )
}

export default ProductSectionList
