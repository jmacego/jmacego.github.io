export function migrateFrontmatterImageKeys(frontmatter) {
  let changed = false;

  const next = frontmatter
    .replace(/^(\s+)path:(\s.*)$/gm, (_, indent, value) => {
      changed = true;
      return `${indent}src:${value}`;
    })
    .replace(/^(\s+)credit_text:(\s.*)$/gm, (_, indent, value) => {
      changed = true;
      return `${indent}credit:${value}`;
    })
    .replace(/^(\s+)credit_link:(\s.*)$/gm, (_, indent, value) => {
      changed = true;
      return `${indent}creditUrl:${value}`;
    });

  return {
    changed,
    frontmatter: next,
  };
}

export function hasLegacyImageKeys(frontmatter) {
  return /(^\s+path:\s)|(^\s+credit_text:\s)|(^\s+credit_link:\s)/m.test(frontmatter);
}
