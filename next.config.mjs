import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const withMDX = createMDX({
  // Optional: enable `.mdx` extension support
  extension: /\.mdx?$/,
});

const nextConfig = {
  // Add the MDX extension to page routing
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withMDX(nextConfig);
