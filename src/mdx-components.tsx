import type { MDXComponents } from "mdx/types";
import { BiSolidQuoteLeft } from "react-icons/bi";

const Pre = (props: React.PropsWithChildren<{}>) => {
  const { children, ...rest } = props;

  return (
    <div className="mt-1 mb-5 p-5 overflow-x-auto" {...rest}>
      <pre className=" flex flex-1 w-full">{children}</pre>
    </div>
  );
};

const H1 = (props: React.PropsWithChildren<{}>) => {
  const { children, ...rest } = props;

  return (
    <h1 className="text-2xl flex items-center justify-start font-medium mt-16 mb-5" {...rest}>
      <div className="w-6 text-red-500">#</div> {children}
    </h1>
  );
};

const H2 = (props: React.PropsWithChildren<{}>) => {
  const { children, ...rest } = props;

  return (
    <h2 className="text-xl flex items-center justify-start font-medium mt-16 mb-5" {...rest}>
      <div className="w-6 text-red-500">#</div> {children}
    </h2>
  );
};

const H3 = (props: React.PropsWithChildren<{}>) => {
  const { children, ...rest } = props;

  return (
    <h3 className="text-lg flex items-center justify-start font-medium mt-16 mb-5" {...rest}>
      <div className="w-6 text-red-500">#</div> {children}
    </h3>
  );
};

const Blockquote = (props: React.PropsWithChildren<{}>) => {
  const { children, ...rest } = props;

  return (
    <blockquote className="text-base mt-2 mb-5 p-5 bg-slate-800 rounded-sm relative" {...rest}>
      <BiSolidQuoteLeft size={36} className="absolute top-2 left-2 opacity-25" />
      {children}
    </blockquote>
  );
};

const P = (props: React.PropsWithChildren<{}>) => {
  return <p className="text-base leading-loose" {...props} />;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    pre: Pre,
    blockquote: Blockquote,
    ...components
  };
}
