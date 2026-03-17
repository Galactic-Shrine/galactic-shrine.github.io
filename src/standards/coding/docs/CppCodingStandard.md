---
layout: layouts/standard.njk
title: Galactic-Shrine C++ Coding Standard
description: Ce standard définit la manière d’écrire le code **C++** dans les projets Galactic-Shrine.
version: 1.0.0
scope: Projets C++ / Moteurs / Bibliothèques natives / Outils / Applications Desktop / Modules système / Intégrations Unreal-like ou propriétaires
tags: ["C++", "Codage", "Projets C++", "Moteurs", "Bibliothèques natives", "Outils"]
category: coding
categoryLabel: Codage
summary: Ce standard définit la manière d’écrire le code **C++** dans les projets Galactic-Shrine.
rawPath: /standards/coding/files/CppCodingStandard.md
permalink: /standards/coding/docs/CppCodingStandard.html
---

# Galactic-Shrine C++ Coding Standard

**Version:** 1.0.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets C++ / Moteurs / Bibliothèques natives / Outils / Applications Desktop / Modules système / Intégrations Unreal-like ou propriétaires

---

## 1. Objectif

Ce standard définit la manière d’écrire le code **C++** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser le style C++ des bibliothèques et modules natifs ;
- de conserver une base robuste, lisible et industrialisable ;
- de limiter les erreurs de gestion mémoire, de contrat et d’interface ;
- d’aligner les conventions de nommage avec Galactic-Shrine.

---

## 2. Principes généraux

Le code C++ Galactic-Shrine doit être :

- clair ;
- sûr autant que possible ;
- cohérent ;
- orienté RAII ;
- attentif aux coûts réels.

Le code doit privilégier :

- des interfaces nettes ;
- des responsabilités courtes ;
- l’usage de types explicites ;
- des ressources gérées automatiquement ;
- la réduction des dépendances de compilation inutiles.

---

## 3. Décisions officielles Galactic-Shrine pour C++

Décisions officielles :

- classes, structs, enums, aliases de types : `PascalCase` ;
- méthodes : `PascalCase` ;
- paramètres : `PascalCase` ;
- propriétés ou accesseurs exposés : `PascalCase` ;
- variables locales : `PascalCase` ;
- champs privés : `_PascalCase` ;
- constantes nommées : `PascalCase` ;
- préférer `enum class` à `enum` lorsque pertinent ;
- préférer `nullptr` à `NULL` ;
- privilégier RAII et smart pointers quand la sémantique le justifie.

---

## 4. Convention de nommage

- fichiers `.hpp` / `.h` et `.cpp` alignés sur le type principal ;
- classes / structs : `PascalCase` ;
- méthodes : `PascalCase` ;
- paramètres : `PascalCase` ;
- variables locales : `PascalCase` ;
- membres privés : `_PascalCase` ;
- namespaces : stables, hiérarchiques et lisibles ;
- macros : uniquement si nécessaire, clairement nommées.

À éviter :

- noms trop courts sans signification ;
- préfixes techniques omniprésents sans valeur ;
- noms ambigus pour des pointeurs propriétaires ou non propriétaires.

---

## 5. Structure recommandée d’un fichier C++

Ordre recommandé :

1. en-tête légal si requis ;
2. include guard ou `#pragma once` ;
3. includes minimaux ;
4. namespace ;
5. déclaration du type ou des fonctions ;
6. implémentation en `.cpp`.

Règles :

- limiter les includes dans les headers ;
- préférer les forward declarations lorsque raisonnable ;
- séparer clairement l’interface et l’implémentation ;
- éviter les dépendances transversales cachées.

---

## 6. Style d’écriture

### 6.1 Accolades

Utiliser un style d’accolades cohérent sur tout le dépôt.  
Toujours préférer la stabilité au mélange de styles.

### 6.2 `const` correctness

- marquer `const` tout ce qui doit l’être ;
- utiliser des références constantes pour éviter des copies inutiles ;
- rendre explicite l’intention de mutation.

### 6.3 Valeurs de retour

- éviter les pointeurs nus propriétaires ;
- retourner des types de valeur, références ou wrappers explicites selon le contrat ;
- documenter la sémantique de possession quand elle n’est pas évidente.

### 6.4 Conditions et branches

- privilégier les gardes précoces ;
- factoriser les expressions complexes dans des variables lisibles ;
- éviter la logique métier cachée dans des macros.

---

## 7. Règles spécifiques C++

- préférer `std::unique_ptr` à la possession manuelle ;
- utiliser `std::shared_ptr` seulement pour une propriété partagée réelle ;
- éviter `new` / `delete` directs hors cas spécialisés ;
- marquer `override` explicitement ;
- utiliser `explicit` sur les constructeurs à un paramètre quand nécessaire ;
- préférer `std::string_view` pour la lecture non propriétaire lorsque sûr ;
- faire attention à la durée de vie des références et vues.

---

## 8. Gestion des erreurs et robustesse

- utiliser les exceptions selon la politique du projet ou une alternative claire ;
- ne pas ignorer silencieusement un code d’erreur ;
- garder les invariants de classe simples et défendables ;
- valider les préconditions importantes ;
- documenter les contrats de possession et les cas d’échec.

---

## 9. Types d’éléments à revoir en priorité

Relire en priorité :

- types manipulant des ressources ;
- code concurrent ou multithread ;
- wrappers système ;
- interfaces publiques de bibliothèques ;
- sérialisation binaire ou réseau ;
- interopérabilité C / C++ / moteur.

---

## 10. Exemple complet recommandé

```cpp
#pragma once

#include <memory>
#include <string_view>

namespace GalacticShrine::Users
{
    class UserProfileRepository;

    class UserProfileService final
    {
    public:
        explicit UserProfileService(std::shared_ptr<UserProfileRepository> Repository);

        bool UpdateDisplayName(std::string_view UserId, std::string_view DisplayName);

    private:
        std::shared_ptr<UserProfileRepository> _Repository;
    };
}
```

```cpp
#include "UserProfileService.hpp"
#include "UserProfileRepository.hpp"

namespace GalacticShrine::Users
{
    UserProfileService::UserProfileService(std::shared_ptr<UserProfileRepository> Repository)
        : _Repository(std::move(Repository))
    {
    }

    bool UserProfileService::UpdateDisplayName(std::string_view UserId, std::string_view DisplayName)
    {
        if (UserId.empty())
        {
            return false;
        }

        if (DisplayName.empty())
        {
            return false;
        }

        return _Repository->UpdateDisplayName(UserId, DisplayName);
    }
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine C++ :

- utiliser `PascalCase` pour méthodes, paramètres et variables locales ;
- utiliser `_PascalCase` pour les membres privés ;
- appliquer RAII systématiquement ;
- séparer interface et implémentation clairement ;
- rendre explicites la possession, les coûts et la durée de vie.

---

## 12. Résumé exécutable

À appliquer dans tous les projets C++ Galactic-Shrine :

- `PascalCase` pour types, méthodes, paramètres et variables locales ;
- `_PascalCase` pour membres privés ;
- `enum class`, `nullptr`, `override`, `explicit` quand approprié ;
- pas de gestion mémoire propriétaire implicite ;
- headers légers, dépendances limitées ;
- contrats de possession clairs.
