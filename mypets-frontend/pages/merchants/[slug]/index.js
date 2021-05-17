import React from 'react'
import { Container, Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react"

import { API_CATEGORIES_URL, API_MERCHANTS_URL, API_PRODUCTS_URL } from '../../../utils/urls'
import Navbar from "../../../components/Navbar/Navbar"


function index({ merchant, categories }) {
    return (
        <>
            <Navbar />
            <Container maxW='1200px' mb={6}>
                <Box mt={4}>
                    <Img boxSize="100%" objectFit="cover" src="/MachoPawz_banner@2x@2x.png" alt="merchant banner"></Img>
                </Box>
                <MerchantTitle 
                    merchantName={merchant.name} 
                    merchantRating={merchant.rating} 
                    merchantNumReviews={merchant.reviews}
                />
                <MerchantProductReviewTab 
                    merchantProducts={merchant.products} 
                    categories={categories} 
                    merchantReviews={merchant.merchant_reviews}
                />
            </Container>
        </>
    )
}

export default index


export async function getStaticProps({ params: { slug } }) {

    // Fetch merchants, products 
    const merchant_res = await fetch(`${API_MERCHANTS_URL}?slug=${slug}`)
    const merchant = await merchant_res.json()

    const categories_res = await fetch(`${API_CATEGORIES_URL}`)
    const categories = await categories_res.json()

    // Return as props
    return {
        props: {
            merchants: merchant[0],
            categories: categories
        }
    }
}

export async function getStaticPaths() {
    // retrieve all possible paths
    const merchant_res = await fetch(`${API_MERCHANTS_URL}`)
    const merchants = await merchant_res.json()

    // return to NextJS context
    return {
        paths: merchants.map(merchant => ({
            params: { slug: String(merchant.slug) }
        })),

        // tells nextjs to show 404 if param not matched
        fallback: false 
    }
}