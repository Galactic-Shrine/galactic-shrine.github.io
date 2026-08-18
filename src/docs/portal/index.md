---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: galactic-shrine-docs
order: 10
title: Portail Galactic-Shrine
navTitle: Vue d’ensemble
summary: Fonctionnement du portail documentaire centralisé Galactic-Shrine.
permalink: /docs/portal/index.html
---
## Principe

La documentation des projets est maintenue **dans le portail documentaire**, et non dans les dépôts de code des projets.

Les dépôts GitHub peuvent être associés à une entrée du registre afin de récupérer des métadonnées comme la branche principale, la dernière activité ou la dernière release. Ces informations enrichissent la documentation sans en devenir la source.

## Sources de données

Le portail combine deux familles de données :

- les contenus Markdown locaux, versionnés avec le portail ;
- les métadonnées externes mises en cache avant le build.

## Publication

Eleventy transforme ces sources en pages HTML statiques, en index de recherche et en fichiers JSON sous `/api/`. Le site final reste donc compatible avec GitHub Pages et ne dépend d’aucun backend au runtime.
