import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	env: {
		APP_ENV: process.env.NEXT_APP_ENV,
		SITE_URL: process.env.NEXT_APP_URL,
		DOMAIN: process.env.APP_DOMAIN,
		SERVER_URL: process.env.NEST_APP_URL,
		NOTICE_URL: process.env.NOTICE_URL,
		GRAPHQL_URL: process.env.GRAPHQL_URL,
	},
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	async rewrites() {
		return [
			{
				source: '/storage/:path*',
				destination: '/images/:path*',
			},
			{
				source: '/sounds/:path*',
				destination: '/audio/case/:path*',
			},
		]
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				hostname: 'avatars.steamstatic.com',
			},
			{
				hostname: 'community.cloudflare.steamstatic.com',
			},
			{
				hostname: 'storage.kupidrop.ru',
			},
		],
	},
}

export default nextConfig
