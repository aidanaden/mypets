import React from 'react'
import { Heading, HStack } from "@chakra-ui/react"
import MerchantCard from "../MerchantCard/MerchantCard"

function MerchantSectionList({ merchants, fontsize={ base: 'xl', md: '2xl'}, spacing=6 }) {
    return (
        <>
        <Heading as="h2" textAlign="left" mb={{ base: 3, md: 6}} fontSize={fontsize}>
            Available Merchants
        </Heading>
        <HStack justifyContent="left" mb={{ lg: 4 }} spacing={spacing} overflowX='auto' overflowY='hidden' >
            {merchants.map((merchant, index) => (
                <MerchantCard key={index} merchant={merchant}/>
            ))}
        </HStack>
        </>
    )
}

export default MerchantSectionList
