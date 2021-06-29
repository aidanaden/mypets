import { 
    Flex,
    Box, 
    Heading 
} from "@chakra-ui/react"

import ProductList from '../ProductList/ProductList'
import CategoryList from '../CategoryList/CategoryList'
import SortMenu from "../SortMenu/SortMenu"

function ProductSectionList({ products, categories, setSortMethod, sortMethod, selectedCategory, setCategorySelected, heading }) {

    const sortProductsAscending = (products) => {
        products.sort((a, b) => (a.variants[0].price < b.variants[0].price) ? -1: 1)
    }

    const sortProductsDescending = (products) => {
        products.sort((a, b) => (a.variants[0].price < b.variants[0].price) ? 1: -1)
    }

    const sortProductsPopularity = (products) => {
        products.sort((a, b) => (a.rating < b.rating) ? 1: -1)
    }

    if (sortMethod == 'asc') {
        sortProductsAscending(products)
    } else if (sortMethod == 'desc') {
        sortProductsDescending(products)
    } else if (sortMethod == 'pop') {
        sortProductsPopularity(products)
    }

    const filterProductsByCategory = (products) => {
        if (selectedCategory === 'All products') {
            return products
        } else {
            return products.filter(product => product.category.name == selectedCategory)
        }
    }

    return (
        <Box w='100%'>
            { heading && (
                <Heading as="h2" textAlign="left" mt={6} mb={{ base: 4, lg: 6}} fontSize={{ base: 'xl', lg: '2xl' }}>
                    {heading}
                </Heading>
            )}
            <Flex 
                direction='column' 
                display={{ base: 'inherit', lg: 'none'}} 
                mb={8}
                spacing={4}
            >
                <CategoryList categories={categories} setSelectedCategory={setCategorySelected} />
                <SortMenu setSortMethod={setSortMethod} />
            </Flex>
            <ProductList products={filterProductsByCategory(products)} heading={heading}/>
        </Box>
    )
}

export default ProductSectionList
