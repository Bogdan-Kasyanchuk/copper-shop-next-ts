const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
    prependData: `@import "main.scss";`,
  },
};

module.exports = nextConfig;
