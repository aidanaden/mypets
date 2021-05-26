const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    index: async ctx => {

        const params = ctx.request.body
        const id = params.id 
        console.log('updating password of user: ', id)
        const user = await strapi.query('user', 'users-permissions').findOne({ id });
        const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(params.password, user.password)

        if (!validPassword) {
            return ctx.badRequest(
                null,
                formatError({
                    id: 'Auth.form.error.invalid',
                    message: 'Identifier or password invalid.',
                })
            )
        } else {
            const password = await strapi.plugins['users-permissions'].services.user.hashPassword({ password: params.password2 });
            // Update user password
            await strapi
                .query('user', 'users-permissions')
                .update({ id: user.id }, { resetPasswordToken: null, password });

            const token = strapi.plugins["users-permissions"].services.jwt.issue({
                id: user.id,
            });

            ctx.cookies.set("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production" ? true : false,
                maxAge: 1000 * 60 * 60 * 24 * 1, // 1 Day Age
                domain: process.env.NODE_ENV === "development" ? "localhost" : process.env.PRODUCTION_URL,
                // sameSite: "None",
            });

            ctx.send({
                status: 'Authenticated',
                user: sanitizeEntity(user.toJSON ? user.toJSON() : user, {
                    model: strapi.query('user', 'users-permissions').model,
                }),
            });

        }

        
    }
 }