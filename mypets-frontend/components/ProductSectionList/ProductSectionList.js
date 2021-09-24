import {
    Stack,
    Box
} from "@chakra-ui/react"

import ProductList from '../ProductList/ProductList'
import SortMenu from "../SortMenu/SortMenu"

import { getCategories } from '../../utils/urls'

function ProductSectionList({ products, categories, setSortMethod, sortMethod, selectedAnimal }) {
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

    const productByAnimal = filterProductsByAnimal(products, selectedAnimal)
    const categoryOnly = getCategories(productByAnimal)

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
                        sortMethod={sortMethod}
                        selectedAnimal={''}
                        products={filterProductsByCategory(productByAnimal, category)}
                    />
                ))}
            </Stack>
        </Box>
    )
}

export default ProductSectionList
