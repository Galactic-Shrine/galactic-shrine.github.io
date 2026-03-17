# Galactic-Shrine HTML Documentation Standard

**Version:** 1.2.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets HTML / Twig / Templates Symfony / Pages Web / Composants UI / Fragments de vues / Emails HTML / Interfaces d’administration

---

## 1. Objectif

Ce standard définit la manière de documenter le code **HTML** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser la documentation des templates et structures HTML ;
- de conserver un style bilingue `[FR] / [EN]` ;
- de rester naturel pour le HTML ;
- de rendre les structures de page plus lisibles ;
- de documenter proprement les sections, composants, zones dynamiques et contraintes d’accessibilité.

---

## 2. Principes généraux

La documentation HTML Galactic-Shrine doit être :

- claire ;
- concise ;
- bilingue ;
- structurée ;
- utile pour la maintenance.

La documentation doit privilégier :

- les commentaires HTML natifs ;
- les descriptions courtes ;
- les indications structurelles ;
- les remarques d’accessibilité lorsque nécessaire ;
- la documentation des blocs importants, pas de chaque balise.

---

## 3. Format obligatoire des blocs

Toujours utiliser le format suivant :

```html
<!--
[FR] Représente la navigation principale du site.
[EN] Represents the main site navigation.
-->
```

Ce format constitue le standard officiel recommandé pour Galactic-Shrine HTML.

---

## 4. Convention bilingue

Chaque bloc descriptif doit suivre l’ordre suivant :

1. ligne française `[FR]`
2. ligne anglaise `[EN]`

Exemple :

```html
<!--
[FR] Conteneur principal de la page profil.
[EN] Main container of the profile page.
-->
```

---

## 5. Éléments autorisés

Éléments autorisés dans les commentaires HTML Galactic-Shrine :

- texte libre avec `[FR]` et `[EN]`
- `@role`
- `@accessibility`
- `@dependency`
- `@note`
- `@todo`
- `@see`

Éléments déconseillés :

- les balises XML de type `<summary>` ou `<param>` ;
- les commentaires trop longs ;
- les commentaires purement décoratifs ;
- les duplications d’informations déjà évidentes dans le balisage.

---

## 6. Structure recommandée d’un commentaire

Ordre recommandé :

1. description courte `[FR]`
2. description courte `[EN]`
3. détail complémentaire `[FR]` si nécessaire
4. détail complémentaire `[EN]` si nécessaire
5. tags utiles

Exemple :

```html
<!--
[FR] Section de navigation principale du tableau de bord.
[EN] Main navigation section of the dashboard.

@accessibility [FR] Utilise un libellé explicite pour les lecteurs d’écran.
@accessibility [EN] Uses an explicit label for screen readers.
-->
```

---

## 7. Standard par type d’élément

### 7.1 Fichier ou template

```html
<!--
[FR] Template principal de la page d’accueil.
[EN] Main template for the homepage.

[FR] Ce fichier structure le héros, les sections marketing et l’appel à l’action.
[EN] This file structures the hero, marketing sections, and call to action.
-->
```

### 7.2 Section principale

```html
<!--
[FR] Section présentant les dernières actualités du studio.
[EN] Section displaying the latest studio news.
-->
<section class="gs-news-section">
```

### 7.3 Composant réutilisable

```html
<!--
[FR] Carte de profil utilisateur réutilisable.
[EN] Reusable user profile card.

@role [FR] Affichage synthétique du compte.
@role [EN] Compact account display.
-->
<article class="gs-user-card">
```

### 7.4 Zone dynamique ou hook JavaScript

```html
<!--
[FR] Point d’injection pour la liste chargée dynamiquement.
[EN] Injection point for the dynamically loaded list.

@dependency [FR] Rempli par JavaScript après chargement des données.
@dependency [EN] Filled by JavaScript after data loading.
-->
<div id="news-feed" data-controller="news-feed"></div>
```

### 7.5 Bloc avec contrainte d’accessibilité

```html
<!--
[FR] Boîte de dialogue de confirmation de suppression.
[EN] Delete confirmation dialog.

@accessibility [FR] Doit conserver aria-modal, aria-labelledby et le focus initial.
@accessibility [EN] Must preserve aria-modal, aria-labelledby, and initial focus.
-->
<div class="gs-modal" role="dialog" aria-modal="true" aria-labelledby="delete-title">
```

### 7.6 Formulaire

```html
<!--
[FR] Formulaire de connexion utilisateur.
[EN] User login form.

@note [FR] Les messages d’erreur sont injectés côté serveur.
@note [EN] Error messages are injected server-side.
-->
<form method="post" action="/login">
```

---

## 8. Règles de style

### 8.1 Descriptions courtes

Toujours préférer une phrase simple et directe.

### 8.2 Ordre fixe

Toujours écrire `[FR]` avant `[EN]`.

### 8.3 Commenter les blocs, pas chaque balise

Documenter layouts, sections majeures, composants réutilisables, zones dynamiques, hooks JavaScript, formulaires métier et éléments sensibles pour l’accessibilité.

### 8.4 Règle HTML importante

Éviter la séquence `--` dans le contenu des commentaires, car elle peut rendre le commentaire invalide.

### 8.5 Pas de surdocumentation

Ne pas commenter l’évidence.

---

## 9. Types d’éléments à documenter en priorité

Documenter en priorité :

- templates principaux ;
- layouts ;
- partials ;
- composants réutilisables ;
- sections de page importantes ;
- zones pilotées par JavaScript ;
- blocs dépendants d’un contrôleur Symfony ou Twig ;
- éléments critiques pour l’accessibilité ;
- structures de formulaires métier ;
- fragments complexes conditionnels.

---

## 10. Exemple complet recommandé

```html
<!--
[FR] Template principal de la page profil utilisateur.
[EN] Main template for the user profile page.

[FR] Ce template structure l’en-tête, les statistiques et l’activité récente.
[EN] This template structures the header, statistics, and recent activity.
-->

<main class="gs-profile-page">
    <!--
    [FR] En-tête de profil avec avatar et informations principales.
    [EN] Profile header with avatar and primary information.
    -->
    <section class="gs-profile-header">
        <h1>{{ user.displayName }}</h1>
    </section>

    <!--
    [FR] Zone dynamique des activités récentes.
    [EN] Dynamic recent activity area.

    @dependency [FR] Alimentée via Turbo ou JavaScript.
    @dependency [EN] Populated via Turbo or JavaScript.
    -->
    <section id="recent-activity" data-controller="recent-activity">
    </section>
</main>
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine HTML :

- utiliser `<!-- ... -->` ;
- écrire d’abord `[FR]`, puis `[EN]` ;
- utiliser `@role`, `@accessibility`, `@dependency`, `@note` selon le besoin ;
- documenter les blocs structurants, pas chaque élément trivial ;
- garder un style court, propre et uniforme.

---

## 12. Résumé exécutable

À appliquer dans tous les projets HTML Galactic-Shrine :

- utiliser des commentaires HTML natifs ;
- écrire `[FR]` puis `[EN]` ;
- documenter templates, sections majeures, composants, hooks JS et zones sensibles ;
- éviter `--` dans le contenu des commentaires ;
- documenter ce qui compte, pas l’évidence.
