import React from 'react'

import Navbar from "../../../components/Navbar/Navbar"
import { Container, Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react"
import ProductDetailSection from "../../../components/ProductDetailSection/ProductDetailSection"
import ProductDescriptionSection from "../../../components/ProductDescriptionSection/ProductDescriptionSection"
import ProductReviewSection from "../../../components/ProductReviewSection/ProductReviewSection"
import { API_PRODUCTS_URL } from '../../../utils/urls'

function Product({ product }) {

    console.log('loaded product page: ', product)

    return (
        <>
            <Container maxW="1200px" mb={6}>
                <Grid 
                    templateRows="min-content" 
                    templateColumns="repeat(3, 1fr)" 
                    gap={4}
                    mt={6}
                >
                    <GridItem
                        colSpan={3} 
                        shadow="sm" 
                        borderWidth="1px" 
                        rounded="lg"
                    >
                        <ProductDetailSection product={product}/>
                    </GridItem>
                    <GridItem
                        colSpan={2} 
                        shadow="sm" 
                        borderWidth="1px" 
                        rounded="lg" 
                    >
                        <ProductDescriptionSection product={product} />
                    </GridItem>
                    <GridItem
                        colSpan={1} 
                        shadow="sm" 
                        borderWidth="1px" 
                        rounded="lg"
                    >
                        <ProductReviewSection reviews={product.reviews}/>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}

export default Product

export async function getStaticProps({ params: { slug } }) {

    // Fetch merchants, products 
    const product_res = await fetch(`${API_PRODUCTS_URL}?slug=${slug}`)
    const product = await product_res.json()

    console.log(product[0])

    // Return as props
    return {
        props: {
            product: product[0]
        }
    }
}

export async function getStaticPaths() {
    // retrieve all possible paths
    const product_res = await fetch(`${API_PRODUCTS_URL}`)
    const products = await product_res.json()

    // return to NextJS context
    return {
        paths: products.map(product => ({
            params: { slug: String(product.slug) }
        })),

        // tells nextjs to show 404 if param not matched
        fallback: false 
    }
}

