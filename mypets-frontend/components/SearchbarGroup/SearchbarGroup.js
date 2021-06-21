import { useState } from 'react'
import {
    Box,
    HStack
} from '@chakra-ui/react'

import Searchbar from '../Searchbar/Searchbar'
import PriceFilterPopover from '../PriceFilterPopover/PriceFilterPopover'

function SearchbarGroup({ products, display }) {    
    const [price, setPrice] = useState(50)

    const updatePriceOnChange = (val) => {
        setPrice(val)
    }
    return (
        <HStack display={display} px={2}>
            <Searchbar mr={4} price={price}/>
            <PriceFilterPopover price={price} onChange={updatePriceOnChange}/>
        </HStack>
    )
}

export default SearchbarGroup
