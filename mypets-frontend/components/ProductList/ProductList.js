import { useEffect, useState } from 'react'
import {
    SimpleGrid,
    Heading
} from '@chakra-ui/react'

import ProductListCard from '../ProductListCard/ProductListCard'

function ProductList({ heading, products, spacing=4 }) {
    const [listProducts, setListProducts] = useState(products)

    useEffect(() => {
        setListProducts(products)
    }, [products])

    return (
        <Box>
            <SectionHeader>
                {heading}
            </SectionHeader>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 4, xl: 5 }} spacing={spacing}>
                {listProducts.map((product, index) => (
                    <ProductListCard product={product} key={index} />
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default ProductList
