module.exports = {
    settings: {
      cors: {
        enabled: true, // tried true and false
        origin: [
            "http://localhost:1337", 
            "http://localhost:3000"
        ],
      },
    },
  };