// DEV MYSQL DB SETTINGS
//module.exports = ({ env }) => ({
//  defaultConnection: 'default',
//  connections: {
//    default: {
//      connector: 'bookshelf',
//      settings: {
//        client: 'sqlite',
//        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//      },
//      options: {
//        useNullAsDefault: true,
//      },
//    },
//  },
//});

// PRODUCTION POSTGRES DB SETTINGS
 module.exports = ({ env }) => ({
   defaultConnection: 'default',
   connections: {
     default: {
       connector: 'bookshelf',
       settings: {
         client: 'postgres',
         host: env('DATABASE_HOST'),
         port: env.int('DATABASE_PORT', 5432),
         database: env('DATABASE_NAME', 'strapi'),
         username: env('DATABASE_USERNAME', 'postgres'),
         password: env('DATABASE_PASSWORD', '8PWcusQTJcXhPRA3$8^$mLi'),
         ssl: env('DATABASE_SSL', false)
       },
       options: {
         pool: {
           min: 2,
           max: 3,
         }
       }
     },
   },
 });
