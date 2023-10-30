/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    // Add the file-loader rule for PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "_next/static/files",
          outputPath: `${isServer ? "../" : ""}static/files/`,
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
