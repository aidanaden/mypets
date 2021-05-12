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
     * Only returns orders that belongs to the logged in magic user
     * @param {any} ctx 
     */
    async find(ctx) {
        const { user } = ctx.state // get magic user

        let entities
        if (ctx.query._q) {
            entities = await strapi.services.order.search({...ctx.query, user: user.id})
        } else {
            entities = await strapi.services.order.find({...ctx.query, user: user.id})
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
        return sanitizeEntity(entity, { model: strapi.models.order })
    },

    /**
     * Creates an order & sets up the stripe checkout session for frontend
     * @param {any} ctx 
     */

    async create(ctx) {
        const { product } = ctx.request.body

        if (!product) {
            return ctx.throw(400, 'Please specify a product.')
        }

        const realProduct = await strapi.services.product.findOne({ id: product.id })

        if (!realProduct) {
            return ctx.throw(400, 'No product with such id exists.')
        }

        const { user } = ctx.state

        const BASE_URL = ctx.request.headers.origin || process.env.FRONT_END_URL

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: user.email,
            mode: 'payment',
            success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: BASE_URL,
            line_items: [
                {
                    price_data: {
                        currency: 'sgd',
                        product_data: {
                            name: realProduct.name
                        },
                        unit_amount: fromDecimalToInt(realProduct.price)
                    },
                    quantity: 1
                }
            ]
        })

        // create order
        const newOrder = await strapi.services.order.create({
            user: user.id,
            product: realProduct.id,
            total: realProduct.price,
            status: 'unpaid',
            checkout_session: session.id
        })

        return { id: session.id }
    }
};
