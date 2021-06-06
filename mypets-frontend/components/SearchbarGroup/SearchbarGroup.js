import {
    Box,
    HStack
} from '@chakra-ui/react'

import Searchbar from '../Searchbar/Searchbar'
import PriceFilterPopover from '../PriceFilterPopover/PriceFilterPopover'
import { callAPI } from '../../context/AuthContext'

function SearchbarGroup({ products }) {    
    return (
        <HStack>
            <Searchbar mr={4} products={products}/>
            <PriceFilterPopover />
        </HStack>
    )
}

export default SearchbarGroup
