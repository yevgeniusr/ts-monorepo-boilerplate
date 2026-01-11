// @ts-check

/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ['@ts-monorepo-boilerplate/common'],

  /** This is currently required to make Next.js work with ESM style imports. */
  webpack(config) {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts'],
      '.jsx': ['.jsx', '.tsx']
    }
    return config
  },
  images: {
    domains: []
  }
}

export default nextConfig
