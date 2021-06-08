import { useState } from 'react'
import Head from 'next/head'
import { Container, Box, Img, Stack, HStack, VStack, Text, Flex, SimpleGrid, Heading, Button, } from "@chakra-ui/react"

import Navbar from '../components/Navbar/Navbar'
import SortMenu from '../components/SortMenu/SortMenu'
import MerchantSectionList from '../components/MerchantSectionList/MerchantSectionList'
import ProductSectionList from '../components/ProductSectionList/ProductSectionList'
import CategoryList from '../components/CategoryList/CategoryList'
import HomeBannerSwiper from '../components/HomeBannerSwiper/HomeBannerSwiper'
import { API_PRODUCTS_URL, API_CATEGORIES_URL, API_MERCHANTS_URL } from '../utils/urls'

export default function Home({ products, categories, merchants }) {

  const [sortMethod, setSortMethod] = useState('pop')
  const [selectedCategory, setSelectedCategory] = useState('All products')
  let fullCategories = categories.map(category => category.name)
  fullCategories = ['All products'].concat(fullCategories)

  console.log('all categories found: ', fullCategories)

  return (
    <>
      <Navbar products={products}/>
      <Container maxW="1200px">
        <Box mt={16} mb={16} maxW='1200px' boxShadow='2xl' rounded={40}>
          <HomeBannerSwiper />
        </Box>
        <Flex justifyContent='space-between' direction="row">
          <Flex direction="column" w="100%">
            <MerchantSectionList merchants={merchants} />
            <Flex direction='row' w='100%'>
              <ProductSectionList products={products} sortMethod={sortMethod} selectedCategory={selectedCategory} heading='Recommended Products' />
              <Flex direction="column" w='210px' ml={12} mt={12}>
                <SortMenu setSortMethod={setSortMethod} />
                <CategoryList categories={fullCategories} setSelectedCategory={setSelectedCategory} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // Fetch merchants, products 
  const product_res = await fetch(`${API_PRODUCTS_URL}`)
  const products = await product_res.json()

  const category_res = await fetch(`${API_CATEGORIES_URL}`)
  const categories = await category_res.json()

  const merchant_res = await fetch(`${API_MERCHANTS_URL}`)
  const merchants = await merchant_res.json()

  // Return as props
  return {
    props: {
      products,
      categories,
      merchants
    }
  }
}



