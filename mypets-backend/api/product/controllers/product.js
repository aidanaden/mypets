'use strict';
const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    /**
     * Returns products
     * @param {any} ctx 
     */
    async find(ctx) {

        let entities
        if (ctx.query._q) {
            entities = await strapi.services.product.search({...ctx.query })
        } else {
            entities = await strapi.services.product.find({...ctx.query })
        }
        // console.log(entities)
        for (let i=0; i < entities.length; i++) {
            // entities[i].variant = await strapi.services.variant.findOne({ id: entities[i].variant })
        }
        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.product }))
    },
    
    /**
     * Returns product with matching product id
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params

        let entity = await strapi.services.product.findOne({ id: id })
        // console.log(entity.merchant)
        return sanitizeEntity(entity, { model: strapi.models.product })
    },
};
