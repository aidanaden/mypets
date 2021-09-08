import {
    useState,
    useEffect
} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  Box,
  Container, 
  Flex, 
  useToast 
} from "@chakra-ui/react"

import AnnouncementBanner from '../components/AnnouncementBanner/AnnouncementBanner'
import Navbar from '../components/Navbar/Navbar'
import SortMenu from '../components/SortMenu/SortMenu'
import MerchantSectionList from '../components/MerchantSectionList/MerchantSectionList'
import ProductSectionList from '../components/ProductSectionList/ProductSectionList'
import CategoryList from '../components/CategoryList/CategoryList'
import HomeBannerSwiper from '../components/HomeBannerSwiper/HomeBannerSwiper'
import { API_PRODUCTS_URL, API_MERCHANTS_URL } from '../utils/urls'
import SectionHeader from '../components/SectionHeader/SectionHeader'

export default function Home({ products, categories, merchants }) {

  const [pageProducts, setPageProducts] = useState(products)
  const [sortMethod, setSortMethod] = useState('pop')
  const [pageCategories, setPageCategories] = useState(categories)
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
      setPageCategories(getCategories(filteredProducts))
      setPageProducts(filteredProducts)

    } else {
      setPageProducts(products)
      setPageCategories(getCategories(products)) 
    }
  }, [router.query])

  return (
    <>
      <AnnouncementBanner />
      <Navbar/>
      <Container 
        maxW={{ lg: "1200px" }} 
        mb={4}
        p={{ base: 4 }}
      >
        <CategoryList
          categories={pageCategories}
          setSelectedCategory={setCategorySelected}
        />
        <HomeBannerSwiper
          my={{ base: 8, md: 16 }}
          rounded={{ base: 20, md: 40 }}
        />
        <Flex
          justifyContent='space-between'
          direction="row"
        >
          <Flex
            direction="column"
            w="100%"
          >
            <MerchantSectionList
              merchants={merchants}
            />
            <Flex
              direction={{ base: 'column', lg: 'row'}}
              w='100%'
            >
              <Flex 
                direction="row"
                justify='space-between'
                display={{ base: 'none', lg: 'inherit' }} 
              >
                <Box>
                  <SectionHeader>
                    Animal
                  </SectionHeader>
                  <CategoryList
                    categories={['Dogs', 'Cats']}
                    // setSelectedCategory={setCategorySelected}
                  />
                </Box>
                <SortMenu
                  setSortMethod={setSortMethod}
                />
              </Flex>
              <ProductSectionList
                products={pageProducts} 
                categories={pageCategories}
                sortMethod={sortMethod}
                setSortMethod={setSortMethod}
                selectedCategory={selectedCategory}
                setCategorySelected={setCategorySelected} 
                heading='Recommended Products' 
              />
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

  const getCategories = (products) => {
    const totalProductCategories = products.map(product => product.category.name)
    const uniqueProductCategories = [...new Set(totalProductCategories)]
    return ['All products'].concat(uniqueProductCategories)
  }

  const categories = getCategories(products)

  // Return as props
  return {
    props: {
      products,
      categories,
      merchants
    }
  }
}



