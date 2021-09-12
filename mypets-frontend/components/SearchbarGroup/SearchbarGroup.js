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
            spacing={4}
            bg='red.100'
            {...props}
        >
            <Searchbar
                price={price}
                mr={4}
            />
            <PriceFilterPopover
                price={price}
                onChange={updatePriceOnChange}
            />
        </Stack>
    )
}

export default SearchbarGroup
