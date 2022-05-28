+"use strict";
const { sanitizeEntity } = require("strapi-utils");
const { customAlphabet } = require("nanoid");
const finder = require("strapi-utils/lib/finder");
const stripe = require("stripe")(process.env.STRIPE_SK);
const nanoid = customAlphabet("0123456789ABCDEF", 10);
const stripe_free_shipping_id = "shr_1Js6BxJNGU0rJw40fwzNOwqw";
const stripe_paid_shipping_id = "shr_1L3jeoJNGU0rJw40MbuvTxkD";
const stripe_tax_id = "txr_1JcuChJNGU0rJw40EKv3YAEt";
const order_minimum_free_shipping = 45;

/**
 * Return dollar amount in cents
 * @param {number} number
 */
const fromDecimalToInt = (number) => parseInt(number * 100);

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Only returns orders that belongs to the logged in user
   * @param {any} ctx
   */
  async find(ctx) {
    const { user } = ctx.state; // get user

    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.order.search({
        ...ctx.query,
        user: user.id,
      });
    } else {
      entities = await strapi.services.order.find({
        ...ctx.query,
        user: user.id,
      });
    }

    for (let i = 0; i < entities.length; i++) {
      let entity = entities[i];
      for (let j = 0; j < entity.order_products.length; j++) {
        entity.order_products[j].variant =
          await strapi.services.variant.findOne({
            id: entity.order_products[j].variant,
          });
        // console.log('order object product value updated to: ', entity.order_products[j].variant)
      }
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.order })
    );
  },

  /**
   * Returns one order, as long as it belongs to the logged in user
   * @param {any} ctx
   */
  async findOne(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const entity = await strapi.services.order.findOne({ id, user: user.id });

    for (let i = 0; i < entity.order_products.length; i++) {
      entity.order_products[i].variant = await strapi.services.variant.findOne({
        id: entity.order_products[i].variant,
      });
    }

    return sanitizeEntity(entity, { model: strapi.models.order });
  },

  /**
   * Creates an order & sets up the stripe checkout session for frontend
   * @param {any} ctx
   */

  async create(ctx) {
    const cart = ctx.request.body;
    const { user } = ctx.state;
    const profile = await strapi.services.profile.findOne({ user: user.id });
    const BASE_URL = process.env.FRONTEND_URL || "https://mypets.sg";
    var userShippingAddress;

    console.log("base url: ", BASE_URL);

    if (!cart) {
      return ctx.throw(400, "Please specify a cart.");
    }

    const order_items = cart.order_products.map((orderProduct, i) => {
      var orderProductUnitPrice = 0;
      if (
        orderProduct.variant.discounted_price &&
        orderProduct.variant.discounted_price > 0
      ) {
        orderProductUnitPrice = fromDecimalToInt(
          orderProduct.variant.discounted_price
        );
      } else {
        orderProductUnitPrice = fromDecimalToInt(orderProduct.variant.price);
      }
      const data = {
        price_data: {
          currency: "sgd",
          product_data: {
            name: orderProduct.variant.product.name,
            images: [orderProduct.variant.product.image.url],
          },
          unit_amount: orderProductUnitPrice,
        },
        quantity: orderProduct.quantity,
        //tax_rates: [stripe_tax_id],
      };

      return data;
    });

    if (profile.address && profile.postal && profile.location) {
      userShippingAddress = {
        line1: profile.address,
        city: "Singapore",
        country: "SG",
        line2: profile.unit,
        postal_code: profile.postal,
        state: "Singapore",
      };
    }

    //const userCustomerShipping = {
    //    address: userShippingAddress ? userShippingAddress : "",
    //    name: profile.username ? profile.username : ""
    //}

    //const userCustomer = await stripe.customers.create({
    //    description: profile.username ? profile.username : "",
    //    email: user.email,
    //    address: userShippingAddress ? userShippingAddress : null,
    //    shipping: userShippingAddress ? userCustomerShipping : null,
    //})

    //console.log('created user customer object: ', userCustomer)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: user.email,
      //customer: userCustomer.id,
      mode: "payment",
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: BASE_URL,
      line_items: order_items,
      allow_promotion_codes: true,
      shipping_rates:
        cart.total_price >= order_minimum_free_shipping
          ? [stripe_free_shipping_id]
          : [stripe_paid_shipping_id],
      shipping_address_collection: {
        allowed_countries: ["SG"],
      },
    });

    return { id: session.id };
  },

  /**
   * Given a checkout session, verifies payment and create the order
   * @param {any} ctx
   */
  async confirm(ctx) {
    const { user } = ctx.state;
    const { checkout_session, cart } = ctx.request.body;
    const session = await stripe.checkout.sessions.retrieve(checkout_session);
    const userCart = await strapi.services.cart.findOne({ user: user.id });

    if (session.payment_status === "paid") {
      var orderDate = new Date();
      const orderDateDay = orderDate.getDay();
      const deliveryDays = 3;
      orderDate.setDate(orderDate.getDate() + deliveryDays);

      const sessionDiscountValue = session.total_details.amount_discount / 100;
      const sessionShippingValue = session.total_details.amount_shipping / 100;
      //const sessionTaxValue = session.total_details.amount_tax / 100
      const sessionTotal = session.amount_total / 100;
      const contributionAmount = 1;

      // create order
      const newOrder = await strapi.services.order.create({
        order_id: nanoid(),
        user: user.id,
        order_products: userCart.order_products,
        total_price: userCart.total_price,
        final_price: sessionTotal,
        contribution_amount: contributionAmount,
        discount_value: sessionDiscountValue,
        shipping_fee: sessionShippingValue,
        //tax_fee: sessionTaxValue,
        tax_fee: 0,
        status: "processing",
        checkout_session: session.payment_intent,
        order_date: new Date(),
        delivery_date: orderDate,
      });

      console.log("CREATING PAID ORDER: ", newOrder);

      // delete current cart
      const entity = await strapi.services.cart.delete({ id: userCart.id });
      console.log("DELETED CART: ", entity);

      return sanitizeEntity(newOrder, { model: strapi.models.order });
    } else {
      ctx.throw(400, "Payment failed. Please contact support.");
    }
  },
};
