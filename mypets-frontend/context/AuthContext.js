import { createContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import { API_URL } from '../utils/urls'

const AuthContext = createContext()

export const callAPI = async (path, method, body) => {
        
    console.log('fetching...')

    const response = await fetch(`${API_URL}${path}`, {
        method,
        headers: {
            "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body)
    })

    const data = await response.json()
    return data
}

export const AuthProvider = (props) => {

    const [user, setUser] = useState('')
    const router = useRouter()
    
    /**
     * Login with email & password
     * @param {string} email
     * @param {string} password 
     */
    const loginUser = async ({ email, password }) => {

        try {
            const response = await callAPI('/auth/local', 'POST', {
                identifier: email,
                password: password
            })

            if (!response.user) {
                console.error("Login failed. Please try again.")
            } else {
                console.log('successfully logged in ', response.user)
                setUser(response.user)
            }

        } catch (error) {
            console.error(error)
        }  
    }

    /**
     * Login user via 3rd party provider
     * @param {any} access_token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
     * @param {any} provider name of provider (facebook, google, etc)
     */
    const loginUserProvider = async (access_token, provider) => {

        console.log(access_token)
        console.log(provider)

        try {
            const response = await fetch(`${API_URL}/auth/${provider}/callback?access_token=${access_token}`, {
                headers: {
                    "content-type": "application/json",
                },
                credentials: "include"
            })
            const data = await response.json()

            if(!data.user) {
                console.error('Login failed. Please try again.')
            } else {
                console.log('Successfully logged in ', data.user)
                setUser(data.user)
            }
        } catch (err) {
            console.error(err)
        }
    }

    /**
     * Logs user out by setting user to null
     */
    const logoutUser = async () => {

    }

    const checkUserLoggedIn = async () => {
        const user = await callAPI('/users/me', 'GET')
        if (user.id) {
            setUser(user)
        } else {
            setUser(null)
        }
    }

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser, loginUserProvider }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext