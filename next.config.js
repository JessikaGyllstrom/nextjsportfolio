/** @type {import('next').NextConfig} */

const nextConfig = {
  //   experimental: {
  //   appDir: true,
  // },
  modules: [
    "virtual",
    "keyboard",
    "mousewheel",
    "navigation",
    "pagination",
    "scrollbar",
    "parallax",
    "zoom",
    "controller",
    "a11y",
    "history",
    "hash-navigation",
    "autoplay",
    "thumbs",
    "free-mode",
    "grid",
    "manipulation",
    "effect-fade",
    "effect-cube",
    "effect-flip",
    "effect-coverflow",
    "effect-creative",
    "effect-cards",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**/images/5ivm84xc/**",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push(
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "static/models",
              publicPath: "/_next/static/models",
            },
          },
        ],
      }
    );
    return config;
  },
};
