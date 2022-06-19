"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Returns sections
   * @param {any} ctx
   */
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.section.search({ ...ctx.query });
    } else {
      entities = await strapi.services.section.find({ ...ctx.query });
    }
    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.section })
    );
  },

  /**
   * Returns section with matching section id
   * @param {any} ctx
   */
  async findOne(ctx) {
    const { id } = ctx.params;

    let entity = await strapi.services.section.findOne({ id: id });
    return sanitizeEntity(entity, { model: strapi.models.section });
  },
};
