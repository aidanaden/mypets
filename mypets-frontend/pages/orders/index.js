import React from 'react'
import { Container } from '@chakra-ui/react'
import Navbar from '../../components/Navbar/Navbar'
import OrderCard from '../../components/OrderCard/OrderCard'

function Orders() {
    return (
        <>
        <Navbar />
        <Container maxW='1200px' mb={6}>
            <OrderCard />
            <OrderCard />
        </Container>
        </>
    )
}

export default Orders
