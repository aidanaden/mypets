import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { callAPI } from '../context/AuthContext'

function success() {

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
            console.log("updated order to : ", data)
            window.location.replace('/orders')
        })
    }, [router.query.session_id])

    return (
        <div>
            
        </div>
    )
}

export default success
