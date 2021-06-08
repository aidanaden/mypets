'use strict';

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

        let entities
        if (ctx.query._q) {
            entities = await strapi.services.merchant_review.search({...ctx.query})
        } else {
            entities = await strapi.services.merchant_review.find({...ctx.query})
        }

        for (let i=0; i < entities.length; i++) {
            entities[i].profile = await strapi.services.profile.findOne({ id: entities[i].profile.id })
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.merchant_review }))
    },
    
    /**
     * Returns one cart, as long as it belongs to the logged in user
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params

        const entity = await strapi.services.merchant_review.findOne({ id })
        entity.profile = await strapi.services.profile.findOne({ id: entity.profile.id })

        return sanitizeEntity(entity, { model: strapi.models.merchant_review })
    },
};
