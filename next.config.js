/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['orgzdrav.loc', 'api.orgzdrav2019.ru']
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    outputStandalone: true
  }
}
