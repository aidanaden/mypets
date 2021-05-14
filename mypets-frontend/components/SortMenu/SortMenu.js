import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"
import MypetsBtn from '../MypetsBtn/MypetsBtn'
import MypetsMenuBtn from '../MypetsMenuBtn/MypetsMenuBtn'

function SortMenu({ setSortMethod }) {

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

    const updateSort = (sortType) => {
        setSortBtnText(sortType)
        setSortMethod(sortMap[sortType])
    }

    return (
        <Menu>
            <MypetsMenuBtn menuBtnText={sortBtnText} />
            <MenuList boxShadow="md">
                {sortTypes.map((sortType, i) => (
                    <MenuItem key={i} onClick={() => (
                        updateSort(sortType)
                    )}>{sortType}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortMenu
