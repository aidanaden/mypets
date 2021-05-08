import { createContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { magic } from './magic'
import { MAGIC_PUBLIC_KEY } from '../utils/urls'

const AuthContext = createContext()

export const AuthProvider = (props) => {

    const [user, setUser] = useState('')
    const router = useRouter()

    console.log(MAGIC_PUBLIC_KEY)
    
    /**
     * Adds email to user
     * @param  {string} email
     */
    const loginUser = async (email) => {

        try {
            await magic.auth.loginWithMagicLink({ email })
            setUser({ email })
            router.push('/')
        } catch (err) {
            setUser(null)
        }
    }

    /**
     * Logs user out by setting user to null
     */
    const logoutUser = async () => {

        try {
            await magic.user.logout()
            setUser(null)
            router.push('/')
        } catch (err) {
            console.error(err)
        }
    }

    const checkUserLoggedIn = async () => {
        try {

            console.log('checking if user is logged in')

            const isLoggedIn = await magic.user.isLoggedIn()

            console.log(isLoggedIn)

            if (isLoggedIn) {
                const { email } = await magic.user.getMetadata()
                console.log(`user is logged in with ${email}`)
                setUser({ email })
            }
        } catch (err) {
            console.log('error')
            console.error(err)
        }
    }

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext