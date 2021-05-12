import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"

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
            <MenuButton px={4} py={6} as={Button} rightIcon={<ChevronDownIcon />} borderWidth={4} borderColor="mypets.100" bgColor="white">
                {sortBtnText}
            </MenuButton>
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
