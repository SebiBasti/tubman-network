/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  i18n
};

// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,
//     nextConfig,
//     i18n,
//
//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           "fs": false,
//           "path": false,
//           "os": false,
//         }
//       }
//       return config
//     }
//   }
// }