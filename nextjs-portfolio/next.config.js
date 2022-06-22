/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'www.notion.so',
            'images.unsplash.com'
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.notion.com/:path*',
            },
        ]
    },
}

module.exports = nextConfig
