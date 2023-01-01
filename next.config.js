/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
	images: {
		domains: ['cdn.sanity.io', 'cdn.sanity.io/images/5ivm84xc/production/'],
		loader: 'custom',
		remotePatterns: [
			{
			  protocol: 'https',
			  hostname: 'cdn.sanity.io',
			  port: '',
			  pathname: '/5ivm84xc/**',
			},
		  ],
	}
};
module.exports = nextConfig
