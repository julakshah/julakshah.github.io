import createMDX from "@next/mdx";
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"], // to include markdown
  output: "export", // <=== enables static exports reactStrictMode: true,
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/, // process md files with MDX
});

export default withMDX(nextConfig);
