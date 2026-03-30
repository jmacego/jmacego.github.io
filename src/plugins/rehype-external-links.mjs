function visit(node, callback) {
  callback(node);

  if (!node || !Array.isArray(node.children)) {
    return;
  }

  for (const child of node.children) {
    visit(child, callback);
  }
}

function isExternalHttpLink(href) {
  return typeof href === "string" && /^https?:\/\//i.test(href);
}

export default function rehypeExternalLinks() {
  return function transformer(tree) {
    visit(tree, (node) => {
      if (node?.type !== "element" || node.tagName !== "a") {
        return;
      }

      const properties = node.properties ?? {};
      const href = properties.href;

      if (!isExternalHttpLink(href)) {
        return;
      }

      properties.target = "_blank";

      const relValues = new Set(
        String(properties.rel ?? "")
          .split(/\s+/)
          .filter(Boolean),
      );
      relValues.add("noopener");
      relValues.add("noreferrer");
      properties.rel = Array.from(relValues).join(" ");

      node.properties = properties;
    });
  };
}
