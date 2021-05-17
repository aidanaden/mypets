import { useContext, useState, useEffect } from 'react'
import { Container } from '@chakra-ui/react'

import Navbar from '../../components/Navbar/Navbar'
import OrderCard from '../../components/OrderCard/OrderCard'
import AuthContext, { callAPI } from '../../context/AuthContext'
import { API_ORDERS_URL } from '../../utils/urls'

const getOrders = (user) => {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            if (user) {
                setLoading(true)
                const data = await callAPI('/orders', 'GET')
                // console.log('Order data: ', data)
                setOrders(data)
                setLoading(false)
            }
        }
        fetchOrders()
    }, [user])

    return { orders, loading }
}

function Orders() {

    const { user } = useContext(AuthContext)
    const { orders, loading } = getOrders(user)

    return (
        <>
            <Navbar />
            <Container maxW='1200px' mb={6}>
                {orders.map((order, i) => (
                    <OrderCard key={i} order={order} loading={loading}/>
                ))}
            </Container>
        </>
    )
}

export default Orders
