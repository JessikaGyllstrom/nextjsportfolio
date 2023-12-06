/** @type {import('next').NextConfig} */

const nextConfig = {
	//   experimental: {
  //   appDir: true,
  // },
	modules: [
    'virtual',
    'keyboard',
    'mousewheel',
    'navigation',
    'pagination',
    'scrollbar',
    'parallax',
    'zoom',
    'controller',
    'a11y',
    'history',
    'hash-navigation',
    'autoplay',
    'thumbs',
    'free-mode',
    'grid',
    'manipulation',
    'effect-fade',
    'effect-cube',
    'effect-flip',
    'effect-coverflow',
    'effect-creative',
    'effect-cards',
  ],
	images: {
      remotePatterns: [
      {
        protocol: 'https',
				hostname: 'cdn.sanity.io',
        port: '',
				pathname: '**/images/5ivm84xc/**'
			},
    ],
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
