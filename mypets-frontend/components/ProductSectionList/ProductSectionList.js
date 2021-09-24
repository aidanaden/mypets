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
        return products.filter(product => {
            // if (animal != '') {
            //     product.category.name == category && product.animal.name == animal
            // } else {
            //     product.category.name == category
            // }
            return product.category.name == category
        })
    }

    const categoryOnly = categories.map(category => {
        if (category != 'All products') {
            return category
        }
    })
    console.log('category only: ', categoryOnly)

    return (
        <Box w='100%'>
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
