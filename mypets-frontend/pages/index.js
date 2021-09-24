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
import Sidebar from '../components/Sidebar/Sidebar'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer'
import SortMenu from '../components/SortMenu/SortMenu'
import MerchantSectionList from '../components/MerchantSectionList/MerchantSectionList'
import ProductSectionList from '../components/ProductSectionList/ProductSectionList'
import CategoryList from '../components/CategoryList/CategoryList'
import { API_PRODUCTS_URL, API_MERCHANTS_URL } from '../utils/urls'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import AnimalList from '../components/AnimalList/AnimalList'

export default function Home({ products, categories, animals, merchants }) {
  const [pageProducts, setPageProducts] = useState(products)
  const [sortMethod, setSortMethod] = useState('pop')
  const [pageCategories, setPageCategories] = useState(categories)
  const [pageAnimals, setPageAnimals] = useState(animals)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedAnimal, setSelectedAnimal] = useState('')
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

  console.log('page products: ', pageProducts)
  console.log('page categories: ', pageCategories)
  console.log('page animals: ', pageAnimals)

  const filterProducts = (products, animal) => {
    if (animal != '') {
      return products.filter((product) => product.animal.name == animal)
    } else {
      return products
    }
  }

  return (
    <Box>
      <AnnouncementBanner />
      <Sidebar />
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
            bg='red.100'
          >
            <Box>
              <SectionHeader>
                Animal
              </SectionHeader>
              <AnimalList
                animals={pageAnimals}
                setSelectedAnimal={animalBtnClicked}
              />
            </Box>
            <Spacer />
            <SortMenu
              setSortMethod={setSortMethod}
            />
          </Stack>
          <ProductSectionList
            products={filterProducts(pageProducts, selectedAnimal)}
            categories={pageCategories}
            sortMethod={sortMethod}
            setSortMethod={setSortMethod}
            selectedAnimal={selectedAnimal}
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

  const getAnimals = (products) => {
    const totalProductAnimals = products.map(product => product.animal.name)
    const uniqueProductAnimals = [...new Set(totalProductAnimals)]
    return uniqueProductAnimals
  }

  const categories = getCategories(products)
  const animals = getAnimals(products)

  // Return as props
  return {
    props: {
      products,
      categories,
      animals,
      merchants
    }
  }
}



