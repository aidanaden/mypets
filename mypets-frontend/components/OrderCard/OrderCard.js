import lodash from 'lodash'
import { 
    Box, 
    Flex,
    Stack
} from '@chakra-ui/react'

import Section from '../Section/Section'
import OrderProductCard from '../OrderProductCard/OrderProductCard'
import OrderDeliveryStatusBar from '../OrderDeliveryStatusBar/OrderDeliveryStatusBar'
import OrderPriceBreakdownList from '../OrderPriceBreakdownList/OrderPriceBreakdownList'

function OrderCard({ order, loading }) {
    const groupedOrderProducts = lodash.groupBy(order.order_products, 'variant.product.name')
    const productNames = Object.keys(groupedOrderProducts)

    return (
        <Section>
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                justifyContent='space-between'
            >
                <Box display={{ base: 'block', lg: 'none' }}>
                    <OrderDeliveryStatusBar 
                        orderId={order.order_id}
                        orderDate={order.order_date} 
                        deliveryDate={order.delivery_date} 
                        status={order.status}
                    />
                    <OrderPriceBreakdownList 
                        groupedOrderProducts={groupedOrderProducts} 
                        productNames={productNames} 
                        order={order}
                    />
                </Box>
                <Stack
                    direction='column'
                    mr={{ lg: 12, xl: 16 }}
                >
                    {productNames.map((productName, i) => (
                        <OrderProductCard
                            key={i}
                            order_products={groupedOrderProducts[productName]}
                        />
                    ))}
                </Stack>
                <Box
                    display={{ base: 'none', lg: 'block' }}
                    w='100%'
                >
                    <OrderDeliveryStatusBar 
                        orderId={order.order_id}
                        orderDate={order.order_date} 
                        deliveryDate={order.delivery_date} 
                        status={order.status}
                    />
                    <OrderPriceBreakdownList 
                        groupedOrderProducts={groupedOrderProducts} 
                        productNames={productNames} 
                        order={order}
                    />
                </Box>
            </Flex>
        </Section>
    )
}

export default OrderCard
