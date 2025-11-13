import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // GitHub Pages deployment configuration
  output: "export",
  images: {
    unoptimized: true,
  },

  // Turbopack configuration for MDX
  experimental: {
    turbo: {
      rules: {
        "*.mdx": {
          loaders: ["@mdx-js/loader"],
          as: "*.js",
        },
        "*.md": {
          loaders: ["raw-loader"],
          as: "*.js",
        },
      },
    },
  },

  // Webpack configuration (fallback when not using Turbopack)
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
