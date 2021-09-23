import React from 'react'
import {
    Box,
    HStack
} from "@chakra-ui/react"

import SectionHeader from '../SectionHeader/SectionHeader'
import MerchantCard from "../MerchantCard/MerchantCard"

function MerchantSectionList({ merchants, spacing=6 }) {
    return (
        <Box bg='green.100'>
            <SectionHeader>
                Available Brands
            </SectionHeader>
            <HStack
                mt={0}
                justifyContent="left"
                spacing={spacing}
                overflowX='auto'
                overflowY='hidden'
                bg='red.100'
            >
                {merchants.map((merchant, index) => (
                    <MerchantCard key={index} merchant={merchant}/>
                ))}
            </HStack>
        </Box>
    )
}

export default MerchantSectionList
