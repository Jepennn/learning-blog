import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 mt-6">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 mt-5">{children}</h3>
  ),
  h4: ({ children }) => <h4 className="text-xl md:text-2xl font-semibold mb-2 mt-4">{children}</h4>,
  p: ({ children }) => <p className="text-base leading-7 mb-4">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  li: ({ children }) => <li className="text-base leading-7">{children}</li>,
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>
  ),
  a: ({ children, href }) => (
    <a href={href} className="text-primary underline hover:text-primary/80">
      {children}
    </a>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
