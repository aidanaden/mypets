import { useState, useRef } from 'react'
import {
    Box,
    HStack,
    Portal
} from '@chakra-ui/react'

import SearchPopover from '../SearchPopover/SearchPopover'
import PriceFilterPopover from '../PriceFilterPopover/PriceFilterPopover'

function SearchbarGroup() {

    const [searchText, setSearchText] = useState('')

    const searchTextChange = (e) => {
        console.log('search text changed to: ', e.target.value, ' !')
        setSearchText(e.target.value)
    }

    const ref = useRef()

    return (
        <>
            <Box>
                <HStack>
                    <SearchPopover onChange={searchTextChange} mr={4} />
                    <PriceFilterPopover />
                </HStack>
                {/* <Box zIndex='popover' bgColor='blue.100'>
                    <Portal w={25} h={25} containerRef={ref}>
                        <Box bgColor='red.100'>
                            Random box results
                        </Box>
                    </Portal>
                </Box> */}
            </Box>
        </>
    )
}

export default SearchbarGroup
