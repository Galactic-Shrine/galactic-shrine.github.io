const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  const slugifyHeading = (value) => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const md = markdownIt({ html: true, linkify: true, typographer: false });
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const inline = tokens[idx + 1];
    const id = slugifyHeading(inline && inline.type === "inline" ? inline.content : "");
    if (id) token.attrSet("id", id);
    return self.renderToken(tokens, idx, options);
  };
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({
    "src/standards/documentation/files": "standards/documentation/files"
  });
  eleventyConfig.addPassthroughCopy({
    "src/standards/coding/files": "standards/coding/files"
  });

  eleventyConfig.addFilter("whereCategory", (items, category) =>
    (items || []).filter((item) => item.category === category)
  );

  eleventyConfig.addFilter("json", (value) =>
    JSON.stringify(value, null, 2)
  );

  eleventyConfig.addFilter("basename", (value) => {
    const normalized = String(value || "").replace(/\\/g, "/");
    return normalized.split("/").filter(Boolean).pop() || "";
  });

  eleventyConfig.addFilter("whereProject", (items, projectId) =>
    (items || []).filter((item) => item.data && item.data.projectId === projectId)
  );

  eleventyConfig.addFilter("sortByOrder", (items) =>
    [...(items || [])].sort((a, b) => Number(a.data?.order || 0) - Number(b.data?.order || 0))
  );

  eleventyConfig.addFilter("docsToSearch", (items) =>
    (items || []).map((item) => ({
      title: item.data?.title || "Documentation",
      summary: item.data?.summary || "",
      scope: [item.data?.projectId, item.data?.implementationId].filter(Boolean).join("/"),
      version: null,
      tags: ["Projet", item.data?.projectId, item.data?.implementationId].filter(Boolean),
      category: "project",
      categoryLabel: "Projet",
      htmlPath: item.url,
      rawPath: null
    }))
  );

  eleventyConfig.addFilter("extractHeadings", (html) => {
    const headings = [];
    const source = String(html || "");
    const re = /<h([2-4])\s+id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/h\1>/gi;
    let match;

    while ((match = re.exec(source)) !== null) {
      const text = match[3]
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, " ");

      headings.push({
        level: Number(match[1]),
        id: match[2],
        text
      });
    }

    return headings;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};