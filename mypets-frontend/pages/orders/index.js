import { useContext, useState, useEffect } from 'react'
import { Container } from '@chakra-ui/react'

import OrderCard from '../../components/OrderCard/OrderCard'
import AuthContext, { callAPI } from '../../context/AuthContext'
import { API_PRODUCTS_URL } from '../../utils/urls'

const getOrders = (user) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            if (user) {
                setLoading(true)
                const data = await callAPI('/orders', 'GET')
                setOrders(data)
                setLoading(false)
            }
        }
        fetchOrders()
    }, [user])

    return { orders, loading }
}

function Orders({ products }) {
    const { user } = useContext(AuthContext)
    const { orders, loading } = getOrders(user)

    return (
        <>
            <Container maxW='1200px'>
                {orders.map((order, i) => (
                    <OrderCard key={i} order={order} loading={loading}/>
                ))}
            </Container>
        </>
    )
}

export default Orders

export async function getStaticProps() {

    // Fetch merchants, products 
    const products_res = await fetch(`${API_PRODUCTS_URL}`)
    const products = await products_res.json()

    // Return as props
    return {
        props: {
            products: products
        }
    }
}
