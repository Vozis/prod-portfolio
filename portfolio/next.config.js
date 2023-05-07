/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    APP_ENV: process.env.REACT_APP_ENV,
  },
};

module.exports = nextConfig;