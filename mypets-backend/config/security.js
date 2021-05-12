module.exports = {
    settings: {
      cors: {
        enabled: true, // tried true and false
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