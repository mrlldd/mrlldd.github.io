/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: process.env.ENVIRONMENT === 'local' ? 'standalone' : 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.squarespace-cdn.com'
            }
        ],
        unoptimized: process.env.ENVIRONMENT !== 'local'
    },
};

export default nextConfig;
