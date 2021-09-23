import {
    useState,
    useEffect
} from 'react'
import { useRouter } from 'next/router'
import {
    Stack,
    Box,
    Text,
    Spacer
} from '@chakra-ui/react'

import AnnouncementBanner from '../../components/AnnouncementBanner/AnnouncementBanner'
import Sidebar from '../../components/Sidebar/Sidebar'
import PageContainer from '../../components/PageContainer/PageContainer'
import AnimalList from '../../components/AnimalList/AnimalList'
import SortMenu from '../../components/SortMenu/SortMenu'
import Footer from '../../components/Footer/Footer'
import MerchantSectionList from '../../components/MerchantSectionList/MerchantSectionList'
import ProductList from '../../components/ProductList/ProductList'

const MerchantChecklist = ({ pageMerchants, selectedMerchants, setSelectedMerchants }) => {
    return (
        <Box>
            <Text>
                Brand
            </Text>
            <Stack
                direction='column'
                spacing={{ base: 1 }}
            >
                {pageMerchants.map((merchant) => (
                    <MerchantCheck
                        key={merchant}
                        onClick={setSelectedMerchants([...selectedMerchants, merchant])}
                    >
                        {merchant}
                    </MerchantCheck>
                ))}
            </Stack>
        </Box>
        
    )
}

const getMerchants = (products) => {
    const totalProductMerchants = products.map(product => product.merchant.name)
    const uniqueProductMerchants = [...new Set(totalProductMerchants)]
    return uniqueProductMerchants
}

function index({ products, categories, animals, merchants }) {
    const [pageProducts, setPageProducts] = useState(products)
    const [pageMerchants, setPageMerchants] = useState(merchants)
    const [selectedMerchants, setSelectedMerchants] = useState([])
    const [selectedAnimal, setSelectedAnimal] = useState('')
    const [sortMethod, setSortMethod] = useState('pop')
    const [searchText, setSearchText] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (router.query.search && router.query.search != "") {
            const search = router.query.search
            const price = router.query.price
            setSearchText(search)

            const filteredProducts = products.filter(product => {
                const firstValid = product.name.toLowerCase().includes(search.toLowerCase())
                const secondValid = product.variants[0].price <= price
                return firstValid && secondValid
            })
            setPageMerchants(getMerchants(filteredProducts))
            setPageProducts(filteredProducts)
        }
    }, [router.query])

    return (
        <Box>
            <AnnouncementBanner />
            <Sidebar />
            <PageContainer>
                <Stack direction='row'>
                    <MerchantChecklist
                        pageMerchants={pageMerchants}
                        selectedMerchants={selectedMerchants}
                        setPageMerchants={setSelectedMerchants}
                    />
                    <Box>
                        <Stack
                            direction='row'
                        >
                            <Text>
                                Showing results for {searchText}
                            </Text>
                            <Spacer />
                            <AnimalList
                                animals={animals}
                                setSelectedAnimal={setSelectedAnimal}
                            />
                            <SortMenu
                                setSortMethod={setSortMethod}
                            />
                        </Stack>
                        <MerchantSectionList
                            merchants={pageMerchants}
                        />
                        <ProductList
                            heading='Suggested products'
                            products={pageProducts}
                            sortMethod={sortMethod}
                        />
                    </Box>
                </Stack>
            </PageContainer>
            <Footer />
        </Box>
    )
}

export default index
