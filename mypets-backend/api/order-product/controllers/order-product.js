'use strict';
const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    // /**
    //  * get order product containing product object
    //  * @param {any} ctx 
    //  */
    // async find(ctx) {
    //     const { user } = ctx.state // get user

    //     let entities
    //     if (ctx.query._q) {
    //         entities = await strapi.services.order.search({...ctx.query, user: user.id})
    //     } else {
    //         entities = await strapi.services.order.find({...ctx.query, user: user.id})
    //     }

    //     for (let i=0; i < entities.length; i++) {

    //         let entity = entities[i]
    //         for (let j=0; j < entity.order_products.length; j++) {
    //             entity.order_products[j].product = await strapi.services.product.findOne({ id: entity.order_products[j].product })
    //             console.log('order object product value updated to: ', entity.order_products[j].product)
    //         }
    //     }

    //     return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order }))
    // }

};
