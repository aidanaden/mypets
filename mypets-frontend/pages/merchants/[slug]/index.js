import React from 'react'

import { API_MERCHANTS_URL } from '../../../utils/urls'
import Navbar from "../../../components/Navbar/Navbar"
import { Container, Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react"

function index() {
    return (
        <>
            <Navbar />
            <Container maxW='1200px' mb={6}>

            </Container>
        </>
    )
}

export default index


export async function getStaticProps({ params: { slug } }) {

    // Fetch merchants, products 
    const merchant_res = await fetch(`${API_MERCHANTS_URL}?slug=${slug}`)
    const merchant = await merchant_res.json()

    // Return as props
    return {
        props: {
            merchants: merchant[0]
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