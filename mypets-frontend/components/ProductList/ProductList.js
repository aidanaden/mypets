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

    if (sortMethod == 'asc') {
        sortProductsAscending(products)
    } else if (sortMethod == 'desc') {
        sortProductsDescending(products)
    } else if (sortMethod == 'pop') {
        sortProductsPopularity(products)
    }

    const filterProductsByAnimalMerchants = (products, animal, selectedMerchants) => {
        if (animal != '') {
            if (selectedMerchants) {
                if (selectedMerchants.length == 0) {
                    console.log('no merchant selected, filtering by animals only')
                    const filteredProducts = products.filter((product) => {
                        if (product.animal.name == animal) {
                            return product
                        }
                    })
                    return filteredProducts
                }
                console.log('animal + selected merchants selected')
                const filteredProducts = products.filter((product) => {
                    if (product.animal.name == animal && 
                        selectedMerchants.includes(product.merchant.name)) {
                        return product
                    }
                })
                return filteredProducts
            } else {
                const filteredProducts = products.filter((product) => {
                    if (product.animal.name == animal) {
                        return product
                    }
                })
                console.log('animal with no merchants selected')
                return filteredProducts
            }
        } else {
            if (selectedMerchants) {
                console.log('no animals with selected merchants')
                if (selectedMerchants.length == 0) {
                    console.log('no merchant selected, no animals selected, displaying all')
                    return products
                }
                const filteredProducts = products.filter((product) => {
                    if (selectedMerchants.includes(product.merchant.name)) {
                        return product
                    }
                })
                return filteredProducts
            } else {
                return products
            }
        }
    }

    useEffect(() => {
        setListProducts(products)
    }, [products])

    useEffect(() => {
        const filteredProducts = filterProductsByAnimalMerchants(products, selectedAnimal, selectedMerchants)
        setListProducts(filteredProducts)

        console.log('animal filter selected: ', selectedAnimal)
        console.log('products filtered by animal: ', filteredProducts)
    }, [selectedMerchants, selectedAnimal])

    return (
        <Box>
            {listProducts &&
            <>
                <SectionHeader>
                    {heading}
                </SectionHeader>
                <SimpleGrid
                    columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
                    spacing={{ base: 4 }}
                >
                    {listProducts.map((product, index) => (
                        <ProductListCard product={product} key={index} />
                    ))}
                </SimpleGrid>
            </>}
        </Box>
    )
}

export default ProductList
