import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { stringToDate } from '../../utils/urls'

function OrderDeliveryStatusBar({ orderDate, status }) {

    return (
        <Box>
            <Text textAlign='center' mb={4} fontSize='sm'>Order date: <b>{stringToDate(orderDate)}</b></Text>
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
                Order status: {status}!
            </Box>
        </Box>
    )
}

export default OrderDeliveryStatusBar
