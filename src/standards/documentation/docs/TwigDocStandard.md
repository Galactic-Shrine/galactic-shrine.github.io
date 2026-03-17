---
layout: layouts/standard.njk
title: Galactic-Shrine Twig Documentation Standard
description: Ce standard définit la manière de documenter le code **Twig** dans les projets Galactic-Shrine.
version: 1.2.0
scope: Projets Twig / Symfony / Templates Web / Layouts / Partials / Components / Emails / Interfaces d’administration / Fragments réutilisables
tags: ["Twig", "Documentation", "Projets Twig", "Symfony", "Templates Web", "Layouts"]
category: documentation
categoryLabel: Documentation
summary: Ce standard définit la manière de documenter le code **Twig** dans les projets Galactic-Shrine.
rawPath: /standards/documentation/files/TwigDocStandard.md
permalink: /standards/documentation/docs/TwigDocStandard.html
---

# Galactic-Shrine Twig Documentation Standard

**Version:** 1.2.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets Twig / Symfony / Templates Web / Layouts / Partials / Components / Emails / Interfaces d’administration / Fragments réutilisables

---

## 1. Objectif

Ce standard définit la manière de documenter le code **Twig** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser la documentation des templates Twig ;
- de conserver un style bilingue `[FR] / [EN]` ;
- de rester naturel pour Twig et son écosystème ;
- d’améliorer la lisibilité des layouts, blocks, includes, macros et fragments ;
- de documenter proprement les dépendances de contexte, points d’extension et contraintes d’intégration.

---

## 2. Principes généraux

La documentation Twig Galactic-Shrine doit être :

- claire ;
- concise ;
- bilingue ;
- structurée ;
- utile techniquement ;
- naturelle pour Twig.

La documentation doit privilégier :

- les commentaires Twig natifs ;
- des descriptions courtes ;
- des indications de contexte utiles ;
- la documentation des blocs importants et des dépendances réelles ;
- une approche simple, sans conventions artificielles non adaptées à Twig.

---

## 3. Format obligatoire des blocs

Toujours utiliser le format suivant :

```twig
{#
[FR] Représente la section principale du tableau de bord.
[EN] Represents the main dashboard section.
#}
```

Ce format constitue le standard officiel recommandé pour Galactic-Shrine Twig.

---

## 4. Convention bilingue

Chaque bloc descriptif doit suivre l’ordre suivant :

1. ligne française `[FR]`
2. ligne anglaise `[EN]`

Exemple :

```twig
{#
[FR] Conteneur principal de la page profil.
[EN] Main container of the profile page.
#}
```

---

## 5. Éléments autorisés

Éléments autorisés dans les commentaires Twig Galactic-Shrine :

- texte libre avec `[FR]` et `[EN]`
- `@context`
- `@block`
- `@extends`
- `@include`
- `@embed`
- `@macro`
- `@accessibility`
- `@dependency`
- `@note`
- `@todo`
- `@deprecated`
- `@see`

Éléments déconseillés :

- les balises XML de type `<summary>`, `<param>`, `<returns>` ;
- les commentaires trop longs ;
- les commentaires décoratifs sans valeur technique ;
- la duplication d’informations déjà triviales dans le code.

---

## 6. Structure recommandée d’un commentaire

Ordre recommandé :

1. description courte `[FR]`
2. description courte `[EN]`
3. détail complémentaire `[FR]` si nécessaire
4. détail complémentaire `[EN]` si nécessaire
5. tags techniques utiles

Exemple :

```twig
{#
[FR] Bloc d’en-tête du profil utilisateur.
[EN] User profile header block.

[FR] Ce bloc affiche le nom, l’avatar et les actions rapides.
[EN] This block displays the name, avatar, and quick actions.

@context [FR] Requiert `user`, `is_owner`.
@context [EN] Requires `user`, `is_owner`.
#}
```

---

## 7. Standard par type d’élément

### 7.1 Template principal

```twig
{#
[FR] Template principal de la page profil utilisateur.
[EN] Main template for the user profile page.

[FR] Ce template structure l’en-tête, les statistiques et l’activité récente.
[EN] This template structures the header, statistics, and recent activity.

@extends [FR] Hérite de `layout/base.html.twig`.
@extends [EN] Extends `layout/base.html.twig`.
#}
{% extends 'layout/base.html.twig' %}
```

### 7.2 Block Twig

```twig
{#
[FR] Bloc principal du contenu de la page profil.
[EN] Main content block of the profile page.
#}
{% block body %}
{% endblock %}
```

### 7.3 Include ou partial

```twig
{#
[FR] Fragment réutilisable d’informations de profil.
[EN] Reusable profile information partial.

@include [FR] Inclus depuis plusieurs pages compte.
@include [EN] Included from several account pages.
#}
```

### 7.4 Macro

```twig
{#
[FR] Macro de rendu d’un badge de statut.
[EN] Status badge rendering macro.

@macro [FR] Rend un badge selon un code de statut.
@macro [EN] Renders a badge according to a status code.
#}
```

### 7.5 Embed

```twig
{#
[FR] Carte de panneau réutilisable avec zones surchargeables.
[EN] Reusable panel card with overridable areas.

@embed [FR] Permet une spécialisation locale du contenu.
@embed [EN] Allows local specialization of the content.
#}
```

### 7.6 Zone dynamique ou dépendance JavaScript

```twig
{#
[FR] Zone dynamique de chargement des notifications.
[EN] Dynamic notifications loading area.

@dependency [FR] Alimentée par Turbo, Stimulus ou JavaScript.
@dependency [EN] Populated by Turbo, Stimulus, or JavaScript.
#}
<div id="notifications-feed" data-controller="notifications-feed"></div>
```

### 7.7 Formulaire Twig

```twig
{#
[FR] Formulaire de connexion utilisateur.
[EN] User login form.

@context [FR] Requiert `loginForm`.
@context [EN] Requires `loginForm`.
#}
{{ form_start(loginForm) }}
```

---

## 8. Règles de style

### 8.1 Descriptions courtes

Toujours préférer une phrase simple et directe.

### 8.2 Ordre fixe

Toujours écrire `[FR]` avant `[EN]`.

### 8.3 Commenter les blocs utiles, pas chaque balise

Documenter templates principaux, layouts, blocks importants, includes réutilisables, macros, embeds, zones dynamiques et fragments dépendants d’un contexte précis.

### 8.4 Cohérence avec Twig et Symfony

La documentation doit aider à identifier le layout parent, le contexte attendu, les dépendances Stimulus/Turbo/JS et les variables critiques fournies par le contrôleur.

### 8.5 Pas de surdocumentation

Ne pas commenter une interpolation triviale sans enjeu technique.

---

## 9. Types d’éléments à documenter en priorité

Documenter en priorité :

- templates principaux ;
- layouts ;
- blocks importants ;
- includes réutilisables ;
- macros ;
- embeds ;
- zones dynamiques ;
- formulaires métier ;
- parties sensibles pour l’accessibilité ;
- fragments dépendants d’un contexte précis.

---

## 10. Exemple complet recommandé

```twig
{#
[FR] Template principal de la page profil utilisateur.
[EN] Main template for the user profile page.

[FR] Ce template structure l’en-tête, les statistiques et l’activité récente.
[EN] This template structures the header, statistics, and recent activity.

@extends [FR] Hérite de `layout/base.html.twig`.
@extends [EN] Extends `layout/base.html.twig`.
#}
{% extends 'layout/base.html.twig' %}

{#
[FR] Bloc principal du contenu de la page profil.
[EN] Main content block of the profile page.

@context [FR] Requiert `user` et `recentActivities`.
@context [EN] Requires `user` and `recentActivities`.
#}
{% block body %}
    <main class="gs-profile-page">
        {#
        [FR] En-tête du profil avec avatar et métadonnées.
        [EN] Profile header with avatar and metadata.
        #}
        <section class="gs-profile-header">
            <h1>{{ user.displayName }}</h1>
        </section>
    </main>
{% endblock %}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine Twig :

- utiliser `{# ... #}` ;
- écrire d’abord `[FR]`, puis `[EN]` ;
- utiliser `@context`, `@block`, `@extends`, `@include`, `@embed`, `@macro`, `@accessibility`, `@dependency`, `@note` selon le besoin ;
- documenter les éléments structurants, pas chaque expression triviale ;
- garder un style court, propre et uniforme.

---

## 12. Résumé exécutable

À appliquer dans tous les projets Twig Galactic-Shrine :

- utiliser les commentaires Twig natifs ;
- écrire `[FR]` puis `[EN]` ;
- documenter templates, blocks, includes, macros, embeds et zones sensibles ;
- préciser le contexte attendu lorsque nécessaire ;
- indiquer les dépendances utiles ;
- documenter ce qui compte, pas l’évidence.
