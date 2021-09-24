import {
    Stack,
    Box
} from "@chakra-ui/react"

import ProductList from '../ProductList/ProductList'
import SortMenu from "../SortMenu/SortMenu"

function ProductSectionList({ products, categories, setSortMethod, sortMethod, selectedAnimal }) {
    // const sortProductsAscending = (products) => {
    //     products.sort((a, b) => (a.variants[0].price < b.variants[0].price) ? -1: 1)
    // }

    // const sortProductsDescending = (products) => {
    //     products.sort((a, b) => (a.variants[0].price < b.variants[0].price) ? 1: -1)
    // }

    // const sortProductsPopularity = (products) => {
    //     products.sort((a, b) => (a.rating < b.rating) ? 1: -1)
    // }

    // if (sortMethod == 'asc') {
    //     sortProductsAscending(products)
    // } else if (sortMethod == 'desc') {
    //     sortProductsDescending(products)
    // } else if (sortMethod == 'pop') {
    //     sortProductsPopularity(products)
    // }

    const filterProductsByAnimal = (products, animal) => {
        if (animal != '') {
            const filteredProducts = products.filter((product) => {
                if (product.animal.name == animal) {
                    return product
                }
            })
            return filteredProducts
        } else {
            return products
        }
    }

    const filterProductsByCategory = (products, category) => {
        const filteredProducts = products.filter((product) => {
            if (product.category.name == category) {
                return product
            }
        })
        return filteredProducts
    }

    const getCategories = (products) => {
        const totalProductCategories = products.map(product => product.category.name)
        const uniqueProductCategories = [...new Set(totalProductCategories)]
        return uniqueProductCategories
    }

    const productByAnimal = filterProductsByAnimal(products, selectedAnimal)
    const categoryOnly = getCategories(productByAnimal)

    return (
        <Box w='100%' bg='purple.100'>
            <Box
                display={{ base: 'inherit', lg: 'none'}} 
                mb={8}
                bg='green.100'
            >
                <SortMenu
                    setSortMethod={setSortMethod}
                />
            </Box>
            <Stack
                direction='column'
                spacing={{ lg: 8 }}
                bg='blue.100'
            >
                {categoryOnly.map((category, i) => (
                    <ProductList
                        key={i}
                        heading={category}
                        sortMethod={sortMethod}
                        products={filterProductsByCategory(productByAnimal, category)}
                    />
                ))}
            </Stack>
        </Box>
    )
}

export default ProductSectionList
