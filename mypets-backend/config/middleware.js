const env = require("strapi-utils/lib/env-helper");

module.exports = {
  //...
  settings: {
    cors: {
      enabled: true,
      // origin: ["http://localhost:3000", "http://localhost:1337", "https://mypets.com"],
      // headers: ["*"],
      origin: [
        env('BACKEND_URL', 'http://localhost:1337'), 
        env('FRONTEND_URL', "http://localhost:3000")
      ],
    },
  },
}; 
