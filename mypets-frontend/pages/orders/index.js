import { 
    useContext, 
    useState, 
    useEffect 
} from 'react'
import {
    Stack,
    HStack,
    Text,
    Spacer,
    Center,
    Box
} from '@chakra-ui/react'

import AnnouncementBanner from '../../components/AnnouncementBanner/AnnouncementBanner'
import Navbar from '../../components/Navbar/Navbar'
import PageContainer from '../../components/PageContainer/PageContainer'
import BackBtn from '../../components/BackBtn/BackBtn'
import OrderCard from '../../components/OrderCard/OrderCard'
import AuthContext, { callAPI } from '../../context/AuthContext'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import MypetsBtn from '../../components/MypetsBtn/MypetsBtn'

const ContributionRow = () => {
    return (
        <HStack
            borderBottomWidth='1px'
            borderBottomColor='gray.400'
        >
            <Box>
                Order #1q2313312
            </Box>
            <Spacer />
            <Text>
                $2.70
            </Text>
        </HStack>
    )
}

const ContributionSection = () => {
    return (
        <Box>
            <SectionHeader>
                Contribution History
            </SectionHeader>
            <Box
                p={4}
                rounded='lg' 
                boxShadow='sm' 
                borderWidth='1px' 
            >
                <HStack>
                    <Box>
                        <Text>
                            Your total contribution
                        </Text>
                        <Text>
                            $8.00
                        </Text>
                    </Box>
                    <Box
                        rounded='lg'
                        p={5}
                    >
                        With every purchase, Mypets will make a donation of 5% to local pet communities.
                    </Box>
                </HStack>
                <Stack
                    direction='row'
                    spacing={3}
                >
                    <ContributionRow />
                </Stack>
                <MypetsBtn btnText='View all Contributions' />
            </Box>
        </Box>
    )
}

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

export default function Orders() {
    const { user } = useContext(AuthContext)
    const { orders, loading } = getOrders(user)

    return (
        <>
            <AnnouncementBanner />
            <Navbar />
            <PageContainer>
                <BackBtn variant='home'/>
                {orders.length > 0 && (
                    <ContributionSection />
                )}
                {orders.length > 0 ? orders.map((order, i) => (
                    <OrderCard key={i} order={order} loading={loading}/>
                )) : 
                <Center h='70vh'>
                    No orders available 😢
                </Center>}
            </PageContainer>
        </>
    )
}
