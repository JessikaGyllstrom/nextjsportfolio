/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
	rules: [
	{	
		test: /\.(s[ac]ss|css)$/i,
		use: ['style-loader', 'css-loader']
	}
	]
  }
  module.exports = {
	images: {

	  remotePatterns: [
		{
		
		  hostname: ['https://cdn.sanity.io', 'cdn.sanity.io/', '**.example.com', 'example.com',
		  
		],
		pathname: '**/images/5ivm84xc/**', 
		protocol: '',

		},
	  ],
	},
  }
module.exports = nextConfig
