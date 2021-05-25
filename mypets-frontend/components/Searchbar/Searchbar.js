import React from 'react'
import { Flex, Input, Button, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

function Searchbar({ onChange, mr }) {
    return (
        <InputGroup w='xl' mr={mr}>
            <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.600" />}
            />
            <Input
                size="md"
                focusBorderColor="mypets.100"
                placeholder="Search for products here"
                borderWidth={2}
                onChange={onChange}
            />
        </InputGroup>
    )
}

export default Searchbar
