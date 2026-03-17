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

## Palette du site appliquée

Le thème visuel de ce starter utilise maintenant la palette du site :

- violet principal : `#6F42C1`
- violet secondaire : `#6610F2`
- lilas clair : `#D5C8ED`
- prune sombre : `#22143D`

> Note : cette version reprend la palette de ton thème Bootstrap public du projet Symfony-Forum.
