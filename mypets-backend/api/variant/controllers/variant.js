'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    /**
     * Returns variant
     * @param {any} ctx 
     */
    async find(ctx) {

        let entities
        if (ctx.query._q) {
            entities = await strapi.services.variant.search({...ctx.query })
        } else {
            entities = await strapi.services.variant.find({...ctx.query })
        }

        for (let i=0; i < entities.length; i++) {
            entities[i].product = await strapi.services.product.findOne({ id: entities[i].product })
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.variant }))
    },
    
    /**
     * Returns product with matching product id
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params

        let entity = await strapi.services.variant.findOne({ id: id })
        entity.product = await strapi.services.product.findOne({ id: entity.product })

        return sanitizeEntity(entity, { model: strapi.models.variant })
    }
};
