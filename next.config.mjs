/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ]
  },

  images: {
    remotePatterns: [
      { protocol: "http", hostname: "*.kakaocdn.net", port: "" },
      { protocol: "https", hostname: "phinf.pstatic.net", port: "" },
    ],
  },
}

export default nextConfig
