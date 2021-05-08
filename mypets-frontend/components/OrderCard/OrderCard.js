import React from 'react'
import { Box, Flex, VStack, HStack, Badge, Text } from '@chakra-ui/react'
import OrderProductCard from '../OrderProductCard/OrderProductCard'
import OrderDeliveryStatusBar from '../OrderDeliveryStatusBar/OrderDeliveryStatusBar'
import OrderPriceBreakdownList from '../OrderPriceBreakdownList/OrderPriceBreakdownList'

function OrderCard() {

    const products = [
        'object1',
        'object2'
    ]

    return (
        <Flex 
            direction='row' 
            w='100%' 
            h='auto' 
            mx='auto' 
            mt={6} 
            rounded='lg' 
            boxShadow='sm' 
            borderWidth='1px' 
        >
            <VStack py={8} px={8} spacing={8}>
                <OrderProductCard />
                <OrderProductCard />
                <OrderProductCard />
            </VStack>
            <Box p={12} flex='1'>
                <OrderDeliveryStatusBar />
                <OrderPriceBreakdownList />
            </Box>
        </Flex>
    )
}

export default OrderCard
