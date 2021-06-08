import { useState } from 'react'
import {
    Box,
    HStack
} from '@chakra-ui/react'

import Searchbar from '../Searchbar/Searchbar'
import PriceFilterPopover from '../PriceFilterPopover/PriceFilterPopover'

function SearchbarGroup({ products }) {    
    const [price, setPrice] = useState(50)

    const updatePriceOnChange = (val) => {
        setPrice(val)
    }
    return (
        <HStack>
            <Searchbar mr={4} products={products} price={price}/>
            <PriceFilterPopover price={price} onChange={updatePriceOnChange}/>
        </HStack>
    )
}

export default SearchbarGroup
