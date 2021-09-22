import React from 'react'
import { 
    Container,
    Grid, 
    GridItem
} from "@chakra-ui/react"

import AnnouncementBanner from '../../../components/AnnouncementBanner/AnnouncementBanner'
import Navbar from "../../../components/Navbar/Navbar"
import BackBtn from '../../../components/BackBtn/BackBtn'
import ProductDetailSection from "../../../components/ProductDetailSection/ProductDetailSection"
import ProductDescriptionSection from "../../../components/ProductDescriptionSection/ProductDescriptionSection"
import ProductReviewSection from "../../../components/ProductReviewSection/ProductReviewSection"
import ProductList from '../../../components/ProductList/ProductList'
import { API_PRODUCTS_URL } from '../../../utils/urls'
import PageContainer from '../../../components/PageContainer/PageContainer'

export default function Product({ product, otherProducts }) {
    return (
        <>
            <AnnouncementBanner />
            <Navbar/>
            <PageContainer>
                <BackBtn />
                <Grid 
                    templateRows="min-content" 
                    templateColumns="repeat(3, 1fr)" 
                    gap={4}
                    mb={4}
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
                        colSpan={{ base: 3, md: 2 }}
                        shadow="sm" 
                        borderWidth="1px" 
                        rounded="lg" 
                    >
                        <ProductDescriptionSection product={product} />
                    </GridItem>
                    <GridItem
                        colSpan={{ base: 3, md: 1 }} 
                        shadow="sm" 
                        borderWidth="1px" 
                        rounded="lg"
                    >
                        <ProductReviewSection reviews={product.reviews}/>
                    </GridItem>
                </Grid>
                <ProductList
                    heading='Suggested products'
                    products={otherProducts}
                />
            </PageContainer>
        </>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const product_res = await fetch(`${API_PRODUCTS_URL}?slug=${slug}`)
    const product = await product_res.json()
    const category_res = await fetch(`${API_PRODUCTS_URL}?category=${product[0].category.id}`)
    const categoryProducts = await category_res.json()

    // Return as props
    return {
        props: {
            product: product[0],
            otherProducts: categoryProducts.filter(otherProduct => otherProduct.id != product[0].id)
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
            params: { 
                slug: String(product.slug)
            }
        })),

        // tells nextjs to show 404 if param not matched
        fallback: false 
    }
}

