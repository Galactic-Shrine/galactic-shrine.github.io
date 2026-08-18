const API_ROOT = "https://api.github.com";

async function request(path, token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "galactic-shrine-docs-metadata"
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_ROOT}${path}`, { headers });
  if (!response.ok) {
    const error = new Error(`GitHub API ${response.status}: ${path}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

async function getMetadata(project, options = {}) {
  const owner = project.repository?.owner;
  const repo = project.repository?.repo;
  if (!owner || !repo) throw new Error(`Dépôt GitHub incomplet pour ${project.id}`);

  const token = options.token || process.env.GITHUB_TOKEN || "";
  const repository = await request(`/repos/${owner}/${repo}`, token);

  let latestRelease = null;
  try {
    const release = await request(`/repos/${owner}/${repo}/releases/latest`, token);
    latestRelease = {
      tag: release.tag_name,
      name: release.name || release.tag_name,
      publishedAt: release.published_at,
      url: release.html_url
    };
  } catch (error) {
    if (error.status !== 404) throw error;
  }

  return {
    repositoryUrl: repository.html_url,
    defaultBranch: repository.default_branch,
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    openIssues: repository.open_issues_count,
    pushedAt: repository.pushed_at,
    latestRelease,
    refreshedAt: new Date().toISOString()
  };
}

module.exports = { getMetadata };
