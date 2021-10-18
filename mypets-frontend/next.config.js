const withTM = require('next-transpile-modules')(['react-markdown']);

module.exports = withTM({
  images: {
    domains: ['localhost', 'mypets-images.s3.ap-southeast-1.amazonaws.com']
  },
  webpack5: false,
  experimental: {
    esmExternals: true,
  },
})
// module.exports = {
//   images: {
//     domains: ['localhost', 'mypets-images.s3.ap-southeast-1.amazonaws.com']
//   }
// }