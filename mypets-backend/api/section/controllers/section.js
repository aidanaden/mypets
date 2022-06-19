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
    return strapi.query("section").find(ctx.query, [
      {
        path: "products",
        populate: {
          path: "variant",
        },
      },
    ]);
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
