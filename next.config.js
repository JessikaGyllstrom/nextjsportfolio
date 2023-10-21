/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {

      remotePatterns: [
      {
        protocol: 'https',
					  hostname: 'cdn.sanity.io',
		  
        port: '',
	pathname: '**/images/5ivm84xc/**'      },
    ],
				    // dangerouslyAllowSVG: true

  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
	rules: [
	{	
		test: /\.(s[ac]ss|css)$/i,
		use: ['style-loader', 'css-loader']
	}
	],
  }
module.exports = nextConfig
