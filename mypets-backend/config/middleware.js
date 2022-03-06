const env = require("strapi-utils/lib/env-helper");

module.exports = {
  //...
  gzip: {
    enabled: true,
    options: {
      br: false,
    },
  },

  settings: {
    cors: {
      enabled: true,
      // origin: ["http://localhost:3000", "http://localhost:1337", "https://mypets.com"],
      // headers: ["*"],
      origin: [
        "http://backend.mypets.sg:1337",
        "https://backend.mypets.sg",
        "https://mypets.sg",
        "https://www.mypets.sg",
      ],
    },
  },
};
