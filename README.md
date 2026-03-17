# Galactic-Shrine Standards Portal — Premium Starter

Starter premium pour le dépôt GitHub Pages **`galactic-shrine.github.io`**.

## Contenu

- page d'accueil premium
- portail **Documentation Standards**
- portail **Coding Standards**
- pages HTML générées pour chaque standard
- fichiers Markdown sources conservés
- recherche globale côté client via `data/search-index.json`
- packs ZIP déjà intégrés dans `downloads/`

## Déploiement rapide

1. crée le dépôt `galactic-shrine.github.io`
2. copie le contenu de ce dossier à la racine
3. pousse sur la branche `main`
4. active GitHub Pages sur `main` + `/ (root)`

## Structure

```text
galactic-shrine.github.io/
├─ index.html
├─ 404.html
├─ .nojekyll
├─ robots.txt
├─ README.md
├─ CNAME.example
├─ assets/
│  ├─ css/site.css
│  ├─ js/site.js
│  └─ img/favicon.svg
├─ data/search-index.json
├─ downloads/
│  ├─ GalacticShrine-DocStandards-Harmonized-v1.2.0.zip
│  └─ GalacticShrine-CodingStandards-v1.0.0.zip
├─ standards/
│  ├─ documentation/
│  │  ├─ index.html
│  │  ├─ docs/*.html
│  │  └─ files/*.md
│  └─ coding/
│     ├─ index.html
│     ├─ docs/*.html
│     └─ files/*.md
└─ search/
   └─ index.html
```

## Convention déjà mise en avant

Le portail met en évidence ta règle Galactic-Shrine :

- **propriétés** en `PascalCase`
- **paramètres** en `PascalCase`
- **méthodes** en `PascalCase`

## Évolutions possibles

- ajout d’un changelog visuel
- pages “Guides” et “Examples”
- intégration d’un domaine personnalisé
- ajout d’une page “About Galactic-Shrine Standards”
- migration future vers un générateur statique si nécessaire
