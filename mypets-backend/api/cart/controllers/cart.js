'use strict';
const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    /**
     * Only returns cart that belongs to the logged in user
     * @param {any} ctx 
     */
    async find(ctx) {
        const { user } = ctx.state // get user

        let entities
        if (ctx.query._q) {
            entities = await strapi.services.cart.search({...ctx.query, user: user.id})
        } else {
            entities = await strapi.services.cart.find({...ctx.query, user: user.id})
        }

        for (let i=0; i < entities.length; i++) {

            let entity = entities[i]
            for (let j=0; j < entity.order_products.length; j++) {
                entity.order_products[j].variant = await strapi.services.variant.findOne({ id: entity.order_products[j].variant })
                entity.order_products[j].variant.product = await strapi.services.product.findOne({ id: entity.order_products[j].variant.product.id })
                // console.log('order object product value updated to: ', entity.order_products[j].variant.product)
            }
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.cart }))
    },
    
    /**
     * Returns one cart, as long as it belongs to the logged in user
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params
        const { user } = ctx.state 

        const entity = await strapi.services.cart.findOne({ id, user: user.id })

        for (let i=0; i < entity.order_products.length; i++) {
            entity.order_products[i].variant = await strapi.services.variant.findOne({ id: entity.order_products[i].variant })
            entity.order_products[i].variant.product = await strapi.services.product.findOne({ id: entity.order_products[i].variant.product.id })
        }

        return sanitizeEntity(entity, { model: strapi.models.cart })
    },

    /**
     * Create cart with product object
     * @param {any} ctx 
     */
    async create(ctx) {

        const entity = await strapi.services.cart.create(ctx.request.body)
        
        for (let i=0; i < entity.order_products.length; i++) {
            entity.order_products[i].variant = await strapi.services.variant.findOne({ id: entity.order_products[i].variant })
            entity.order_products[i].variant.product = await strapi.services.product.findOne({ id: entity.order_products[i].variant.product.id })
        }

        return sanitizeEntity(entity, { model: strapi.models.cart })
    },

    /**
     * Update cart with product object
     * @param {any} ctx 
     */
    async update(ctx) {

        const { id } = ctx.params
        const entity = await strapi.services.cart.update({ id }, ctx.request.body)

        for (let i=0; i < entity.order_products.length; i++) {
            entity.order_products[i].variant = await strapi.services.variant.findOne({ id: entity.order_products[i].variant })
            entity.order_products[i].variant.product = await strapi.services.product.findOne({ id: entity.order_products[i].variant.product.id })
        }

        return sanitizeEntity(entity, { model: strapi.models.cart })
    },

    /**
     * Delete cart after purchase
     * @param {any} ctx 
     */
    async delete(ctx) {
        const { id } = ctx.params;
    
        const entity = await strapi.services.cart.delete({ id });
        return sanitizeEntity(entity, { model: strapi.models.cart });
    }
};
