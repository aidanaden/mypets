'use strict';
const { sanitizeEntity } = require('strapi-utils')
const finder = require('strapi-utils/lib/finder')
const stripe = require('stripe')(process.env.STRIPE_SK)

/**
 * Return dollar amount in cents
 * @param {number} number 
 */
const fromDecimalToInt = (number) => parseInt(number * 100)

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    /**
     * Only returns orders that belongs to the logged in user
     * @param {any} ctx 
     */
    async find(ctx) {
        const { user } = ctx.state // get user

        let entities
        if (ctx.query._q) {
            entities = await strapi.services.order.search({...ctx.query, user: user.id})
        } else {
            entities = await strapi.services.order.find({...ctx.query, user: user.id})
        }

        for (let i=0; i < entities.length; i++) {

            let entity = entities[i]
            for (let j=0; j < entity.order_products.length; j++) {
                entity.order_products[j].variant = await strapi.services.variant.findOne({ id: entity.order_products[j].variant })
                // console.log('order object product value updated to: ', entity.order_products[j].variant)
            }
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order }))
    },

    /**
     * Returns one order, as long as it belongs to the logged in user
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params
        const { user } = ctx.state 

        const entity = await strapi.services.order.findOne({ id, user: user.id })

        for (let i=0; i < entity.order_products.length; i++) {
            entity.order_products[i].variant = await strapi.services.variant.findOne({ id: entity.order_products[i].variant })
        }

        return sanitizeEntity(entity, { model: strapi.models.order })
    },

    /**
     * Creates an order & sets up the stripe checkout session for frontend
     * @param {any} ctx 
     */

    async create(ctx) {
        const cart = ctx.request.body
        const { user } = ctx.state
        const BASE_URL = ctx.request.headers.origin || process.env.FRONT_END_URL

        if (!cart) {
            return ctx.throw(400, 'Please specify a cart.')
        }        

        const order_items = cart.order_products.map((orderProduct,i) => {
            const data = {
                price_data: {
                    currency: 'sgd',
                    product_data: {
                        name: orderProduct.variant.product.name,
                        images: [`${process.env.URL}${orderProduct.variant.product.image.url}`],
                    },
                    unit_amount: fromDecimalToInt(orderProduct.variant.price)
                },
                quantity: orderProduct.quantity
            }

            return data
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: user.email,
            mode: 'payment',
            success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: BASE_URL,
            line_items: order_items
        })

        var orderDate = new Date()
        const deliveryDays = 6
        orderDate.setDate(orderDate.getDate() + deliveryDays)

        // create order
        const newOrder = await strapi.services.order.create({
            user: user.id,
            order_products: cart.order_products,
            total_price: cart.total_price,
            status: 'unpaid',
            checkout_session: session.id,
            order_date: new Date(),
            delivery_date: orderDate
        })

        return { id: session.id }
    },

    /**
     * Given a checkout session, verifies payment and updates the order
     * @param {any} ctx 
     */
    async confirm(ctx) {
        const { user } = ctx.state
        const { checkout_session } = ctx.request.body
        const session = await stripe.checkout.sessions.retrieve(checkout_session)

        if (session.payment_status === 'paid') {
            const updateOrder = await strapi.services.order.update({ checkout_session }, { status: 'processing' })
            console.log('UPDATING ORDER with PROCESSING STATUS: ', updateOrder)

            // delete current cart
            const cart = await strapi.services.cart.findOne({ user: user.id })
            console.log('FOUND CART: ', cart)
            const cartId = cart.id
            console.log('CART ID: ', cartId)
            const entity = await strapi.services.cart.delete({ id: cartId });
            console.log('DELETED CART: ', entity)

            return sanitizeEntity(updateOrder, { model: strapi.models.order })
        } else {
            ctx.throw(400, "Payment failed. Please contact support.")
        }
    }
};
