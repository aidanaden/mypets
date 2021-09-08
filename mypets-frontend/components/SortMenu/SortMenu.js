import { 
    Box,
    Menu, 
    MenuItem, 
    MenuList, 
    useToast
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import MypetsMenuBtn from '../MypetsMenuBtn/MypetsMenuBtn'

function SortMenu({ setSortMethod }) {

    const toast = useToast()
    const [sortBtnText, setSortBtnText] = useState("Sort by Price")

    const sortTypes = [
        'Highest price',
        'Lowest price',
        'Most popular'
    ]

    const sortMap = {
        'Highest price': 'desc',
        'Lowest price': 'asc',
        'Most popular': 'pop'
    }

    const displaySortMethod = (sortType) => toast({
        title: `Sorting products by ${sortType}`,
        status: 'info',
        variant: 'solid',
        isClosable: true,
        duration: 3000,
    })

    const updateSort = (sortType) => {
        setSortBtnText(sortType)
        setSortMethod(sortMap[sortType])
        displaySortMethod(sortType)
    }

    return (
        <Box 
            alignSelf='start'
            w='100%'
            mt={4}
        >
            <SectionHeader>
                Sort by:
            </SectionHeader>
            <Menu>
                <MypetsMenuBtn menuBtnText={sortBtnText} />
                <MenuList boxShadow="md">
                    {sortTypes.map((sortType, i) => (
                        <MenuItem key={i} onClick={() => (
                            updateSort(sortType)
                        )}>
                            {sortType}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default SortMenu
