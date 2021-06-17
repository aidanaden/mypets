import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import { callAPI } from '../context/AuthContext'
import AuthContext from '../context/AuthContext'

function success() {

    const { clearCart } = useContext(AuthContext)
    const router = useRouter()
    const confirmOrder = async (session_id) => {
        const body = {
            checkout_session: session_id
        }
        const data = await callAPI('/orders/confirm', 'POST', body)
        return data
    }

    useEffect(() => {
        confirmOrder(router.query.session_id).then((data) => {
            clearCart()
        }).then(() => {
            window.location.replace('/orders')
        })
    }, [router.query.session_id])

    return (
        <div>
            
        </div>
    )
}

export default success
