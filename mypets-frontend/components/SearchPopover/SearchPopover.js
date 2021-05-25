import { useState, useRef } from 'react'
import {
    Box,
    Portal,
    Button
  } from "@chakra-ui/react"

import Searchbar from '../Searchbar/Searchbar'

function SearchPopover({ onChange, mr }) {

    const [isOpen, setIsOpen] = useState(false)

    const popOverOnChange = (e) => {
        console.log('pop over on change called! value of open is: ', isOpen)
        onChange(e)
        e.target.value != '' ? setIsOpen(true) : setIsOpen(false)
    }

    return (
        <Box mr={mr}>
            <Searchbar onChange={onChange} />
        </Box>
    )
}

export default SearchPopover
