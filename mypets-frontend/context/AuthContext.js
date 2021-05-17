import { createContext, useState, useEffect, useReducer} from 'react'
import useSWR from 'swr'

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
    const [cart, setCart] = useState(null)
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
                getCart()
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
                getCart()
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
            getCart()

        } else {
            setUser(null)
        }
    }

    const createOrderProduct = async (order_product) => {
        try {
            const data = await callAPI('/order-products', 'POST', {
                product: order_product.product,
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

        console.log('fetching cart')
        try {
            const data = await callAPI('/carts', 'GET')
            console.log('cart found: ', data[0])
            setCart(data[0])
        } catch (err) {
            console.error(err)
        }
    }

    const updateCart = async (order_product) => {

        if (cart) {
            // if cart exists, update cart with new order_product
            let order_products = cart.order_products
            console.log('current order_products in cart: ', order_products)

            const op = order_products.find(op => (op.product.id == order_product.product.id))
            let total_price = parseFloat(cart.total_price)

            if (op) {
                // check if order product exists, if it does,   
                // increase quantity of existing order product
                console.log('found existing order product in cart: ', op)
                const op_index = order_products.indexOf(op)
                op.quantity += order_product.quantity
                op.total_price = parseFloat(op.total_price) + parseFloat(order_product.total_price)
                const updated_op = await updateOrderProduct(op.id, op.quantity, op.total_price)
                order_products[op_index] = updated_op
                total_price += parseFloat(order_product.total_price)

            } else {
                const created_order_product = await createOrderProduct(order_product)
                console.log('new order product does not exist, created: ', created_order_product)
                order_products.push(created_order_product)
                total_price += parseFloat(order_product.total_price)
            }
            
            console.log('updated order_products in cart: ', order_products)
            const body = {
                order_products: order_products,
                total_price: total_price,
            }

            console.log('cart total price: ', total_price)
            console.log('updating cart with: ', body)

            try {
                const data = await callAPI(`/carts/${cart.id}`, 'PUT', body)
                setCart(data)
                console.log('cart after calling update api: ', data)
            } catch (err) {
                console.error(err)
            }

        } else {

            // if cart doesn't exist, create new cart + order_product
            const new_order_product = await createOrderProduct(order_product)
            console.log('1) created new order product: ', new_order_product)

            try {
                console.log('1.5) current user value: ', user)
                const cart = {
                    order_products: [new_order_product],
                    total_price: new_order_product.total_price,
                    user: [user.id],
                }
                const data = await callAPI('/carts', 'POST', cart)
                console.log('2) created new cart: ', data, ' with user: ', user)
                setCart(data)

                if (data.order_product.includes(new_order_product)) {
                    console.log('created new cart for user with updated order_product')
                } else {
                    console.log('Failed to create new cart for user')
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

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ user, cart, updateCart, deleteOrderProductFromCart, loginUser, logoutUser, loginUserProvider }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext