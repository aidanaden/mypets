import React from 'react'
import lodash from 'lodash'
import { Container, Box, Flex, Grid, GridItem, HStack, Img } from "@chakra-ui/react"

import { API_CATEGORIES_URL, API_MERCHANTS_URL, API_PRODUCTS_URL } from '../../../utils/urls'
import Navbar from "../../../components/Navbar/Navbar"
import MerchantTitle from '../../../components/MerchantTitle/MerchantTitle'
import MerchantProductReviewTab from '../../../components/MerchantProductReviewTab/MerchantProductReviewTab'


function index({ merchant, products }) {

    const merchantCategories = Object.keys(lodash.groupBy(merchant.products, 'category.name'))
    console.log('merchant products: ', merchant.products)
    console.log('categories of merchant products: ', merchantCategories)

    return (
        <>
            <Container maxW='1200px'>
                <Box mt={4}>
                    <Img boxSize="100%" objectFit="cover" src="/macho_pawz_banner.jpg" alt="merchant banner"></Img>
                </Box>
                <MerchantTitle 
                    merchantName={merchant.name} 
                    merchantRating={merchant.rating} 
                    merchantNumReviews={merchant.reviews}
                    merchantEmail={merchant.contact_email}
                    merchantContact={merchant.contact_number}
                />
                <MerchantProductReviewTab 
                    merchantProducts={merchant.products} 
                    categories={merchantCategories} 
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

    const product_res = await fetch(`${API_PRODUCTS_URL}`)
    const products = await product_res.json()

    // Return as props
    return {
        props: {
            merchant: merchant[0],
            products: products
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