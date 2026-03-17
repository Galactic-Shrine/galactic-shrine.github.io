# Galactic-Shrine Standards Portal — Portail premium

Portail GitHub Pages prêt pour **`galactic-shrine.github.io`** avec :
- home premium
- portail **Standards de documentation**
- portail **Conventions de codage**
- page **À propos**
- page **Changelog visuel**
- recherche globale côté client
- packs ZIP intégrés
- domaine personnalisé préconfiguré pour **`docs.galactic-shrine.com`**

## Contenu

- pages HTML lisibles pour chaque standard
- fichiers Markdown sources conservés
- `data/search-index.json` pour la recherche
- `downloads/` avec les packs ZIP
- `CNAME` + `sitemap.xml` + `robots.txt` pour préparer le domaine personnalisé
- workflow GitHub Pages via GitHub Actions

## Déploiement rapide

### Option recommandée : GitHub Actions

1. crée le dépôt `galactic-shrine.github.io`
2. copie le contenu de ce dossier à la racine
3. pousse sur la branche `main`
4. dans **Settings → Pages**, sélectionne **GitHub Actions**
5. configure ensuite le domaine personnalisé dans GitHub Pages et côté DNS si tu veux publier sur `docs.galactic-shrine.com`

## Structure

```text
galactic-shrine.github.io/
├─ index.html
├─ about/index.html
├─ changelog/index.html
├─ search/index.html
├─ 404.html
├─ .nojekyll
├─ robots.txt
├─ sitemap.xml
├─ CNAME
├─ CNAME.example
├─ README.md
├─ DEPLOYMENT.md
├─ .github/workflows/deploy-pages.yml
├─ assets/
│  ├─ css/site.css
│  ├─ js/site.js
│  └─ img/
├─ data/search-index.json
├─ downloads/
│  ├─ GalacticShrine-DocStandards-Harmonized-v1.2.0.zip
│  └─ GalacticShrine-CodingStandards-v1.0.0.zip
└─ standards/
   ├─ documentation/
   └─ coding/
```

## Convention déjà mise en avant

Le portail met en évidence la règle Galactic-Shrine suivante :

- **propriétés** en `PascalCase`
- **paramètres** en `PascalCase`
- **méthodes** en `PascalCase`

## Palette appliquée

Palette dérivée du site visible :
- `#22143D` — header / footer
- `#321E57` — fond principal
- `#6F42C1` — cartes / panneaux
- `#198754` — CTA / accents d’action

## Notes

- Le fichier `CNAME` est prérempli avec `docs.galactic-shrine.com`.
- Si ton domaine final est différent, remplace simplement le contenu du fichier `CNAME`.
- Le portail reste 100 % statique.


## Page Roadmap

Une page `/roadmap/` a été ajoutée pour compléter le changelog avec une vue des prochaines évolutions du portail.
