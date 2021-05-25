import { useEffect, useState } from 'react'
import {
    SimpleGrid,
    Heading
} from '@chakra-ui/react'

import ProductListCard from '../ProductListCard/ProductListCard'

function ProductList({ products, heading, fontSize='2xl', spacing=4 }) {

    const [listProducts, setListProducts] = useState(products)

    useEffect(() => {
        setListProducts(products)
        console.log('PRODUCTS CHANGED DUE TO SORT: ', listProducts)
    }, [products])

    return (
        <>  
            { heading && (
                <Heading as="h2" textAlign="left" mt={9} mb={6} fontSize={fontSize}>
                    {heading}
                </Heading>
            )}
            <SimpleGrid columns={5} spacing={spacing}>
                {listProducts.map((product, index) => (
                    <ProductListCard product={product} key={index} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default ProductList
