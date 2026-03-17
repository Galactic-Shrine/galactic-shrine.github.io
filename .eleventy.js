module.exports = function(eleventyConfig) {
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