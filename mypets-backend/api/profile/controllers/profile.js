'use strict';
const { sanitizeEntity } = require('strapi-utils')
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
// const { parseMultipartData, sanitizeEntity } = require('strapi-utils')

module.exports = {

    /**
     * Only returns cart that belongs to the logged in user
     * @param {any} ctx 
     */
    async find(ctx) {

        const { user } = ctx.state

        let entities
        if (ctx.query._q) {
<<<<<<< HEAD
            entities = await strapi.services.profile.search({...ctx.query, user: user.id })
        } else {
            entities = await strapi.services.profile.find({...ctx.query, user: user.id })
=======
            entities = await strapi.services.profile.search({...ctx.query, user: user.id})
        } else {
            entities = await strapi.services.profile.find({...ctx.query, user: user.id})
>>>>>>> 63e2ffe9d079c0b4a1416b59c5268378f5a6999d
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.profile }))
    },
    
    /**
     * Returns one cart, as long as it belongs to the logged in user
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params
        const { user } = ctx.state

        const entity = await strapi.services.profile.findOne({ id, user: user.id })

        return sanitizeEntity(entity, { model: strapi.models.profile })
    },

    /**
     * Create profile
     * @param {any} ctx 
     */
    async create(ctx) {

        const { user } = ctx.state
        // console.log('creating profile with user id: ', user.id)
        const entity = await strapi.services.profile.create({...ctx.request.body, user: user.id })

        return sanitizeEntity(entity, { model: strapi.models.profile })
    },

    /**
     * Update profile
     * @param {any} ctx 
     */
    async update(ctx) {

        const { id } = ctx.params
        const { user } = ctx.state
        // console.log('updating profile with user id: ', user.id)
        const entity = await strapi.services.profile.update({ id }, {...ctx.request.body, user: user.id })

        return sanitizeEntity(entity, { model: strapi.models.profile })
    }
};
