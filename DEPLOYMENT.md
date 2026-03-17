# Déploiement GitHub Pages

Ce portail est prêt pour un déploiement automatique via **GitHub Actions**.

## Workflow inclus

- `.github/workflows/deploy-pages.yml`

Déclencheurs :
- `push` sur `main`
- `workflow_dispatch`

## Mise en ligne

1. crée le dépôt **`galactic-shrine.github.io`**
2. copie le contenu du portail à la racine du dépôt
3. pousse sur **`main`**
4. dans GitHub : **Settings → Pages**
5. sélectionne **GitHub Actions** comme source de publication
6. attends le premier déploiement Pages réussi

## Domaine personnalisé préconfiguré

Le portail inclut déjà un fichier :

- `CNAME` → `docs.galactic-shrine.com`

### Si tu veux garder ce domaine

1. laisse `CNAME` tel quel
2. dans GitHub Pages, configure aussi le domaine **`docs.galactic-shrine.com`**
3. configure les enregistrements DNS côté registrar / hébergeur

### Si tu veux un autre domaine

1. remplace le contenu du fichier `CNAME`
2. configure le même domaine dans GitHub Pages
3. ajuste les DNS pour ce domaine

## Fichiers utiles

- `CNAME`
- `CNAME.example`
- `robots.txt`
- `sitemap.xml`

## Rappel important

Le fichier `CNAME` dans le dépôt prépare bien le portail, mais le domaine personnalisé doit aussi être configuré dans les paramètres GitHub Pages du dépôt.


## Page Roadmap

Une page `/roadmap/` a été ajoutée pour compléter le changelog avec une vue des prochaines évolutions du portail.
