import React from 'react'
import {
    Box,
    HStack,
    Wrap,
    WrapItem
} from "@chakra-ui/react"

import SectionHeader from '../SectionHeader/SectionHeader'
import MerchantCard from "../MerchantCard/MerchantCard"

function MerchantSectionList({ merchants, spacing=4 }) {
    return (
        <Box>
            <SectionHeader>
                Available Brands
            </SectionHeader>
            <Wrap
                mt={0}
                w='100%'
                justifyContent="left"
                spacing={spacing}
                pb={{ base: 4 }}
            >
                {merchants.map((merchant, index) => (
                    <WrapItem>
                        <MerchantCard key={index} merchant={merchant}/>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}

export default MerchantSectionList
