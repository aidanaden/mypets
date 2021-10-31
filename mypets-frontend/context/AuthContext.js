import { createContext, useState, useEffect, useReducer} from 'react'
import useSWR from 'swr'

import { useRouter } from 'next/router'
import { API_URL } from '../utils/urls'

const AuthContext = createContext()

/**
 * 
 * @param {string} path 
 * @param {string} method 
 * @param {object} body 
 */
export const callAPI = async (path, method, body) => {
    try {
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
    } catch (err) {
        console.error(err)
    }
}

export const AuthProvider = (props) => {

    const [user, setUser] = useState('')
    const [profile, setProfile] = useState(null)
    const [cart, setCart] = useState(null)
    const [cartLoading, setCartLoading] = useState(false)
    const router = useRouter()
    
    /**
     * Create profile for new user
     * @param {any} body 
     */
    const createProfile = async (body) => {
        try {
            const response = await callAPI('/profiles', 'POST', body)
            if (!response.username) {
                console.error('Failed to create profile: ', response)
            } else {
                setProfile(response)
            }
        } catch (err) {
            console.error(err)
        }
    }

    /**
     * Get profile of current user
     */
    const getProfile = async (body) => {
        try {
            const data = await callAPI('/profiles', 'GET')
            if (data.length == 0) {
                // console.log('profile doesn not exist: ', data)
                createProfile(body)
            }
            setProfile(data[0])
        } catch (err) {
            console.error(err)
        }
    }

    /**
     * Update profile of current user with body data
     * @param {any} body 
     */
    const updateProfile = async (body) => {
        if (profile) {
            try {
                const data = await callAPI(`/profiles/${profile.id}`, 'PUT', body)
                if (!data.username) {
                    // console.log('tried updating, profile does not exist: ', data)
                } else {
                    setProfile(data)
                }
            } catch (err) {
                console.error(err)
            }
        } else {
            createProfile(body)
        }
    }
    
    /**
     * Register with email & password
     * @param {string} email
     * @param {string} password 
     */
    const registerUser = async (email, password) => {
        try {
            const response = await callAPI('/auth/local/register', 'POST', {
                email: email,
                password: password
            })

            if (!response.user) {
                console.error('Registration failed. Please try again.')
            } else {
                setUser(response.user)
                getCart()
                return response
            }
        } catch (err) {
            console.error(err)
        }
    }


    /**
     * Login with email & password
     * @param {string} email
     * @param {string} password 
     */
    const loginUser = async ({ email, password }, toast) => {
        const loginFailToast = () => toast({
            title: 'Login failed. Please try again.',
            status: 'error',
            duration: 3000,
            isClosable: true,
        })

        const loginSuccessToast = () => toast({
            title: 'Login success.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        try {
            callAPI('/auth/local', 'POST', {
                identifier: email,
                password: password
            }).then(response => {
                if (!response.user) {
                    loginFailToast()
                    return 'fail'
                } else {
                    setUser(response.user)
                    getProfile({ username: response.user.username, user: response.user.id})
                    getCart()
                    loginSuccessToast()
                    return 'success'
                }
            })
        } catch (error) {
            return error
        }
    }

    /**
     * Login user via 3rd party provider
     * @param {any} access_token obtained by provider to make authorized requests to get user info from provider (username, email, etc)
     * @param {any} provider name of provider (facebook, google, etc)
     */
    const loginUserProvider = async (access_token, provider, toast) => {
        const loginFailToast = () => toast({
            title: 'Login failed. Please try again.',
            status: 'error',
            duration: 3000,
            isClosable: true,
        })

        const loginSuccessToast = () => toast({
            title: 'Login success.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        try {
            const response = await fetch(`${API_URL}/auth/${provider}/callback?access_token=${access_token}`, {
                headers: {
                    "content-type": "application/json",
                },
                credentials: "include"
            })
            const data = await response.json()

            console.log('data from provider: ', data)

            if(!data.user) {
                loginFailToast()
            } else {
                const username = data.user.username
                const id = data.user.id
                setUser(data.user)
                getCart()
                getProfile({ username: username, user: id })
                loginSuccessToast()
            }
        } catch (err) {
            console.error(err)
        }
    }

    const resetPasswordUser = async ({ email }, toast) => {
        const resetFailToast = () => toast({
            title: 'Invalid email, please try again.',
            status: 'error',
            duration: 3000,
            isClosable: true,
        })

        const resetSuccessToast = () => toast({
            title: 'Reset email sent.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        try {
            callAPI('/auth/forget-password', 'POST', {
                email: email,
                url: `${API_URL}/admin/plugins/users-permissions/auth/reset-password`
            }).then(response => {
                resetSuccessToast()
                return true
            })
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Logs user out by setting user to null
     */
    const logoutUser = async () => {
        const response = await callAPI('/logout', 'POST')
        if (response.authorized) {
            setUser(null)
        }
    }

    const checkUserLoggedIn = async () => {
        const user = await callAPI('/users/me', 'GET')
        if (user.id) {
            setUser(user)
            getCart()
            getProfile({ username: user.username, id: user.id })
        } else {
            setUser(null)
        }
    }

    /**
     * Update user password with new password 
     * @param {{password: string, newPassword: string, newPassword2: string}} body 
     */
    const updateUserPassword = async (body) => {
        try {
            const response = await callAPI('/password', 'POST', { ...body, id: user.id })
            if (!response.user) {
                console.error("Password reset failed. Please try again. ", response)
            } else {
                setUser(response.user)
            }
        } catch (error) {
            console.error(error)
        }  
    }

    const createOrderProduct = async (order_product) => {
        try {
            const data = await callAPI('/order-products', 'POST', {
                variant: order_product.variant,
                quantity: order_product.quantity,
                total_price: order_product.total_price,
                reviewed: false
            })
            return data
        } catch (err) {
            console.error(err)
        }
    }

    const updateOrderProduct = async (id, quantity, total_price) => {
        try {
            const data = await callAPI(`/order-products/${id}`, 'PUT', {
                quantity: quantity,
                total_price: total_price
            })
            return data
        } catch (err) {
            console.error(err)
        }
    }

    const deleteOrderProduct = async (id) => {
        try {
            const data = await callAPI(`/order-products/${id}`, 'DELETE')
            return await data
        } catch (err) {
            console.error(err)
        }
    }

    const getCart = async () => {
        setCartLoading(true)
        try {
            const data = await callAPI('/carts', 'GET')
            setCart(data[0])
            setCartLoading(false)
        } catch (err) {
            console.error(err)
        }
    }

    const updateCart = async (order_product) => {

        setCartLoading(true)

        if (cart) {
            // if cart exists, update cart with new order_product
            let order_products = cart.order_products
            const op = order_products.find(op => (op.variant.id == order_product.variant.id))
            let total_price = parseFloat(cart.total_price)

            if (op) {
                // if existing order product with same product variant 
                // exists, update existing order product with new qty, price 
                const op_index = order_products.indexOf(op)
                op.quantity += order_product.quantity
                op.total_price = parseFloat(op.total_price) + parseFloat(order_product.total_price)
                const updated_op = await updateOrderProduct(op.id, op.quantity, op.total_price)
                order_products[op_index] = updated_op
                total_price += parseFloat(order_product.total_price)

            } else {
                // else, create new order product 
                const created_order_product = await createOrderProduct(order_product)
                order_products.push(created_order_product)
                total_price += parseFloat(order_product.total_price)
            }
    
            const body = {
                order_products: order_products,
                total_price: total_price,
            }

            try {
                const data = await callAPI(`/carts/${cart.id}`, 'PUT', body)
                setCart(data)
                setCartLoading(false)
            } catch (err) {
                console.error(err)
            }

        } else {

            // if cart doesn't exist, create new cart + order_product
            const new_order_product = await createOrderProduct(order_product)
            try {
                const cart = {
                    order_products: [new_order_product],
                    total_price: new_order_product.total_price,
                    user: user.id,
                }
                const data = await callAPI('/carts', 'POST', cart)
                setCart(data)
                setCartLoading(false)
                if (!data.order_product.includes(new_order_product)) {
                    console.error('Failed to create new cart for user')
                }
            } catch (err) {
                console.error(err)
            }
        }
    }

    const deleteOrderProductFromCart = async (id) => {
        const deleted_order_product = await deleteOrderProduct(id)
        if (cart) {
            try {
                const body = {
                    total_price: parseFloat(cart.total_price) - parseFloat(deleted_order_product.total_price)
                }
                const data = await callAPI(`/carts/${cart.id}`, 'PUT', body)
                setCart(data)
            } catch (err) {
                console.error(err)
            }
        }
    }

    const clearCart = () => {
        setCart(null)
    }

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ 
            user, 
            cart, 
            clearCart,
            cartLoading,
            profile,
            updateProfile,
            updateCart, 
            deleteOrderProductFromCart, 
            loginUser, 
            registerUser, 
            logoutUser, 
            loginUserProvider,
            updateUserPassword
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext