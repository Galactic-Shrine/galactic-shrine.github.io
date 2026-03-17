---
layout: layouts/standard.njk
title: Galactic-Shrine C# Coding Standard
description: Ce standard définit la manière d’écrire le code **C#** dans les projets Galactic-Shrine.
version: 1.0.0
scope: Projets C# / .NET / Class Libraries / SDKs / CLI / Applications Desktop / APIs / Services / Tooling
tags: ["C#", "Codage", "Projets C#", ".NET", "Class Libraries", "SDKs"]
category: coding
categoryLabel: Codage
summary: Ce standard définit la manière d’écrire le code **C#** dans les projets Galactic-Shrine.
rawPath: /standards/coding/files/CSharpCodingStandard.md
permalink: /standards/coding/docs/CSharpCodingStandard.html
---

# Galactic-Shrine C# Coding Standard

**Version:** 1.0.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets C# / .NET / Class Libraries / SDKs / CLI / Applications Desktop / APIs / Services / Tooling

---

## 1. Objectif

Ce standard définit la manière d’écrire le code **C#** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser le style C# dans les bibliothèques et applications ;
- d’imposer une convention de nommage claire et stable ;
- d’intégrer explicitement la règle Galactic-Shrine `PascalCase` pour propriétés, paramètres et méthodes ;
- de garder un code compatible avec un usage industriel et maintenable.

---

## 2. Principes généraux

Le code C# Galactic-Shrine doit être :

- lisible ;
- explicite ;
- idiomatique quand cela ne contredit pas les décisions Galactic-Shrine ;
- robuste ;
- facile à refactoriser.

Le code doit privilégier :

- des types courts et spécialisés ;
- des dépendances injectées explicitement ;
- des signatures nettes ;
- une nullabilité traitée consciemment ;
- des exceptions réservées aux erreurs réellement exceptionnelles ou contractuelles.

---

## 3. Décisions officielles Galactic-Shrine pour C#

Décisions officielles :

- **propriétés** en `PascalCase` ;
- **paramètres** en `PascalCase` ;
- **méthodes** en `PascalCase` ;
- **classes**, **records**, **structs**, **enums** et **delegates** en `PascalCase` ;
- **champs privés** en `_PascalCase` ;
- **interfaces** en `IPascalCase` ;
- **variables locales** en `PascalCase` ;
- **fichiers** nommés selon le type principal ;
- activer et respecter la **nullabilité** quand elle est disponible ;
- éviter les abréviations opaques.

Exemple :

```csharp
public sealed class UserProfileService
{
    private readonly IUserRepository _UserRepository;

    public UserProfileService(IUserRepository UserRepository)
    {
        ArgumentNullException.ThrowIfNull(UserRepository);

        _UserRepository = UserRepository;
    }

    public async Task<UserProfile?> GetProfileAsync(Guid UserId, CancellationToken CancellationToken)
    {
        return await _UserRepository.FindProfileAsync(UserId, CancellationToken);
    }
}
```

---

## 4. Convention de nommage

- namespace : stable, hiérarchique, orienté domaine ou couche ;
- classe / record / struct / enum : `PascalCase` ;
- interface : `IPascalCase` ;
- propriété : `PascalCase` ;
- méthode : `PascalCase` ;
- paramètre : `PascalCase` ;
- variable locale : `PascalCase` ;
- champ privé : `_PascalCase` ;
- champ `const` : `PascalCase` ;
- champ `static readonly` : `PascalCase` ou `_PascalCase` selon visibilité, mais rester uniforme dans le projet.

À éviter :

- `obj`, `mgr`, `svc`, `tmp`, `data2` sans contexte ;
- les noms qui décrivent la technique sans l’intention ;
- des suffixes artificiels partout.

---

## 5. Structure recommandée d’un fichier C#

Ordre recommandé :

1. en-tête légal si requis ;
2. `using` ;
3. `namespace` ;
4. type principal ;
5. types internes liés uniquement si cela reste lisible.

Ordre recommandé dans un type :

1. constantes ;
2. champs statiques ;
3. champs d’instance ;
4. constructeurs ;
5. propriétés ;
6. méthodes publiques ;
7. méthodes protégées ;
8. méthodes privées ;
9. types imbriqués si vraiment nécessaires.

Éviter :

- plusieurs gros types publics sans lien dans le même fichier ;
- des régions utilisées pour masquer un manque de structure ;
- des méthodes privées éparpillées sans ordre.

---

## 6. Style d’écriture

### 6.1 Accolades et blocs

Toujours utiliser des blocs explicites pour `if`, `else`, `for`, `foreach`, `while`, `using`, sauf cas ultra-triviaux validés par le projet.

### 6.2 Retours anticipés

Préférer un retour anticipé lorsqu’il réduit l’imbrication et clarifie le contrat.

### 6.3 LINQ

Utiliser LINQ lorsqu’il améliore clairement la lecture.  
Éviter les chaînes LINQ trop denses ou difficiles à déboguer.

### 6.4 `var`

Utiliser `var` lorsque le type est évident à la lecture immédiate.  
Sinon, préférer le type explicite.

### 6.5 `async/await`

- suffixer les méthodes asynchrones par `Async` ;
- propager `CancellationToken` lorsque pertinent ;
- éviter `async void` sauf gestionnaires d’événements ;
- ne pas bloquer artificiellement sur du code asynchrone.

---

## 7. Règles spécifiques C#

- utiliser `ArgumentNullException.ThrowIfNull(...)` aux frontières appropriées ;
- marquer `sealed` lorsqu’un type n’a pas vocation à être hérité ;
- préférer `enum` explicites et lisibles ;
- privilégier `record` seulement si la sémantique valeur est réelle ;
- limiter les extension methods aux cas légitimes ;
- éviter les classes statiques utilitaires trop larges ;
- ne pas exposer de collection mutable si une abstraction plus sûre convient ;
- rester prudent avec la réflexion, le `dynamic` et les conversions implicites coûteuses.

---

## 8. Gestion des erreurs et robustesse

- lancer des exceptions avec un message exploitable ;
- ne pas avaler une exception sans traitement ou journalisation pertinente ;
- utiliser des types de résultat dédiés quand l’absence d’un élément est un cas normal ;
- documenter les contrats importants côté API publique ;
- séparer les validations d’entrée, les erreurs métier et les erreurs d’infrastructure.

---

## 9. Types d’éléments à revoir en priorité

Relire en priorité :

- services applicatifs ;
- factories, builders, providers ;
- repositories et accès externes ;
- modèles exposés publiquement ;
- code asynchrone ;
- sérialisation / désérialisation ;
- gestion des options et configuration ;
- utilitaires partagés.

---

## 10. Exemple complet recommandé

```csharp
namespace GalacticShrine.Users;

public sealed class UserProfileService
{
    private readonly IUserRepository _UserRepository;
    private readonly IClock _Clock;

    public UserProfileService(IUserRepository UserRepository, IClock Clock)
    {
        ArgumentNullException.ThrowIfNull(UserRepository);
        ArgumentNullException.ThrowIfNull(Clock);

        _UserRepository = UserRepository;
        _Clock = Clock;
    }

    public async Task<UserProfileResult> UpdateDisplayNameAsync(
        Guid UserId,
        string DisplayName,
        CancellationToken CancellationToken)
    {
        ArgumentNullException.ThrowIfNull(DisplayName);

        string NormalizedDisplayName = DisplayName.Trim();

        if (NormalizedDisplayName.Length == 0)
        {
            return UserProfileResult.Invalid("DisplayName cannot be empty.");
        }

        UserProfile? ExistingProfile = await _UserRepository.FindProfileAsync(UserId, CancellationToken);

        if (ExistingProfile is null)
        {
            return UserProfileResult.NotFound();
        }

        ExistingProfile.UpdateDisplayName(NormalizedDisplayName, _Clock.UtcNow);

        await _UserRepository.SaveAsync(ExistingProfile, CancellationToken);

        return UserProfileResult.Success(ExistingProfile);
    }
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine C# :

- utiliser `PascalCase` pour propriétés, paramètres, méthodes et variables locales ;
- utiliser `_PascalCase` pour les champs privés ;
- garder un type principal par fichier ;
- écrire des méthodes courtes et testables ;
- respecter la nullabilité et les contrats d’erreur ;
- utiliser `Async` pour les méthodes asynchrones.

---

## 12. Résumé exécutable

À appliquer dans tous les projets C# Galactic-Shrine :

- `PascalCase` pour propriétés, paramètres, méthodes et variables locales ;
- `_PascalCase` pour les champs privés ;
- `IPascalCase` pour les interfaces ;
- un type principal par fichier ;
- validation explicite des entrées ;
- `async/await` propre, avec `CancellationToken` quand nécessaire ;
- pas de classes “god object”.
