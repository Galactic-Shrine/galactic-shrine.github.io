const fs = require("node:fs/promises");
const path = require("node:path");
const projects = require("../src/_data/projects.json");
const githubProvider = require("./metadata-providers/github");

const outputPath = path.join(__dirname, "..", "src", "_data", "github-cache.json");

async function refreshRepository(label, source) {
  process.stdout.write(`GitHub metadata: ${label} ... `);
  try {
    const metadata = await githubProvider.getMetadata(source);
    console.log("ok");
    return metadata;
  } catch (error) {
    console.log(`conservé (${error.message})`);
    return null;
  }
}

async function main() {
  let cache = {};
  try {
    cache = JSON.parse(await fs.readFile(outputPath, "utf8"));
  } catch {
    cache = {};
  }

  for (const project of projects) {
    const current = cache[project.id] || {};

    if (project.repository?.provider === "github") {
      const metadata = await refreshRepository(project.name, project);
      if (metadata) cache[project.id] = { ...current, ...metadata };
    }

    if (project.implementations?.length) {
      const implementations = { ...(current.implementations || {}) };
      for (const implementation of project.implementations) {
        if (implementation.repository?.provider !== "github") continue;
        const source = {
          id: `${project.id}:${implementation.id}`,
          repository: implementation.repository
        };
        const metadata = await refreshRepository(`${project.name} / ${implementation.name}`, source);
        if (metadata) implementations[implementation.id] = metadata;
      }
      cache[project.id] = { ...(cache[project.id] || current), implementations };
    }
  }

  // Remove legacy entries from the former one-project-per-implementation model.
  for (const legacy of ["gsid-cpp", "gsid-csharp", "gsid-php", "gsid-unreal"]) delete cache[legacy];

  await fs.writeFile(outputPath, `${JSON.stringify(cache, null, 2)}
`, "utf8");
  console.log(`Métadonnées écrites dans ${path.relative(process.cwd(), outputPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
