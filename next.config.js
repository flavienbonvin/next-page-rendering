const { withPlausibleProxy } = require("next-plausible")

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
})

module.exports = nextConfig
