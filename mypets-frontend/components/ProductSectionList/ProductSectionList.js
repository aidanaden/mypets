import {
    Stack,
    Box
} from "@chakra-ui/react"

import SectionHeader from '../SectionHeader/SectionHeader'
import ProductList from '../ProductList/ProductList'
import SortMenu from "../SortMenu/SortMenu"

function ProductSectionList({ products, categories, setSortMethod, sortMethod, heading }) {

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

    const filterProductsByCategory = (category) => {
        return products.filter(product => product.category.name == category)
    }

    return (
        <Box w='100%'>
            { heading && (
                <SectionHeader>
                    {heading}
                </SectionHeader>
            )}
            <Box
                display={{ base: 'inherit', lg: 'none'}} 
                mb={8}
            >
                <SortMenu
                    setSortMethod={setSortMethod}
                />
            </Box>
            <Stack
                direction='column'
                spacing={{ lg: 8 }}
            >
                {categories.map((category, i) => (
                    <ProductList
                        key={i}
                        products={filterProductsByCategory(category)}
                        heading={category}
                    />
                ))}
            </Stack>
        </Box>
    )
}

export default ProductSectionList
