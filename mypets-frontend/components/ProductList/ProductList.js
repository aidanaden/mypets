import { useEffect, useState } from 'react'
import {
    SimpleGrid,
    Heading
} from '@chakra-ui/react'

import ProductListCard from '../ProductListCard/ProductListCard'

function ProductList({ products, spacing=4 }) {
    const [listProducts, setListProducts] = useState(products)

    useEffect(() => {
        setListProducts(products)
    }, [products])

    return (
        <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={spacing}>
            {listProducts.map((product, index) => (
                <ProductListCard product={product} key={index} />
            ))}
        </SimpleGrid>
    )
}

export default ProductList
