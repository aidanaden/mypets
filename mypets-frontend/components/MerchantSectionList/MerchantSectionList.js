import React from 'react'
import {
    Heading,
    HStack
} from "@chakra-ui/react"

import SectionHeader from '../SectionHeader/SectionHeader'
import MerchantCard from "../MerchantCard/MerchantCard"

function MerchantSectionList({ merchants, spacing=6 }) {
    return (
        <>
            <SectionHeader>
                Available Merchants
            </SectionHeader>
            <HStack
                justifyContent="left"
                mb={{ lg: 4 }}
                spacing={spacing}
                overflowX='auto'
                overflowY='hidden'
            >
                {merchants.map((merchant, index) => (
                    <MerchantCard key={index} merchant={merchant}/>
                ))}
            </HStack>
        </>
    )
}

export default MerchantSectionList
