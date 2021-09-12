import {
    useState,
    useEffect
} from 'react'
import { useRouter } from 'next/router'
import {
  Box, 
  Spacer,
  Stack,
  useToast 
} from "@chakra-ui/react"

import PageContainer from '../components/PageContainer/PageContainer'
import AnnouncementBanner from '../components/AnnouncementBanner/AnnouncementBanner'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer'
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
    <Box>
      <AnnouncementBanner />
      <Navbar />
      <PageContainer>
        <CategoryList
          categories={pageCategories}
          setSelectedCategory={setCategorySelected}
        />
        <Carousel />
        <Stack
          direction="column"
          spacing={{ base: 8, lg: 12 }}
        >
          <MerchantSectionList
            merchants={merchants}
          />
          <Stack
            direction='row'
            align='stretch'
            justify='space-between'
            display={{ base: 'none', lg: 'inherit' }}
          >
            <Box>
              <SectionHeader>
                Animal
              </SectionHeader>
              <CategoryList
                isAnimal={true}
                categories={['Dog', 'Cat']}
                // setSelectedCategory={setCategorySelected}
              />
            </Box>
            <Spacer />
            <SortMenu
              setSortMethod={setSortMethod}
            />
          </Stack>
          <ProductSectionList
            products={pageProducts}
            categories={pageCategories}
            sortMethod={sortMethod}
            setSortMethod={setSortMethod}
            selectedCategory={selectedCategory}
            setCategorySelected={setCategorySelected}
            heading='Recommended Products'
          />
        </Stack>
      </PageContainer>
      <Footer />
    </Box>
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



