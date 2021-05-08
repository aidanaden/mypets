import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"

function SortMenu() {

    const [sortBtnText, setSortBtnText] = useState("Sort by Price")

    const sortTypes = [
        'Highest price',
        'Lowest price',
        'Most popular'
    ]

    return (
        <Menu>
            <MenuButton px={4} py={6} as={Button} rightIcon={<ChevronDownIcon />} borderWidth={4} borderColor="mypets.100" bgColor="white">
                {sortBtnText}
            </MenuButton>
            <MenuList boxShadow="md">
                {sortTypes.map((sortType, i) => (
                    <MenuItem key={i} onClick={() => (
                        setSortBtnText(sortType)
                    )}>{sortType}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortMenu
