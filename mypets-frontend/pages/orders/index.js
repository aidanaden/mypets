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
import { stringToDate } from '../../utils/urls'

const ContributionRow = ({ order }) => {
    return (
        <HStack
            borderBottomWidth='1px'
            borderBottomColor='gray.200'
            py={{ base: 2 }}
        >
            <Stack
                direction='column'
                spacing={1}
            >
                <Text
                    fontSize='lg'
                    textColor='mypets.400'
                >
                    {order.order_id}
                </Text>
                <Text>
                    {stringToDate(order.order_date)}
                </Text>
            </Stack>
            <Spacer />
            <Text
                as='h5'
                fontSize='2xl'
            >
                ${order.contribution_amount}
            </Text>
        </HStack>
    )
}

const ContributionSection = ({ orders }) => {
    var totalContribution = 0
    orders.map((order) => totalContribution += order.contribution_amount)

    return (
        <Box>
            <SectionHeader>
                Contribution History
            </SectionHeader>
            <Box
                p={{ base: 4, md: 8, xl: 12 }}
                rounded='lg' 
                boxShadow='sm' 
                borderWidth='1px' 
            >
                <HStack>
                    <Box>
                        <SectionHeader
                            textColor='mypets.400'
                        >
                            Your total contribution
                        </SectionHeader>
                        <Text
                            fontSize='lg'
                            textColor='mypets.400'
                        >
                            ${totalContribution}
                        </Text>
                    </Box>
                    <Spacer />
                    <Center
                        rounded='lg'
                        p={{ base: 5 }}
                        bg='gray.200'
                        noOfLines={2}
                    >
                        With every purchase, Mypets will make a donation of 5% to local pet communities.
                    </Center>
                </HStack>
                <Text
                    mt={{ base: 8 }}
                    as='h5'
                    fontSize={{ base: 'lg', md: 'xl' }}
                >
                    Recent Contributions
                </Text>
                <Stack
                    mt={{ base: 2 }}
                    direction='column'
                    spacing={{ base: 1 }}
                >
                    {orders.map((order, i) => (
                        <ContributionRow
                            key={i}
                            order={order}
                        />
                    ))}
                </Stack>
                <Box
                    textAlign='center'
                    mt={{ base: 8 }}
                >
                    <MypetsBtn btnText='View all Contributions' />
                </Box>
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
                    <ContributionSection orders={orders}/>
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
