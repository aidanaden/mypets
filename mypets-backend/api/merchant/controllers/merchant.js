'use strict';
const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    /**
     * Return all merchants 
     * @param {any} ctx 
     */
    async find(ctx) {

        let entities
        if (ctx.query._q) {
            entities = await strapi.services.merchant.search({...ctx.query })
        } else {
            entities = await strapi.services.merchant.find({...ctx.query})
        }

        for (let i=0; i < entities.length; i++) {
            let entity = entities[i]
            for (let j=0; j < entity.products.length; j++) {
                entity.products[j].variant = await strapi.services.variant.findOne({ id: entity.products[j].variant })
                entity.products[j].category = await strapi.services.category.findOne({ id: entity.products[j].category })
            }
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.merchant }))
    },
    
    /**
     * Returns merchant with specified merchant id
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params

        let entity = await strapi.services.merchant.findOne({ id: id })

        for (let i=0; i < entity.products.length; i++) {
            entity.products[i].variant = await strapi.services.variant.findOne({ id: entity.products[i].variant })
            entity.products[i].category = await strapi.services.category.findOne({ id: entity.products[i].category })
        }

        return sanitizeEntity(entity, { model: strapi.models.merchant })
    },

};
