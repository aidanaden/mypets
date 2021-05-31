import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchAPI } from '../context/AuthContext'

const getOrder = (session_id) => {
        
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true)
            const body = {
                checkout_session: session_id
            }
            const data = await fetchAPI('/orders/confirm', 'POST', body)
            setOrder(data)
            setLoading(false)
        }

        fetchOrder()
    }, [session_id])

    return { order, loading }
}

function success() {

    const router = useRouter()
    const { session_id } = router.query
    const { order, loading } = getOrder(session_id)

    return (
        <div>
            
        </div>
    )
}

export default success
