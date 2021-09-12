import { useState } from 'react'
import { Stack } from '@chakra-ui/react'

import Searchbar from '../Searchbar/Searchbar'
import PriceFilterPopover from '../PriceFilterPopover/PriceFilterPopover'

function SearchbarGroup({ ...props }) {    
    const [price, setPrice] = useState(50)

    const updatePriceOnChange = (val) => {
        setPrice(val)
    }
    return (
        <Stack
            direction='row'
            px={2}
            {...props}
        >
            <Searchbar
                mr={4}
                price={price}
            />
            <PriceFilterPopover
                price={price}
                onChange={updatePriceOnChange}
            />
        </Stack>
    )
}

export default SearchbarGroup
