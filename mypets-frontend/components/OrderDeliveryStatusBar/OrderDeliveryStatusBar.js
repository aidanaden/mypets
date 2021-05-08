import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function OrderDeliveryStatusBar({ orderDate, deliveryDate }) {
    return (
        <Box>
            <Text textAlign='center' mb={4} fontSize='sm'>Order date: <b>24 FEB 2021</b></Text>
            <Box 
                p={6} 
                mb={6} 
                textAlign='center' 
                rounded='lg' 
                boxShadow='sm' 
                borderWidth='1px' 
                bgGradient="linear(to-t, mypets.900, mypets.100)"
                textColor='gray.100'
                fontWeight='semibold'
                fontSize='xl'
            >   
                Order is on track to be delivered by the end of today!
            </Box>
        </Box>
        
    )
}

export default OrderDeliveryStatusBar
