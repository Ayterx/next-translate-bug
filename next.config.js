
const nextTranslate = require("next-translate-plugin");


/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: true,
})

module.exports = nextConfig
