"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Return all sections
   * @param {any} ctx
   */
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.section.search({ ...ctx.query });
    } else {
      entities = await strapi.services.section.find({ ...ctx.query });
    }

    for (let i = 0; i < entities.length; i++) {
      let entity = entities[i];
      for (let j = 0; j < entity.products.length; j++) {
        entity.products[j] = await strapi.services.product.findOne({
          id: entity.products[j].id,
        });
      }
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.section })
    );
  },

  /**
   * Returns section with specified section id
   * @param {any} ctx
   */
  async findOne(ctx) {
    const { id } = ctx.params;
    let entity = await strapi.services.section.findOne({ id: id });

    for (let i = 0; i < entity.products.length; i++) {
      entity.products[i] = await strapi.services.product.findOne({
        id: entity.products[i].id,
      });
    }

    return sanitizeEntity(entity, { model: strapi.models.section });
  },
};
