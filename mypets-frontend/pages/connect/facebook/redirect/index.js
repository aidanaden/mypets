import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '../../../../context/AuthContext'

function index() {

    const { loginUserProvider } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        loginUserProvider(router.query.access_token, 'facebook')
        router.push('/')
    }, [router.query.access_token])

    return (
        <div>
            
        </div>
    )
}

export default index
