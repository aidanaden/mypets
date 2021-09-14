import { useState } from 'react'
import { HStack } from '@chakra-ui/react'

import Searchbar from '../Searchbar/Searchbar'
import PriceFilterPopover from '../PriceFilterPopover/PriceFilterPopover'

function SearchbarGroup({ ...props }) {    
    const [price, setPrice] = useState(50)

    const updatePriceOnChange = (val) => {
        setPrice(val)
    }
    return (
        <HStack
            // spacing={4}
            bg='red.100'
            {...props}
        >
            <Searchbar
                price={price}
            />
            <PriceFilterPopover
                price={price}
                onChange={updatePriceOnChange}
            />
        </HStack>
    )
}

export default SearchbarGroup
