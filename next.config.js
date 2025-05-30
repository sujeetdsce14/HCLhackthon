/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        connectionString: "",
        secret: 'abcdefghijklmnopqrstuvwxyz123456789poiuytrewqeee'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'https://learningsmadeeasy.in/api' // production api
    },
    images: {
        unoptimized: true,
      }
}

module.exports = nextConfig


