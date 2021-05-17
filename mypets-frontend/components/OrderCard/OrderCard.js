import lodash from 'lodash'
import { useSWR } from 'swr'
import { Box, Flex, VStack, HStack, Badge, Text } from '@chakra-ui/react'

import { API_PRODUCTS_URL } from '../../utils/urls'
import OrderProductCard from '../OrderProductCard/OrderProductCard'
import OrderDeliveryStatusBar from '../OrderDeliveryStatusBar/OrderDeliveryStatusBar'
import OrderPriceBreakdownList from '../OrderPriceBreakdownList/OrderPriceBreakdownList'

function OrderCard({ order, loading }) {

    const products = order.order_products.map(orderProduct => orderProduct.product)

    const groupedOrderProducts = lodash.groupBy(order.order_products, 'product.name')
    const productNames = Object.keys(groupedOrderProducts)
    const totalPrice = order.total_price


    // console.log('List of order products: ', order.order_products)
    // console.log('List of product ID + name map: ', productNames)
    // console.log('List of grouped order products: ', groupedOrderProducts)
    // console.log('List of products in order: ', products)


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
                {order.order_products.map((orderProduct, i) => (
                    <OrderProductCard key={i} product={orderProduct.product} quantity={orderProduct.quantity} reviewed={orderProduct.reviewed}/>
                ))}
            </Flex>
            <Box p={12} flex='1'>
                <OrderDeliveryStatusBar orderDate={order.order_date} status={order.status}/>
                <OrderPriceBreakdownList groupedOrderProducts={groupedOrderProducts} productNames={productNames} totalPrice={totalPrice}/>
            </Box>
        </Flex>
    )
}

export default OrderCard
