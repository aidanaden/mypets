import React from 'react'
import { Flex, Input, Button, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

function Searchbar() {
    return (
        <Flex>
            <InputGroup>
                <InputLeftElement 
                    pointerEvents="none"
                    children={<Search2Icon color="gray.300"/>}
                />
                <Input
                    size="md"
                    focusBorderColor="mypets.100" 
                    placeholder="Search for products here" 
                />
            </InputGroup>
        </Flex>
    )
}

export default Searchbar
