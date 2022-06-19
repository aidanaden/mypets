module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, populate) {
    return strapi.query("section").find(params, ["product", "product.variant"]);
  },
};
