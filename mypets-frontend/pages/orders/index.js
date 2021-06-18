import { 
    useContext, 
    useState, 
    useEffect 
} from 'react'
import { 
    Container,
    Center
} from '@chakra-ui/react'

import Navbar from '../../components/Navbar/Navbar'
import OrderCard from '../../components/OrderCard/OrderCard'
import AuthContext, { callAPI } from '../../context/AuthContext'

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

function Orders() {
    const { user } = useContext(AuthContext)
    const { orders, loading } = getOrders(user)

    return (
        <>
            <Navbar />
            <Container maxW='1200px' minH='70vh' mb={6} bg='red.100'>
                {orders.length > 0 ? orders.map((order, i) => (
                    <OrderCard key={i} order={order} loading={loading}/>
                ))
                : <Center h='100%'>No orders available 😢</Center>
                }
            </Container>
        </>
    )
}

export default Orders
