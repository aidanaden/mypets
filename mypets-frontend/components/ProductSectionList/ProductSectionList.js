import {
    Stack,
    Box
} from "@chakra-ui/react"

import ProductList from '../ProductList/ProductList'
import SortMenu from "../SortMenu/SortMenu"

function ProductSectionList({ products, categories, setSortMethod, sortMethod, selectedAnimal }) {
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

    const filterProductsByCategoryAnimal = (category, animal) => {
        if (animal != '') {
            const filteredProducts = products.filter((product) => {
                product.animal.name == animal && product.category.name == category
            })
            console.log('filtered products: ', filteredProducts)
            return filteredProducts
        } else {
            const filteredProducts = products.filter((product) => {
                product.category.name == category
            })
            console.log('animal value empty!')
            console.log('filtered products: ', filteredProducts)
            return filteredProducts
        }
    }

    const categoryOnly = categories.filter(category => category != 'All products')
    console.log('category only: ', categoryOnly)

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
                        products={filterProductsByCategoryAnimal(category, selectedAnimal)}
                    />
                ))}
            </Stack>
        </Box>
    )
}

export default ProductSectionList
