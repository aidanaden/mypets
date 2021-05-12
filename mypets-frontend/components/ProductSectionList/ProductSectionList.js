import React from 'react'
import { Heading, SimpleGrid } from "@chakra-ui/react"
import ProductListCard from "../ProductListCard/ProductListCard"

function ProductSectionList({ products, sortMethod, fontSize='2xl', spacing=4 }) {

    const sortProductsAscending = (products) => {
        products.sort((a, b) => (a.price < b.price) ? -1: 1)
    }

    const sortProductsDescending = (products) => {
        products.sort((a, b) => (a.price < b.price) ? 1: -1)
    }

    const sortProductsPopularity = (products) => {
        products.sort((a, b) => (a.rating < b.rating) ? 1: -1)
    }

    if (sortMethod == 'asc') {
        sortProductsAscending(products)
    } else if (sortMethod == 'desc') {
        sortProductsDescending(products)
    } else if (sortMethod == 'pop') {
        sortProductsPopularity(products)
    }

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
