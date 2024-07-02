/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.radiance-aura.blog'],
    },
    i18n: {
        locales: ['vi', 'en'],
        defaultLocale: 'en',
        localeDetection: false,
    },
}

module.exports = nextConfig
