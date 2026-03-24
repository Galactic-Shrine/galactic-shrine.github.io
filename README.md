# Galactic-Shrine Standards Portal

Portail documentaire officiel des standards Galactic-Shrine, publié sur GitHub Pages et généré avec Eleventy.

## Objectif

Ce dépôt contient le site statique de documentation pour :

- les standards de documentation
- les conventions de codage
- les pages éditoriales du portail
- le changelog et la roadmap

## Stack technique

- Eleventy (11ty)
- HTML / CSS / JavaScript
- GitHub Pages
- GitHub Actions

## Domaine

Le portail est prévu pour être publié sur :

`docs.galactic-shrine.com`

## Développement local

### Prérequis

- Node.js 22
- npm 10 ou plus

### Installation

```bash
npm install
```

### Lancer le serveur local

```bash
npm run dev
```

### Build de production

```bash
npm run build
```

Le site généré est produit dans :

```text
_site/
```

## Structure du projet

```text
galactic-shrine.github.io/
├─ .github/
│  └─ workflows/
│     └─ deploy-pages.yml
├─ src/
│  ├─ _data/
│  ├─ _includes/
│  │  └─ layouts/
│  ├─ assets/
│  │  ├─ css/
│  │  ├─ js/
│  │  └─ img/
│  ├─ standards/
│  │  ├─ documentation/
│  │  └─ coding/
│  ├─ about/
│  ├─ changelog/
│  ├─ roadmap/
│  ├─ search/
│  ├─ 404.njk
│  ├─ index.njk
│  └─ CNAME
├─ .eleventy.js
├─ .gitignore
├─ .nvmrc
├─ package.json
├─ package-lock.json
└─ README.md
```

## Déploiement

Le déploiement est assuré automatiquement par GitHub Actions à chaque push sur `main`.

Le workflow :

- installe les dépendances
- génère le site Eleventy
- publie `_site` sur GitHub Pages

## Configuration GitHub Pages

Dans le dépôt GitHub :

- ouvrir `Settings`
- aller dans `Pages`
- choisir `Source: GitHub Actions`

## Notes importantes

- `package-lock.json` doit être versionné
- le dossier `_site/` ne doit pas être versionné
- le domaine personnalisé est porté par `src/CNAME`

## Convention mise en avant

Le portail rappelle la règle Galactic-Shrine suivante :

- propriétés en `PascalCase`
- paramètres en `PascalCase`
- méthodes en `PascalCase`

## License

This repository uses a dual-license model:

### Source code

The portal source code, templates, stylesheets, scripts, configuration files, and technical implementation files are licensed under the **MIT License**.  
See [`LICENSE`](./LICENSE).

### Documentation content

The documentation content, editorial pages, standards, roadmap, changelog texts, and related written materials are licensed under **CC BY-NC-SA 4.0**.  
See [`CONTENT-LICENSE.md`](./CONTENT-LICENSE.md).

### Brand assets

The **⋞Galactic-Shrine⋟** name, logos, visual identity, and other brand assets are **not** licensed for reuse unless prior written permission is granted.
