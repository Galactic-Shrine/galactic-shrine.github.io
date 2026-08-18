---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: galactic-shrine-docs
order: 30
title: Métadonnées GitHub
navTitle: Métadonnées GitHub
summary: Mise à jour facultative des informations GitHub utilisées par le portail.
permalink: /docs/portal/metadata.html
---
## Rafraîchir les métadonnées

La documentation n’est jamais téléchargée depuis GitHub. Seules les métadonnées configurées dans le registre sont récupérées.

```bash
npm run refresh:metadata
```

Puis le portail peut être généré normalement :

```bash
npm run build
```

## Authentification facultative

Le script fonctionne avec l’API publique GitHub. Une variable d’environnement `GITHUB_TOKEN` peut être fournie pour augmenter les limites d’API ou accéder à des informations autorisées par le token.

Le token n’est jamais écrit dans les pages générées ni dans le cache.

## Tolérance aux erreurs

Si GitHub ne répond pas, le script conserve les métadonnées déjà présentes dans le cache pour le projet concerné. Le contenu documentaire local reste disponible indépendamment de GitHub.
