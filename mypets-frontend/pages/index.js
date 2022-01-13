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
import HomeBannerSwiper from '../components/HomeBannerSwiper/HomeBannerSwiper'
import SortMenu from '../components/SortMenu/SortMenu'
import MerchantSectionList from '../components/MerchantSectionList/MerchantSectionList'
import ProductSectionList from '../components/ProductSectionList/ProductSectionList'
import CategoryList from '../components/CategoryList/CategoryList'
import { API_HOME_URL, API_PRODUCTS_URL, API_MERCHANTS_URL, getAnimals, getCategories } from '../utils/urls'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import AnimalList from '../components/AnimalList/AnimalList'
import Facebook from '../utils/fb'

export default function Home({ home_data, products, categories, animals, merchants }) {
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

  // console.log('home info data from backend: ', home_data)

  return (
    <>
      <Head>
        <title>{home_data.meta_title}</title>
        <meta name="description" content={home_data.meta_description} />
      </Head>
      <Box>
        <AnnouncementBanner text={home_data.banner_text}/>
        <Sidebar categories={pageCategories} />
        <PageContainer>
          <CategoryList
            display={{ base: 'none', md: 'flex' }}
            categories={pageCategories}
            setSelectedCategory={setCategorySelected}
          />
          {/* <Carousel /> */}
          <HomeBannerSwiper
            desktopImages={home_data.desktop_banners}
            mobileImages={home_data.mobile_banners}
          />
          <Stack
            direction="column"
            spacing={{ base: 8, lg: 12 }}
          >
            <MerchantSectionList
              merchants={merchants}
            />
            <Stack
              direction={{ base: 'column', md: 'row' }}
              align='stretch'
              justify='space-between'
            >
              <Box
                mb={{ base: 2, md: 0 }}
              >
                <SectionHeader>
                  Animal
                </SectionHeader>
                <AnimalList
                  animals={pageAnimals}
                  setSelectedAnimal={setSelectedAnimal}
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
              selectedAnimal={selectedAnimal}
            />
          </Stack>
        </PageContainer>
      </Box>
      {/* <MessengerCustomerChat
        pageId='105638824710827'
        appId='615727602931296'
      /> */}
    </>
  )
}

export async function getStaticProps() {

  // Fetch home page banner images + top banner text
  const home_res = await fetch(`${API_HOME_URL}`)
  const home_data = await home_res.json()

  // Fetch merchants, products 
  const product_res = await fetch(`${API_PRODUCTS_URL}`)
  const products = await product_res.json()

  const merchant_res = await fetch(`${API_MERCHANTS_URL}`)
  const merchants = await merchant_res.json()

  const categories = getCategories(products)
  const animals = getAnimals(products)

  // Return as props
  return {
    revalidate: 1,
    props: {
      home_data,
      products,
      categories,
      animals,
      merchants
    }
  }
}



