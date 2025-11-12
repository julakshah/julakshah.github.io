const components = {
  wrapper: ({ children }) => (
    <main className="main">
      <article className="mdx-wrapper">{children}</article>
    </main>
  ),
};

export function useMDXComponents(componentsProp) {
  return { ...components, ...componentsProp };
}
