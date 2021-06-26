import { 
    Stack, 
    Box, 
    Text 
} from '@chakra-ui/react'
import { stringToDate } from '../../utils/urls'

function OrderDeliveryStatusBar({ orderId, orderDate, deliveryDate, status }) {

    return (
        <Box>
            <Text textAlign='center' fontSize='sm'>Order id: <b>{orderId}</b></Text> 
            <Stack direction={{ base: 'column', md: 'row' }} alignContent='center' mb={4}>
                <Text textAlign='center' fontSize='sm'>Order date: <b>{stringToDate(orderDate)}</b></Text>
                <Text textAlign='center' fontSize='sm'>Delivery date: <b>{stringToDate(deliveryDate)}</b></Text>
            </Stack>
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
