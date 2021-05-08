import React from 'react'
import { Heading, HStack } from "@chakra-ui/react"
import MerchantCard from "../MerchantCard/MerchantCard"

function MerchantSectionList({ merchants, fontsize='2xl', spacing=6 }) {
    return (
        <>
        <Heading as="h2" textAlign="left" mb={6} fontSize={fontsize}>
            Available Merchants
        </Heading>
        <HStack justifyContent="left" mb={4} spacing={spacing}>
            {merchants.map((merchant, index) => (
                <MerchantCard key={index} merchant={merchant}/>
            ))}
        </HStack>
        </>
    )
}

export default MerchantSectionList
