"use strict";
module.exports = {
    async logout(ctx) {
        ctx.cookies.set("token", "", { 
            httpOnly: true, 
            secure: process.env.NODE_ENV == "production" ? true : false, 
            maxAge: 0,
            domain: process.env.NODE_ENV == "development" ? "localhost" : process.env.BACKEND_DOMAIN,
            sameSite: "None",
        });
        console.log(ctx.cookies.get("token"));
        ctx.send({
            authorized: true,
            message: "Successfully destroyed session",
        });
    },
};
