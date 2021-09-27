import { useEffect, useState } from 'react'
import {
    SimpleGrid,
    Box
} from '@chakra-ui/react'

import SectionHeader from '../SectionHeader/SectionHeader'
import ProductListCard from '../ProductListCard/ProductListCard'

function ProductList({ heading, products, sortMethod, selectedAnimal, selectedMerchants }) {
    const [listProducts, setListProducts] = useState(products)

    const sortProductsAscending = (products) => {
        products.sort((a, b) => (a.variants[0].price < b.variants[0].price) ? -1: 1)
    }

    const sortProductsDescending = (products) => {
        products.sort((a, b) => (a.variants[0].price < b.variants[0].price) ? 1: -1)
    }

    const sortProductsPopularity = (products) => {
        products.sort((a, b) => (a.rating < b.rating) ? 1: -1)
    }

    const filterProductByAnimalOnly = (products, animal) => {
        const filteredProducts = products.filter((product) => {
            if (product.animal.name == animal) {
                return product
            }
        })
        return filteredProducts
    }

    const filterProductByMerchantOnly = (products, selectedMerchants) => {
        if (selectedMerchants.length == 0) {
            console.log('no merchant selected, displaying all')
            return products
        }
        const filteredProducts = products.filter((product) => {
            if (selectedMerchants.includes(product.merchant.name)) {
                return product
            }
        })
        return filteredProducts
    }

    const filterProductByAnimalAndMerchant = (products, animal, selectedMerchants) => {
        if (selectedMerchants.length == 0) {
            console.log('no merchant selected, displaying all')
            return products
        }
        const filteredProducts = products.filter((product) => {
            if (product.animal.name == animal && 
                selectedMerchants.includes(product.merchant.name)) {
                return product
            }
        })
        return filteredProducts
    }

    const filterProducts = (products, animal, selectedMerchants) => {
        if (animal != '') {
            if (selectedMerchants) {
                filterProductByAnimalAndMerchant(products, animal, selectedMerchants)
            } else {
                filterProductByAnimalOnly(products, animal)
            }
        } else {
            if (selectedMerchants) {
                filterProductByMerchantOnly(products, selectedMerchants)
            } else {
                return products
            }
        }
    }

    if (sortMethod == 'asc') {
        sortProductsAscending(products)
    } else if (sortMethod == 'desc') {
        sortProductsDescending(products)
    } else if (sortMethod == 'pop') {
        sortProductsPopularity(products)
    }

    const filteredProducts = filterProducts(products, selectedAnimal, selectedMerchants)

    // useEffect(() => {
    //     const productByAnimal = filterProductsByAnimalMerchants(products, selectedAnimal, selectedMerchants)
    //     setListProducts(productByAnimal)

    //     console.log('animal filter selected: ', selectedAnimal)
    //     console.log('products filtered by animal: ', productByAnimal)
    // }, [selectedMerchants])

    return (
        <Box>
            <SectionHeader>
                {heading}
            </SectionHeader>
            <SimpleGrid
                columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
                spacing={{ base: 4 }}
            >
                {filteredProducts.map((product, index) => (
                    <ProductListCard product={product} key={index} />
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default ProductList
