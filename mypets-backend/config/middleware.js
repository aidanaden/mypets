const env = require("strapi-utils/lib/env-helper");

module.exports = {
  //...
  settings: {
    cors: {
      enabled: true,
      // origin: ["http://localhost:3000", "http://localhost:1337", "https://mypets.com"],
      // headers: ["*"],
      origin: [
        "http://localhost:1337", 
        "http://localhost:3000"
      ],
    },
  },
}; 
