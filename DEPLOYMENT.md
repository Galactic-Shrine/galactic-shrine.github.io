# Déploiement GitHub Pages

Ce starter est prêt pour un déploiement **automatique** via **GitHub Actions**.

## Workflow inclus

Fichier :
- `.github/workflows/deploy-pages.yml`

Déclencheurs :
- push sur `main`
- exécution manuelle `workflow_dispatch`

## Mise en ligne

1. crée le dépôt **`galactic-shrine.github.io`**
2. copie le contenu du starter à la racine du dépôt
3. pousse sur la branche **`main`**
4. dans GitHub : **Settings → Pages**
5. dans **Build and deployment → Source**, sélectionne **GitHub Actions**
6. laisse le workflow déployer automatiquement le site

## Domaine personnalisé

Si tu veux utiliser un domaine comme `docs.galactic-shrine.com` :

1. renomme `CNAME.example` en `CNAME`
2. mets ton domaine sur une seule ligne dans ce fichier
3. configure ensuite les DNS côté registrar / hébergeur

## Palette Galactic-Shrine appliquée

Le thème visuel de ce starter utilise maintenant une base GS :

- turquoise principal : `#00D5FF`
- rouge accent : `#E42217`
- fond spatial sombre / noir GS

> Note : le turquoise `#00D5FF` est explicitement présent dans ton standard SCSS comme couleur principale de marque.


Palette appliquée depuis le screenshot du site : `#22143D` (header/footer), `#321E57` (fond), `#6F42C1` (cartes/panneaux), `#198754` (CTA / accents d’action), avec un accent logo orange `#D4463B → #FF8A3D`.
