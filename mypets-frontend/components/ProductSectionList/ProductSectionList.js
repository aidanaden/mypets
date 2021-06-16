import { Box, Heading } from "@chakra-ui/react"
import ProductList from '../ProductList/ProductList'

function ProductSectionList({ products, sortMethod, selectedCategory, heading }) {

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
        <Box w='1000px'>
            <ProductList products={filterProductsByCategory(products)} heading={heading}/>
        </Box>
    )
}

export default ProductSectionList
