import lodash from 'lodash'
import { Box, Flex, VStack, HStack, Badge, Text } from '@chakra-ui/react'
import OrderProductCard from '../OrderProductCard/OrderProductCard'
import OrderDeliveryStatusBar from '../OrderDeliveryStatusBar/OrderDeliveryStatusBar'
import OrderPriceBreakdownList from '../OrderPriceBreakdownList/OrderPriceBreakdownList'

function OrderCard({ order, loading }) {

    const groupedProducts = lodash.groupBy(order.products, 'name')
    const productNames = Object.keys(lodash.groupBy(order.products, 'name'))
    const totalPrice = order.total_price

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
            <Flex direction='column' py={8} px={8}>
                {order.products.map((product, i) => (
                    <OrderProductCard key={i} product={product} quantity={2} />
                ))}
            </Flex>
            <Box p={12} flex='1'>
                <OrderDeliveryStatusBar orderDate={order.order_date} status={order.status}/>
                <OrderPriceBreakdownList groupedProducts={groupedProducts} productNames={productNames} totalPrice={totalPrice}/>
            </Box>
        </Flex>
    )
}

export default OrderCard
