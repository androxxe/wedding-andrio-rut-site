/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { transformerNotationDiff } from "@shikijs/transformers";
// import rehypeShiki from "rehype-shiki";

const rehypePrettyCodeOptions = {
  grid: true,
  theme: "one-dark-pro",
  defaultLang: {
    block: "plaintext",
    inline: "plaintext"
  },
  transformers: [transformerNotationDiff()]
};

const rehypeShikiOptions = {
  themes: {
    light: "vitesse-light",
    dark: "vitesse-dark"
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkGfm],
    remarkPlugins: [],
    rehypePlugins: [
      remarkParse,
      remarkRehype,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeStringify
      // [rehypeShiki, rehypeShikiOptions]
    ]
    // rehypePlugins: []
  }
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    appDir: true
  },
  reactStrictMode: true
};

export default withMDX(nextConfig);
