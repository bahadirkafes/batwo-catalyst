/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  // Hier können Sie weitere Konfigurationen hinzufügen
}

module.exports = nextConfig