import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '../../../../context/AuthContext'

function index() {

    const { loginUserProvider } = useContext(AuthContext)
    const router = useRouter()

    // console.log('router access token: ', router.query.access_token)

    useEffect(() => {
        loginUserProvider(router.query.access_token, 'google')
        router.push('/')
    }, [router.query.access_token])

    return (
        <div>
            
        </div>
    )
}

export default index
