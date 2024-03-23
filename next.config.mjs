/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import { transformerNotationDiff } from "@shikijs/transformers";
import rehypeSlug from "rehype-slug";

const rehypePrettyCodeOptions = {
  grid: true,
  theme: "one-dark-pro",
  defaultLang: {
    block: "plaintext",
    inline: "plaintext"
  },
  transformers: [transformerNotationDiff()]
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [remarkParse, remarkRehype, [rehypePrettyCode, rehypePrettyCodeOptions], rehypeStringify, rehypeSlug]
  }
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  output: "standalone"
};

export default withMDX(nextConfig);
