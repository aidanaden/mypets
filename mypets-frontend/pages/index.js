import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { 
  Container, 
  Flex, 
  useToast 
} from "@chakra-ui/react"

import Navbar from '../components/Navbar/Navbar'
import SortMenu from '../components/SortMenu/SortMenu'
import MerchantSectionList from '../components/MerchantSectionList/MerchantSectionList'
import ProductSectionList from '../components/ProductSectionList/ProductSectionList'
import CategoryList from '../components/CategoryList/CategoryList'
import HomeBannerSwiper from '../components/HomeBannerSwiper/HomeBannerSwiper'
import { API_PRODUCTS_URL, API_MERCHANTS_URL } from '../utils/urls'

export default function Home({ products, merchants }) {

  const [pageProducts, setPageProducts] = useState(products)
  const [sortMethod, setSortMethod] = useState('pop')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All products')
  const router = useRouter()
  const toast = useToast()

  const setCategorySelected = (cat) => {
    setCategoryToast(cat)
    setSelectedCategory(cat)
  }

  const setCategoryToast = (text) => toast({
    title: `Loading ${text}...`,
    status: 'info',
    duration: 3000,
    isClosable: true,
  })

  const getCategories = (products) => {
    const totalProductCategories = products.map(product => product.category.name)
    const uniqueProductCategories = [...new Set(totalProductCategories)]
    return ['All products'].concat(uniqueProductCategories)
  }

  useEffect(() => {
    if (router.query.search && router.query.search != "") {
      const search = router.query.search
      const price = router.query.price
  
      const filteredProducts = products.filter(product => {
        const firstValid = product.name.toLowerCase().includes(search.toLowerCase()) 
        const secondValid = product.variants[0].price <= price
        return firstValid && secondValid
      })
      setCategories(getCategories(filteredProducts))
      setPageProducts(filteredProducts)

    } else {
      setPageProducts(products)
      setCategories(getCategories(products)) 
    }
  }, [router.query])

  return (
    <>
      <Navbar/>
      <Container maxW="1200px" mb={6}>
        <HomeBannerSwiper my={16}/>
        <Flex justifyContent='space-between' direction="row">
          <Flex direction="column" w="100%">
            <MerchantSectionList merchants={merchants} />
            <Flex direction='row' w='100%'>
              <ProductSectionList products={pageProducts} sortMethod={sortMethod} selectedCategory={selectedCategory} heading='Recommended Products' />
              <Flex direction="column" w='210px' ml={12} mt={12}>
                <SortMenu setSortMethod={setSortMethod} />
                <CategoryList categories={categories} setSelectedCategory={setCategorySelected} />
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

  const merchant_res = await fetch(`${API_MERCHANTS_URL}`)
  const merchants = await merchant_res.json()

  // Return as props
  return {
    props: {
      products,
      merchants
    }
  }
}



