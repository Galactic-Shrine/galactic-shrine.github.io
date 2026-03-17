# Galactic-Shrine Standards Portal — Portail premium

Starter premium pour le dépôt GitHub Pages **`galactic-shrine.github.io`**.

## Contenu

- page d'accueil premium
- portail **Standards de documentation**
- portail **Conventions de codage**
- pages HTML générées pour chaque standard
- fichiers Markdown sources conservés
- recherche globale côté client via `data/search-index.json`
- packs ZIP déjà intégrés dans `downloads/`

## Déploiement rapide

### Option recommandée : GitHub Actions

1. crée le dépôt `galactic-shrine.github.io`
2. copie le contenu de ce dossier à la racine
3. pousse sur la branche `main`
4. dans **Settings → Pages**, choisis **GitHub Actions**
5. laisse le workflow `.github/workflows/deploy-pages.yml` publier automatiquement le site

### Option simple : branche racine

Le starter reste aussi compatible avec une publication directe depuis `main` + `/ (root)`.

## Structure

```text
galactic-shrine.github.io/
├─ index.html
├─ 404.html
├─ .nojekyll
├─ robots.txt
├─ README.md
├─ CNAME.example
├─ DEPLOYMENT.md
├─ .github/
│  └─ workflows/
│     └─ deploy-pages.yml
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

## Palette Galactic-Shrine appliquée

- **turquoise principal** : `#00D5FF`
- **rouge accent** : `#E42217`
- **base sombre GS** : noirs / bleus spatiaux profonds

Le thème a été recoloré pour être plus proche de l'identité Galactic-Shrine.


Palette appliquée depuis le screenshot du site : `#22143D` (header/footer), `#321E57` (fond), `#6F42C1` (cartes/panneaux), `#198754` (CTA / accents d’action), avec un accent logo orange `#D4463B → #FF8A3D`.
