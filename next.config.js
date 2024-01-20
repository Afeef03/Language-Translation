/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  env: {
    OPENAI_KEY: process.env.OPENAI_KEY,
  },
};

module.exports = nextConfig;
