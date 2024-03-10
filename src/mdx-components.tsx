import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: "72px" }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: "50px" }}>{children}</h2>,
    ...components
  };
}
