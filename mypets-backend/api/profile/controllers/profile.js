'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils')

module.exports = {
    async createMe(ctx) {
        let entity;

        const user = ctx.state.user

        if (!user) {
            return ctx.badRequest(null, [{messages: [{ id: 'No authorization found'}]}])
        }

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx)
            entity = await strapi.services.profile.create(data, { files })
        } else {
            const data = ctx.request.body
            entity = await strapi.services.profile.create(data)
        }
        return sanitizeEntity(entity, { model: strapi.models.profile })
    },

    async findMe(ctx) {
        let entities

        const user = ctx.state.user

        if (!user) {
            return ctx.badRequest(null, [{messages: [{ id: 'No authorization found'}]}])
        }
        
        entities = await strapi.query('profile').find({ user: user.id })

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.profile }))
    },

    async updateMe(ctx) {
        let entity
        
        const user = ctx.state.user

        if (!user) {
            return ctx.badRequest(null, [{messages: [{ id: 'No authorization found'}]}])
        }

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx)
            entity = await strapi.services.profile.update({ user: user.id }, data, { files })   
        } else {
            const data = ctx.request.body
            entity = await strapi.services.profile.update({ user: user.id }, data)
        }

        return sanitizeEntity(entity, { model: strapi.models.profile })
    }
};
