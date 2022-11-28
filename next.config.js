/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SG_API_KEY: process.env.SG_API_KEY,
    TO_EMAIL: process.env.TO_EMAIL,
    FROM_EMAIL: process.env.FROM_EMAIL,
  },
};

module.exports = nextConfig;
