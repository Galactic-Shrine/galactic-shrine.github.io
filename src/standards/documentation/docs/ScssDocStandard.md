---
layout: layouts/standard.njk
title: Galactic-Shrine SCSS Documentation Standard
description: Ce standard définit la manière de documenter le code **SCSS** dans les projets Galactic-Shrine.
version: 1.2.0
scope: Projets SCSS / CSS Frameworks / UI Kits / Design Systems / Applications Web / Interfaces d’administration / Sites vitrine / Produits front-end
tags: ["SCSS", "Documentation", "Projets SCSS", "CSS Frameworks", "UI Kits", "Design Systems"]
category: documentation
categoryLabel: Documentation
summary: Ce standard définit la manière de documenter le code **SCSS** dans les projets Galactic-Shrine.
rawPath: /standards/documentation/files/ScssDocStandard.md
permalink: /standards/documentation/docs/ScssDocStandard.html
---

# Galactic-Shrine SCSS Documentation Standard

**Version:** 1.2.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets SCSS / CSS Frameworks / UI Kits / Design Systems / Applications Web / Interfaces d’administration / Sites vitrine / Produits front-end

---

## 1. Objectif

Ce standard définit la manière de documenter le code **SCSS** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser la documentation du code SCSS ;
- de conserver un style bilingue `[FR] / [EN]` ;
- de rester cohérent avec la convention documentaire Galactic-Shrine ;
- de conserver un format visuel homogène ;
- de documenter proprement les variables, mixins, fonctions, placeholders, composants et sections structurantes.

---

## 2. Principes généraux

La documentation SCSS Galactic-Shrine doit être :

- claire ;
- concise ;
- bilingue ;
- naturelle pour SCSS ;
- utile techniquement.

La documentation doit privilégier :

- les commentaires de bloc natifs ;
- des descriptions courtes ;
- des tags simples et lisibles ;
- un usage pertinent, sans surdocumentation.

---

## 3. Format obligatoire des blocs

Toujours utiliser le format suivant :

```scss
/**
 * [FR] Applique le style principal du bouton.
 * [EN] Applies the main button style.
 */
```

Ce format constitue le standard officiel recommandé pour Galactic-Shrine SCSS.

---

## 4. Convention bilingue

Chaque bloc descriptif doit suivre l’ordre suivant :

1. ligne française `[FR]`
2. ligne anglaise `[EN]`

Exemple :

```scss
/**
 * [FR] Définit la couleur principale de la marque.
 * [EN] Defines the primary brand color.
 */
```

---

## 5. Éléments autorisés

Éléments autorisés dans les commentaires SCSS Galactic-Shrine :

- texte libre avec `[FR]` et `[EN]`
- `@param`
- `@return`
- `@example`
- `@deprecated`
- `@requires`
- `@see`
- `@note`

Éléments déconseillés :

- les balises XML de type `<summary>`, `<param>`, `<returns>` ;
- les commentaires trop verbeux ;
- les descriptions purement décoratives sans valeur technique.

---

## 6. Structure recommandée d’un commentaire

Ordre recommandé :

1. description courte `[FR]`
2. description courte `[EN]`
3. détail complémentaire `[FR]` si nécessaire
4. détail complémentaire `[EN]` si nécessaire
5. tags techniques utiles

Exemple :

```scss
/**
 * [FR] Génère un style de bouton réutilisable.
 * [EN] Generates a reusable button style.
 *
 * [FR] Ce mixin centralise les couleurs et les états visuels principaux.
 * [EN] This mixin centralizes colors and main visual states.
 *
 * @param {Color} $background-color [FR] Couleur de fond.
 *                                  [EN] Background color.
 * @param {Color} $text-color [FR] Couleur du texte.
 *                            [EN] Text color.
 */
```

---

## 7. Standard par type d’élément

### 7.1 Fichier ou module SCSS

```scss
/**
 * [FR] Définit les styles du composant bouton.
 * [EN] Defines the button component styles.
 *
 * [FR] Ce fichier contient les variantes, tailles et états interactifs.
 * [EN] This file contains variants, sizes, and interactive states.
 */
```

### 7.2 Variable globale ou token

```scss
/**
 * [FR] Couleur principale de la marque.
 * [EN] Primary brand color.
 */
$gs-color-primary: #00d5ff !default;
```

### 7.3 Mixin

```scss
/**
 * [FR] Applique une variante visuelle de bouton.
 * [EN] Applies a visual button variant.
 *
 * @param {Color} $background-color [FR] Couleur de fond du bouton.
 *                                  [EN] Button background color.
 * @param {Color} $text-color [FR] Couleur du texte.
 *                            [EN] Text color.
 * @param {Color|null} $border-color [FR] Couleur de bordure optionnelle.
 *                                   [EN] Optional border color.
 */
@mixin button-variant($background-color, $text-color, $border-color: null) {
    background-color: $background-color;
    color: $text-color;
}
```

### 7.4 Fonction SCSS

```scss
/**
 * [FR] Convertit une valeur en rem selon la base configurée.
 * [EN] Converts a value to rem based on the configured root size.
 *
 * @param {Number} $pixels [FR] Valeur en pixels.
 *                         [EN] Value in pixels.
 * @return {Number} [FR] Valeur convertie en rem.
 *                  [EN] Value converted to rem.
 */
@function to-rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
```

### 7.5 Placeholder

```scss
/**
 * [FR] Définit le style de base partagé par les cartes interactives.
 * [EN] Defines the shared base style for interactive cards.
 */
%card-base {
    border-radius: 1rem;
}
```

### 7.6 Bloc composant

```scss
/**
 * [FR] Composant principal de carte utilisateur.
 * [EN] Main user card component.
 */
.gs-user-card {
    display: flex;
}
```

### 7.7 Utilitaire ou helper

```scss
/**
 * [FR] Utilitaire de troncature sur une ligne.
 * [EN] Single-line truncation utility.
 */
.u-text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

---

## 8. Règles de style

### 8.1 Descriptions courtes

Toujours préférer une phrase simple et directe.

### 8.2 Ordre fixe

Toujours écrire `[FR]` avant `[EN]`.

### 8.3 `@param` et `@return`

Utiliser les tags techniques seulement lorsqu’ils apportent une vraie valeur, notamment pour les mixins, fonctions et helpers réutilisables.

### 8.4 Commentaires `//`

Les commentaires `//` peuvent être utilisés pour des notes locales temporaires, mais ne constituent pas la documentation officielle.

### 8.5 Pas de surdocumentation

Ne pas commenter chaque règle CSS évidente.

---

## 9. Types d’éléments à documenter en priorité

Documenter en priorité :

- modules SCSS ;
- tokens globaux ;
- variables sémantiques ;
- mixins ;
- fonctions ;
- placeholders ;
- composants réutilisables ;
- utilitaires structurants ;
- blocs complexes ;
- styles exposés comme API front-end.

---

## 10. Exemple complet recommandé

```scss
/**
 * [FR] Définit les styles du composant bouton.
 * [EN] Defines the button component styles.
 *
 * [FR] Ce fichier centralise les styles communs, variantes et tailles.
 * [EN] This file centralizes shared styles, variants, and sizes.
 */

$gs-button-radius: 0.75rem !default;

/**
 * [FR] Applique une variante visuelle de bouton.
 * [EN] Applies a visual button variant.
 *
 * @param {Color} $background-color [FR] Couleur de fond du bouton.
 *                                  [EN] Button background color.
 * @param {Color} $text-color [FR] Couleur du texte.
 *                            [EN] Text color.
 *
 * @example [FR] @include button-variant(#111, #fff);
 *          [EN] @include button-variant(#111, #fff);
 */
@mixin button-variant($background-color, $text-color) {
    background-color: $background-color;
    color: $text-color;
    border-radius: $gs-button-radius;
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine SCSS :

- utiliser `/** ... */` ;
- écrire d’abord `[FR]`, puis `[EN]` ;
- utiliser `@param`, `@return`, `@example`, `@deprecated`, `@note` selon le besoin ;
- documenter les éléments structurants, pas chaque propriété triviale ;
- garder un style court, propre et uniforme.

---

## 12. Résumé exécutable

À appliquer dans tous les projets SCSS Galactic-Shrine :

- utiliser des commentaires de bloc officiels ;
- écrire `[FR]` puis `[EN]` ;
- documenter variables exposées, mixins, fonctions, placeholders et composants ;
- réserver `//` aux notes internes non officielles ;
- documenter ce qui compte, pas l’évidence.
