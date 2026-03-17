# Galactic-Shrine JavaScript Coding Standard

**Version:** 1.0.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets JavaScript / ES Modules / Browser / Node.js / Tooling / Front-end / Back-end / Scripts / Components

---

## 1. Objectif

Ce standard définit la manière d’écrire le code **JavaScript** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser le style JavaScript ;
- de conserver une base lisible malgré la souplesse du langage ;
- d’aligner le nommage avec la convention Galactic-Shrine ;
- de réduire les zones implicites et ambiguës.

---

## 2. Principes généraux

Le code JavaScript Galactic-Shrine doit être :

- explicite ;
- stable ;
- lisible ;
- prudent vis-à-vis de l’implicite ;
- structuré selon le runtime visé.

Le code doit privilégier :

- des modules petits et ciblés ;
- des noms explicites ;
- des fonctions courtes ;
- des transformations de données lisibles ;
- une séparation claire entre DOM, logique métier et intégrations.

---

## 3. Décisions officielles Galactic-Shrine pour JavaScript

Décisions officielles :

- classes : `PascalCase` ;
- méthodes : `PascalCase` ;
- paramètres : `PascalCase` ;
- propriétés d’objets applicatifs internes : `PascalCase` lorsque le contrat est maîtrisé ;
- variables locales : `PascalCase` ;
- constantes de module : `PascalCase` ;
- fichiers de modules : nom cohérent avec la responsabilité ;
- fonctions asynchrones suffixées par `Async` lorsque cela améliore la clarté.

Règle d’exception :

> Les objets JSON, APIs publiques web, conventions DOM, noms d’options imposés par une bibliothèque ou formats externes peuvent conserver leur convention native.

---

## 4. Convention de nommage

- classe : `PascalCase` ;
- méthode : `PascalCase` ;
- paramètre : `PascalCase` ;
- variable locale : `PascalCase` ;
- constante : `PascalCase` ;
- événement ou handler interne : explicite, orienté intention ;
- nom de module : clair et ciblé.

À éviter :

- `data`, `item`, `obj`, `el`, `tmp` répétés sans contexte ;
- les noms qui cachent une mutation ou un effet de bord ;
- les fonctions “helpers” énormes.

---

## 5. Structure recommandée d’un module JavaScript

Ordre recommandé :

1. imports ;
2. constantes locales ;
3. types ou classes locales si besoin ;
4. fonction ou classe principale exportée ;
5. helpers privés strictement liés au module.

Règles :

- un module doit avoir une responsabilité identifiable ;
- limiter le nombre d’exports si cela brouille le rôle du fichier ;
- éviter de mélanger orchestration UI et logique de transformation profonde.

---

## 6. Style d’écriture

### 6.1 Déclarations

- préférer `const` puis `let` ;
- éviter `var` ;
- rapprocher la déclaration de l’usage.

### 6.2 Fonctions

- préférer des fonctions nommées pour la logique importante ;
- garder les callbacks courts ;
- éviter les chaînes de transformations illisibles.

### 6.3 `async/await`

- préférer `async/await` à des chaînes de `then` complexes ;
- gérer les erreurs explicitement ;
- éviter les appels parallèles non maîtrisés.

### 6.4 Conditions

- rendre les tests lisibles ;
- éviter les coercitions surprenantes ;
- utiliser `===` et `!==` par défaut.

---

## 7. Règles spécifiques JavaScript

- ne pas dépendre d’un état global caché ;
- encapsuler l’accès au DOM complexe ;
- isoler les appels réseau ;
- valider les entrées externes ou événements transformés ;
- éviter les objets polymorphes sans contrat ;
- limiter la métaprogrammation et les patterns trop abstraits si le gain est faible.

---

## 8. Gestion des erreurs et robustesse

- lever ou propager une erreur exploitable ;
- ne pas masquer un échec de requête ;
- distinguer les erreurs attendues des défauts techniques ;
- renvoyer des structures de résultat stables si le flux l’exige ;
- journaliser avec discernement.

---

## 9. Types d’éléments à revoir en priorité

Relire en priorité :

- modules réseau ;
- services front-end ;
- composants riches en état ;
- gestionnaires d’événements complexes ;
- adaptateurs d’APIs externes ;
- code de transformation JSON ;
- scripts de build ou tooling critiques.

---

## 10. Exemple complet recommandé

```js
export class UserProfileService {
    constructor(ApiClient) {
        this.ApiClient = ApiClient;
    }

    async UpdateDisplayNameAsync(UserId, DisplayName) {
        const NormalizedDisplayName = DisplayName.trim();

        if (NormalizedDisplayName.length === 0) {
            return { IsSuccess: false, ErrorCode: "EmptyDisplayName" };
        }

        const Response = await this.ApiClient.PostAsync("/users/display-name", {
            userId: UserId,
            displayName: NormalizedDisplayName,
        });

        if (!Response.ok) {
            return { IsSuccess: false, ErrorCode: "RequestFailed" };
        }

        return { IsSuccess: true };
    }
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine JavaScript :

- utiliser `PascalCase` pour méthodes, paramètres et variables locales ;
- appliquer `PascalCase` aux propriétés internes quand le contrat t’appartient ;
- conserver les conventions externes quand l’interopérabilité l’exige ;
- écrire des modules courts, avec responsabilités nettes ;
- éviter l’implicite fragile.

---

## 12. Résumé exécutable

À appliquer dans tous les projets JavaScript Galactic-Shrine :

- `PascalCase` pour méthodes, paramètres et variables locales ;
- `const` par défaut ;
- `async/await` propre ;
- modules ciblés ;
- validation des entrées externes ;
- exceptions ciblées pour les conventions JSON ou APIs externes.
