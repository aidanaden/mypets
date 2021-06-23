import lodash from 'lodash'
import { useSWR } from 'swr'
import { Box, Flex, VStack, HStack, Badge, Text } from '@chakra-ui/react'

import { API_PRODUCTS_URL } from '../../utils/urls'
import OrderProductCard from '../OrderProductCard/OrderProductCard'
import OrderDeliveryStatusBar from '../OrderDeliveryStatusBar/OrderDeliveryStatusBar'
import OrderPriceBreakdownList from '../OrderPriceBreakdownList/OrderPriceBreakdownList'

function OrderCard({ order, loading }) {

    const groupedOrderProducts = lodash.groupBy(order.order_products, 'variant.product.name')
    const productNames = Object.keys(groupedOrderProducts)
    const totalPrice = order.total_price

    return (
        <Flex 
            direction={{ base: 'column', lg: 'row' }}
            w='100%' 
            h='auto' 
            mx='auto' 
            mt={6} 
            rounded='lg' 
            boxShadow='sm' 
            borderWidth='1px' 
        >
            <Box p={{ base: 4, md: 8, xl: 12 }} display={{ base: 'block', lg: 'none' }} w='100%'>
                <OrderDeliveryStatusBar orderDate={order.order_date} status={order.status}/>
                <OrderPriceBreakdownList groupedOrderProducts={groupedOrderProducts} productNames={productNames} totalPrice={totalPrice}/>
            </Box>
            <Stack direction='column' py={8} px={{ base: 0, lg: 8 }}>
                {productNames.map((productName, i) => (
                    <OrderProductCard key={i} order_products={groupedOrderProducts[productName]}/>
                ))}
            </Stack>
            <Box p={{ base: 4, md: 8, xl: 12 }} display={{ base: 'none', lg: 'block' }} w='100%'>
                <OrderDeliveryStatusBar orderDate={order.order_date} status={order.status}/>
                <OrderPriceBreakdownList groupedOrderProducts={groupedOrderProducts} productNames={productNames} totalPrice={totalPrice}/>
            </Box>
        </Flex>
    )
}

export default OrderCard
