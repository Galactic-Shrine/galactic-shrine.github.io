---
layout: layouts/standard.njk
title: Galactic-Shrine JavaScript Documentation Standard
description: Ce standard définit la manière de documenter le code **JavaScript** dans les projets Galactic-Shrine.
version: 1.2.0
scope: Projets JavaScript / ES Modules / Node.js / Browser / Front-end / Back-end / Scripts / Tooling / Components / Utilities
tags: ["JavaScript", "Documentation", "Projets JavaScript", "ES Modules", "Node.js", "Browser"]
category: documentation
categoryLabel: Documentation
summary: Ce standard définit la manière de documenter le code **JavaScript** dans les projets Galactic-Shrine.
rawPath: /standards/documentation/files/JsDocStandard.md
permalink: /standards/documentation/docs/JsDocStandard.html
---

# Galactic-Shrine JavaScript Documentation Standard

**Version:** 1.2.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets JavaScript / ES Modules / Node.js / Browser / Front-end / Back-end / Scripts / Tooling / Components / Utilities

---

## 1. Objectif

Ce standard définit la manière de documenter le code **JavaScript** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser la documentation du code JavaScript ;
- de conserver un style bilingue `[FR] / [EN]` ;
- de rester naturel pour JavaScript et son écosystème ;
- de documenter proprement les modules, fonctions, classes, méthodes et constantes ;
- de garder une documentation lisible et cohérente avec JSDoc.

---

## 2. Principes généraux

La documentation JavaScript Galactic-Shrine doit être :

- claire ;
- concise ;
- bilingue ;
- utile techniquement ;
- naturelle pour JavaScript.

La documentation doit privilégier :

- les commentaires de bloc de type JSDoc ;
- les descriptions courtes ;
- les éléments publics et réutilisables ;
- un usage cohérent des tags techniques ;
- une approche simple, sans surdocumentation.

---

## 3. Format obligatoire des blocs

Toujours utiliser le format suivant :

```js
/**
 * [FR] Retourne le nom complet de l’utilisateur.
 * [EN] Returns the user's full name.
 */
```

Ce format constitue le standard officiel recommandé pour Galactic-Shrine JavaScript.

---

## 4. Convention bilingue

Chaque bloc descriptif doit suivre l’ordre suivant :

1. ligne française `[FR]`
2. ligne anglaise `[EN]`

Exemple :

```js
/**
 * [FR] Représente le service de gestion des sessions.
 * [EN] Represents the session management service.
 */
```

---

## 5. Éléments autorisés

Éléments autorisés dans les commentaires JavaScript Galactic-Shrine :

- texte libre avec `[FR]` et `[EN]`
- `@param`
- `@returns`
- `@throws`
- `@type`
- `@typedef`
- `@property`
- `@example`
- `@deprecated`
- `@async`
- `@see`
- `@note`

Éléments déconseillés :

- les balises XML de type `<summary>`, `<param>`, `<returns>` ;
- les commentaires trop longs ;
- les descriptions sans valeur technique ;
- les commentaires redondants avec le nom de l’élément sans contexte supplémentaire.

---

## 6. Structure recommandée d’un commentaire

Ordre recommandé :

1. description courte `[FR]`
2. description courte `[EN]`
3. détail complémentaire `[FR]` si nécessaire
4. détail complémentaire `[EN]` si nécessaire
5. tags techniques utiles

Exemple :

```js
/**
 * [FR] Construit l’URL canonique d’un utilisateur.
 * [EN] Builds the canonical URL for a user.
 *
 * [FR] La fonction normalise le slug et garantit un format stable.
 * [EN] The function normalizes the slug and guarantees a stable format.
 *
 * @param {string} username [FR] Nom d’utilisateur brut.
 *                          [EN] Raw username.
 * @returns {string} [FR] URL utilisateur normalisée.
 *                   [EN] Normalized user URL.
 */
```

---

## 7. Standard par type d’élément

### 7.1 Fichier ou module JavaScript

```js
/**
 * [FR] Fournit les helpers de normalisation d’URL.
 * [EN] Provides URL normalization helpers.
 *
 * [FR] Ce module centralise les transformations communes côté client.
 * [EN] This module centralizes common client-side transformations.
 */
```

### 7.2 Constante exposée

```js
/**
 * [FR] Délai standard de temporisation réseau en millisecondes.
 * [EN] Standard network timeout in milliseconds.
 *
 * @type {number}
 */
export const DEFAULT_TIMEOUT_MS = 5000;
```

### 7.3 Fonction

```js
/**
 * [FR] Retourne le nom complet formaté.
 * [EN] Returns the formatted full name.
 *
 * @param {string} firstName [FR] Prénom.
 *                           [EN] First name.
 * @param {string} lastName [FR] Nom.
 *                          [EN] Last name.
 * @returns {string} [FR] Nom complet formaté.
 *                   [EN] Formatted full name.
 */
export function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`.trim();
}
```

### 7.4 Fonction asynchrone

```js
/**
 * [FR] Charge le profil utilisateur depuis l’API.
 * [EN] Loads the user profile from the API.
 *
 * @async
 * @param {string} userId [FR] Identifiant utilisateur.
 *                        [EN] User identifier.
 * @returns {Promise<object>} [FR] Données du profil utilisateur.
 *                            [EN] User profile data.
 * @throws {Error} [FR] Lancée si la requête échoue.
 *                 [EN] Thrown when the request fails.
 */
export async function fetchUserProfile(userId) {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
}
```

### 7.5 Classe

```js
/**
 * [FR] Représente un gestionnaire de session côté client.
 * [EN] Represents a client-side session manager.
 */
export class SessionManager {
    /**
     * [FR] Initialise le gestionnaire de session.
     * [EN] Initializes the session manager.
     *
     * @param {Storage} storage [FR] Mécanisme de stockage utilisé.
     *                          [EN] Storage mechanism to use.
     */
    constructor(storage) {
        this.storage = storage;
    }
}
```

### 7.6 Méthode

```js
/**
 * [FR] Enregistre le jeton de session courant.
 * [EN] Saves the current session token.
 *
 * @param {string} token [FR] Jeton de session.
 *                       [EN] Session token.
 * @returns {void}
 */
saveToken(token) {
    this.storage.setItem('session_token', token);
}
```

### 7.7 Type documentaire

```js
/**
 * @typedef {object} UserProfile
 * @property {string} id [FR] Identifiant unique.
 *                       [EN] Unique identifier.
 * @property {string} displayName [FR] Nom affiché.
 *                                [EN] Display name.
 * @property {string|null} avatarUrl [FR] URL de l’avatar.
 *                                   [EN] Avatar URL.
 */
```

---

## 8. Règles de style

### 8.1 Descriptions courtes

Toujours préférer une phrase simple et directe.

### 8.2 Ordre fixe

Toujours écrire `[FR]` avant `[EN]`.

### 8.3 `@param`, `@returns`, `@throws`

Utiliser les tags techniques lorsque l’élément est public, réutilisable, complexe ou contractuel.

### 8.4 `@returns {void}`

Peut être conservé pour homogénéité lorsque cela améliore la lecture du contrat.

### 8.5 Commentaires `//`

Les commentaires `//` servent à des notes locales temporaires, mais ne remplacent pas la documentation officielle.

### 8.6 Pas de surdocumentation

Ne pas commenter chaque variable locale triviale ou chaque affectation évidente.

---

## 9. Types d’éléments à documenter en priorité

Documenter en priorité :

- modules ;
- constantes exposées ;
- fonctions publiques ;
- fonctions asynchrones ;
- classes ;
- méthodes publiques ;
- types documentaires (`@typedef`) ;
- points d’intégration externes ;
- helpers réutilisables ;
- logique métier non triviale.

---

## 10. Exemple complet recommandé

```js
/**
 * [FR] Fournit les helpers de gestion de session côté navigateur.
 * [EN] Provides browser-side session management helpers.
 */

/**
 * [FR] Clé de stockage du jeton de session.
 * [EN] Storage key for the session token.
 *
 * @type {string}
 */
export const SESSION_TOKEN_KEY = 'gs.session.token';

/**
 * [FR] Lit le jeton de session depuis le stockage fourni.
 * [EN] Reads the session token from the provided storage.
 *
 * @param {Storage} storage [FR] Stockage navigateur compatible.
 *                          [EN] Compatible browser storage.
 * @returns {string|null} [FR] Jeton stocké ou null.
 *                        [EN] Stored token or null.
 */
export function getSessionToken(storage) {
    return storage.getItem(SESSION_TOKEN_KEY);
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine JavaScript :

- utiliser `/** ... */` ;
- écrire d’abord `[FR]`, puis `[EN]` ;
- utiliser des tags de style JSDoc ;
- documenter les éléments publics, réutilisables ou contractuels ;
- garder un style court, propre et uniforme ;
- ne pas importer de balises XML dans le code JavaScript.

---

## 12. Résumé exécutable

À appliquer dans tous les projets JavaScript Galactic-Shrine :

- utiliser JSDoc ;
- écrire `[FR]` puis `[EN]` ;
- documenter modules, fonctions, classes, méthodes, constantes et typedefs utiles ;
- réserver `//` aux notes internes non officielles ;
- documenter ce qui compte, pas l’évidence.
