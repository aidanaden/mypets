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
        "http://localhost:3000", 
        "https://strange-impala-53.loca.lt",
        "https://bitter-turtle-84.loca.lt",
        "https://ad1672877683.ngrok.io"
      ],
    },
  },
}; 
