import React from 'react'
import {
    Box,
    HStack,
    Wrap,
    WrapItem
} from "@chakra-ui/react"

import SectionHeader from '../SectionHeader/SectionHeader'
import MerchantCard from "../MerchantCard/MerchantCard"

function MerchantSectionList({ merchants, spacing=6 }) {
    return (
        <Box>
            <SectionHeader>
                Available Brands
            </SectionHeader>
            <HStack
                mt={0}
                justifyContent="left"
                spacing={spacing}
                pb={{ base: 4 }}
            >
                {merchants.map((merchant, index) => (
                    <MerchantCard key={index} merchant={merchant}/>
                ))}
            </HStack>
        </Box>
    )
}

export default MerchantSectionList
