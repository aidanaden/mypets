import { 
    useEffect, 
    useContext 
} from 'react'
import { useRouter } from 'next/router'
import {
    useToast
} from '@chakra-ui/react'

import AuthContext from '../../../../context/AuthContext'

function index() {
    const { loginUserProvider } = useContext(AuthContext)
    const router = useRouter()
    const toast = useToast()

    useEffect(() => {
        if (router.query.access_token) {
            loginUserProvider(router.query.access_token, 'google', toast)
            router.push('/')
        }
    }, [router.query.access_token])

    return (
        <div>
            
        </div>
    )
}

export default index
