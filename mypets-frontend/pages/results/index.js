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

// const MerchantCheck = ({ children, ...props }) => {
//     return (
//         <Checkbox
//             colorScheme='mypets'
//             {...props}
//             isChecked
//         >
//             {children}
//         </Checkbox>
//     )
// }

// const MerchantChecklist = ({ pageMerchants, selectedMerchants, setSelectedMerchants }) => {
//     const merchantChangeOnCheck = (checked, merchant) => {
//         if (checked) {
//             setSelectedMerchants([...selectedMerchants, merchant])
//         } else {
//             setSelectedMerchants(selectedMerchants.filter(selectedMerchant => selectedMerchant != merchant))
//         }
//     }

//     return (
//         <Box>
//             <Text>
//                 Brand
//             </Text>
//             <Stack
//                 direction='column'
//                 spacing={{ base: 1 }}
//             >
//                 {pageMerchants.map((merchant) => (
//                     <MerchantCheck
//                         key={merchant}
//                         isChecked={selectedMerchants.includes(merchant)}
//                         onChange={(e) => merchantChangeOnCheck(e.target.checked, merchant)}
//                     >
//                         {merchant}
//                     </MerchantCheck>
//                 ))}
//             </Stack>
//         </Box>
        
//     )
// }

const getMerchants = (products) => {
    const totalProductMerchants = products.map(product => product.merchant.name)
    const uniqueProductMerchants = [...new Set(totalProductMerchants)]
    return uniqueProductMerchants
}

export default function index({ products, animals, merchants }) {
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
        } else {
            setPageMerchants(getMerchants(products))
            setPageProducts(products)
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
                    {/* <Box>
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
                    </Box> */}
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

    // const getCategories = (products) => {
    //     const totalProductCategories = products.map(product => product.category.name)
    //     const uniqueProductCategories = [...new Set(totalProductCategories)]
    //     return ['All products'].concat(uniqueProductCategories)
    // }

    // const categories = getCategories(products)

    // Return as props
    return {
        props: {
            products,
            animals,
            merchants
        }
    }
}