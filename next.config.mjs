/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { transformerNotationDiff } from "@shikijs/transformers";

const rehypePrettyCodeOptions = {
  grid: true,
  theme: {
    dark: "one-dark-pro",
    light: "one-dark-pro"
  },
  defaultLang: {
    block: "plaintext",
    inline: "plaintext"
  },
  transformers: [transformerNotationDiff()]
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]]
  }
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

export default withMDX(nextConfig);
