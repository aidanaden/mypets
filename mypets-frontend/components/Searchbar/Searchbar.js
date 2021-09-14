import { useState } from 'react'
import {   
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    InputRightAddon
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

import MypetsBtn from '../MypetsBtn/MypetsBtn'

export default function Searchbar({ price, ...props }) {
    const router = useRouter()
    const [search, setSearch] = useState('')

    const removeInvalidCharacters = (text) => {
        return text.replace(/[^a-zA-Z ]/g, "")
    }

    const onEnterKeyPress = (e) => {
        if (e.key == 'Enter') {
            onSearchClick()
        }
    }

    const onSearchTextChange = (e) => {
        setSearch(removeInvalidCharacters(e.target.value))
    }

    const onSearchClick = () => {
        // redirect to search result page
        router.push({
            pathname: '/',
            query: { 
                search: search, 
                price: price
            }
        }, null, { shallow: true })
    }

    return (
        <InputGroup
            bg='blue.100'
            w={{ base: '60%', xl: 'xl' }}
            {...props}
        >
            <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.600" />}
            />
            <Input
                size="md"
                focusBorderColor="mypets.100"
                placeholder="Search for products here"
                borderWidth={2}
                variant='filled'
                onChange={onSearchTextChange}
                onKeyPress={onEnterKeyPress}
            />
            <InputRightAddon
                p={0}
                children={
                    <MypetsBtn
                        btnText='Search'
                        w='100%'
                        roundedLeft={0}
                        noAnimate={true}
                        onClick={onSearchClick}
                    />}
            />
        </InputGroup>
    )
}
