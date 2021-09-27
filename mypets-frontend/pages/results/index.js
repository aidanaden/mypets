import {
    useState,
    useEffect
} from 'react'
import { useRouter } from 'next/router'
import {
    Stack,
    Box,
    Text,
    Spacer,
    Checkbox
} from '@chakra-ui/react'

import AnnouncementBanner from '../../components/AnnouncementBanner/AnnouncementBanner'
import Sidebar from '../../components/Sidebar/Sidebar'
import PageContainer from '../../components/PageContainer/PageContainer'
import AnimalList from '../../components/AnimalList/AnimalList'
import SortMenu from '../../components/SortMenu/SortMenu'
import Footer from '../../components/Footer/Footer'
import MerchantSectionList from '../../components/MerchantSectionList/MerchantSectionList'
import ProductList from '../../components/ProductList/ProductList'
import { API_PRODUCTS_URL, API_MERCHANTS_URL, API_ANIMALS_URL } from '../../utils/urls'

const MerchantCheck = ({ text, isChecked, onChange, ...props }) => {
    return (
        <Checkbox
            colorScheme='mypets'
            isChecked={isChecked}
            onChange={(e) => onChange(e.target.checked, text)}
            {...props}
        >
            {text}
        </Checkbox>
    )
}

const MerchantChecklist = ({ pageMerchants, selectedMerchants, setSelectedMerchants }) => {
    console.log('selected merchants: ', selectedMerchants)

    const merchantChangeOnCheck = (checked, merchant) => {
        if (checked) {
            const newSelectedMerchants = [...selectedMerchants, merchant]
            console.log('new merchants: ', newSelectedMerchants)
            setSelectedMerchants(newSelectedMerchants)
        } else {
            const leftMerchants = selectedMerchants.filter(selectedMerchant => selectedMerchant != merchant)
            console.log('merchants AFTER removal: ', leftMerchants)
            setSelectedMerchants(leftMerchants)
        }
    }

    return (
        <Stack
            direction='column'
            spacing={{ base: 2 }}
            mr={{ base: 8, md: 0 }}
        >
            <Text>
                Brand
            </Text>
            <Stack
                direction='column'
                spacing={{ base: 1 }}
            >
                {pageMerchants.length > 0 && pageMerchants.map((merchant,i) => (
                    <MerchantCheck
                        key={i}
                        text={merchant}
                        isChecked={selectedMerchants.includes(merchant)}
                        onChange={merchantChangeOnCheck}
                    />
                ))}
            </Stack>
        </Stack>
        
    )
}

const getMerchants = (products) => {
    const totalProductMerchants = products.map(product => product.merchant.name)
    const uniqueProductMerchants = [...new Set(totalProductMerchants)]
    return uniqueProductMerchants
}

const getMerchantDataFromNames = (names, merchants) => {
    const foundMerchants = []
    names.map((name) => {
        merchants.map((merchant) => {
            if (merchant.name == name) {
                foundMerchants.push(merchant)
            }
        })
    })
    return foundMerchants
}

export default function index({ products, animals, merchants }) {
    const [pageProducts, setPageProducts] = useState(products)
    const [pageMerchants, setPageMerchants] = useState([])
    const [selectedMerchants, setSelectedMerchants] = useState([])
    const [selectedAnimal, setSelectedAnimal] = useState('')
    const [sortMethod, setSortMethod] = useState('pop')
    const [searchText, setSearchText] = useState('')
    const router = useRouter()
    const merchantNames = merchants.map(merchant => merchant.name)

    useEffect(() => {
        if (router.query.search && router.query.search != "") {
            const search = router.query.search
            const price = router.query.price
            setSearchText(search)

            console.log('search term: ', search)

            const filteredProducts = products.filter(product => {
                const firstValid = product.name.toLowerCase().includes(search.toLowerCase())
                const secondValid = product.variants[0].price <= price
                return firstValid && secondValid
            })

            const filteredProductMerchants = getMerchants(filteredProducts)
            console.log('filtered product merchants: ', filteredProductMerchants)
            setPageMerchants(filteredProductMerchants)
            setPageProducts(filteredProducts)

        } else {

            const productMerchants = getMerchants(products)
            console.log('product merchants: ', productMerchants)
            setPageMerchants(productMerchants)
            setPageProducts(products)
        }
    }, [router.query])

    return (
        <Box>
            <AnnouncementBanner />
            <Sidebar />
            <PageContainer>
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 8, lg: 12 }}
                >
                    <MerchantChecklist
                        pageMerchants={pageMerchants}
                        selectedMerchants={selectedMerchants}
                        setSelectedMerchants={setSelectedMerchants}
                    />
                    <Stack
                        direction='column'
                        w='100%'
                        spacing={{ base: 12 }}
                    >
                        <Stack
                            direction={{ base: 'column', lg: 'row' }}
                            spacing={{ base: 4 }}
                            w='100%'
                            justifyContent='space-between'
                        >
                            <Text>
                                Showing results for {searchText}
                            </Text>
                            <Stack
                                direction={{ base: 'column', lg: 'row' }}
                                spacing={{ base: 8 }}
                            >
                                <AnimalList
                                    animals={animals}
                                    setSelectedAnimal={setSelectedAnimal}
                                />
                                <SortMenu
                                    setSortMethod={setSortMethod}
                                />
                            </Stack>
                        </Stack>
                        <MerchantSectionList
                            merchants={getMerchantDataFromNames(pageMerchants, merchants)}
                        />
                        <ProductList
                            heading='Suggested products'
                            products={pageProducts}
                            sortMethod={sortMethod}
                            selectedAnimal={selectedAnimal}
                            selectedMerchants={selectedMerchants}
                        />
                    </Stack>
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

    const animal_res = await fetch(`${API_ANIMALS_URL}`)
    const animalsJson = await animal_res.json()

    const animals = animalsJson.map((animalJson) => {
        return animalJson.name
    })

    return {
        props: {
            products,
            animals,
            merchants
        }
    }
}