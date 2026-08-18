const projects = require("./projects.json");
const githubCache = require("./github-cache.json");

function normalizeMetadata(repository, cached = {}) {
  return {
    provider: repository?.provider || null,
    repositoryUrl: cached.repositoryUrl || null,
    defaultBranch: cached.defaultBranch || null,
    stars: cached.stars ?? null,
    forks: cached.forks ?? null,
    openIssues: cached.openIssues ?? null,
    pushedAt: cached.pushedAt || null,
    latestRelease: cached.latestRelease || null,
    refreshedAt: cached.refreshedAt || null
  };
}

module.exports = projects.reduce((catalog, project) => {
  const cached = githubCache[project.id] || {};
  const implementationCatalog = {};

  for (const implementation of project.implementations || []) {
    const implementationCache = cached.implementations?.[implementation.id] || {};
    implementationCatalog[implementation.id] = {
      ...implementation,
      metadata: normalizeMetadata(implementation.repository, implementationCache)
    };
  }

  catalog[project.id] = {
    ...project,
    implementationCatalog,
    metadata: normalizeMetadata(project.repository, cached)
  };
  return catalog;
}, {});
