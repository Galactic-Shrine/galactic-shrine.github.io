---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: galactic-shrine-docs
order: 20
title: Architecture documentaire
navTitle: Architecture
summary: Organisation des sources locales, des fournisseurs de métadonnées et du build Eleventy.
permalink: /docs/portal/architecture.html
---
## Registre des projets

Le fichier `src/_data/projects.json` déclare les projets visibles dans le hub documentaire. Chaque entrée possède un identifiant stable, un type, une description, une configuration documentaire et, si nécessaire, une association à un fournisseur externe.

## Documentation centralisée

Les pages restent dans `src/docs/`. Elles utilisent le layout générique `project-doc.njk`, qui fournit automatiquement le sommaire et la navigation entre les pages d’un même projet.

## Fournisseurs de métadonnées

Les fournisseurs vivent dans `scripts/metadata-providers/`. Le fournisseur GitHub actuel récupère uniquement les informations du dépôt et de sa dernière release.

Cette couche est extensible : d’autres fournisseurs pourront être ajoutés plus tard sans déplacer les fichiers de documentation.

## Cache

Les réponses externes sont écrites dans `src/_data/github-cache.json`. Le build Eleventy lit ensuite ce cache local. Une panne d’API ne bloque donc pas la génération du site si un cache précédent existe.
