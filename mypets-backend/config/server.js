module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://backend.mypets.sg',
  proxy: true,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
