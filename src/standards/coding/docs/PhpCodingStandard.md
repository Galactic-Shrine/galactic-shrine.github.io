---
layout: layouts/standard.njk
title: Galactic-Shrine PHP Coding Standard
description: Ce standard définit la manière d’écrire le code **PHP** dans les projets Galactic-Shrine.
version: 1.0.0
scope: Projets PHP / Symfony / APIs / CLI / Services / Domain Models / Back-office / Applications Web
tags: ["PHP", "Codage", "Projets PHP", "Symfony", "APIs", "CLI"]
category: coding
categoryLabel: Codage
summary: Ce standard définit la manière d’écrire le code **PHP** dans les projets Galactic-Shrine.
rawPath: /standards/coding/files/PhpCodingStandard.md
permalink: /standards/coding/docs/PhpCodingStandard.html
---

# Galactic-Shrine PHP Coding Standard

**Version:** 1.0.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets PHP / Symfony / APIs / CLI / Services / Domain Models / Back-office / Applications Web

---

## 1. Objectif

Ce standard définit la manière d’écrire le code **PHP** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser le style PHP et Symfony ;
- d’aligner le nommage et la structure sur la convention Galactic-Shrine ;
- d’intégrer explicitement la règle Galactic-Shrine `PascalCase` pour propriétés, paramètres et méthodes ;
- d’améliorer la lisibilité du code applicatif et des services.

---

## 2. Principes généraux

Le code PHP Galactic-Shrine doit être :

- strict ;
- lisible ;
- explicite ;
- cohérent avec le framework sans lui être totalement soumis ;
- maintenable à long terme.

Le code doit privilégier :

- des services spécialisés ;
- des DTO, value objects et résultats explicites lorsque pertinents ;
- des dépendances injectées ;
- des types déclarés ;
- une logique de contrôleur légère.

---

## 3. Décisions officielles Galactic-Shrine pour PHP

Décisions officielles :

- utiliser `declare(strict_types=1);` lorsque compatible avec le projet ;
- classes, interfaces, traits, enums : `PascalCase` ;
- propriétés : `PascalCase` ;
- paramètres : `PascalCase` ;
- méthodes : `PascalCase` ;
- variables locales : `PascalCase` ;
- propriétés privées : `$PascalCase` ;
- fichiers nommés selon le type principal ;
- typage des paramètres et retours obligatoire dès que possible.

Exemple :

```php
<?php

declare(strict_types=1);

namespace App\Service\User;

final class UserProfileService
{
    public function UpdateDisplayName(string $UserId, string $DisplayName): bool
    {
        $NormalizedDisplayName = trim($DisplayName);

        if ($NormalizedDisplayName === '') {
            return false;
        }

        return true;
    }
}
```

---

## 4. Convention de nommage

- namespace : hiérarchique et orienté domaine ;
- classe / interface / trait / enum : `PascalCase` ;
- propriété : `PascalCase` ;
- méthode : `PascalCase` ;
- paramètre : `PascalCase` ;
- variable locale : `PascalCase` ;
- propriété privée : `$PascalCase` ;
- constantes de classe : `PascalCase` ;
- fichiers : un type principal par fichier.

Règle d’exception :

> Les noms imposés par Symfony, Serializer, API Platform, Doctrine, JSON, Twig ou une API externe peuvent conserver leur convention native lorsque l’interopérabilité l’exige.

---

## 5. Structure recommandée d’un fichier PHP

Ordre recommandé :

1. ouverture PHP ;
2. `declare(strict_types=1);` ;
3. namespace ;
4. `use` ;
5. type principal.

Ordre recommandé dans une classe :

1. constantes ;
2. propriétés ;
3. constructeur ;
4. méthodes publiques ;
5. méthodes privées.

Éviter :

- les fichiers mélangeant plusieurs grosses classes ;
- la logique métier lourde dans les contrôleurs ;
- les méthodes “utilitaires globales” sans périmètre clair.

---

## 6. Style d’écriture

### 6.1 Types

Toujours typer les paramètres et les retours dès que raisonnable.

### 6.2 Contrôleurs

- rester minces ;
- déléguer la logique métier aux services ;
- éviter les transformations complexes inline.

### 6.3 Méthodes

- une méthode doit avoir une responsabilité identifiable ;
- préférer les retours précoces ;
- éviter les tableaux polymorphes sans contrat.

### 6.4 Collections et tableaux

- préférer des structures explicites lorsqu’un tableau devient contractuel ;
- documenter la forme attendue si nécessaire ;
- éviter les clés “magiques” dispersées.

---

## 7. Règles spécifiques PHP / Symfony

- ne pas injecter le conteneur complet ;
- préférer l’autowiring sur des dépendances précises ;
- éviter les services statiques ;
- séparer DTO, entités, value objects et services ;
- garder Doctrine propre : pas de logique d’infrastructure disséminée partout ;
- traiter explicitement les conversions d’UUID, dates et entrées externes ;
- rester cohérent avec les conventions Symfony lorsqu’elles sont structurelles.

---

## 8. Gestion des erreurs et robustesse

- distinguer validation utilisateur, erreur métier et erreur technique ;
- ne pas retourner `null` si un résultat dédié serait plus clair ;
- utiliser des exceptions ciblées pour les fautes contractuelles ou techniques importantes ;
- journaliser les erreurs d’infrastructure utiles ;
- ne pas masquer une erreur silencieusement dans un `catch` vide.

---

## 9. Types d’éléments à revoir en priorité

Relire en priorité :

- services métier ;
- contrôleurs ;
- normalizers / serializers ;
- DTO de requête ou de réponse ;
- repositories ;
- listeners / subscribers ;
- commandes CLI ;
- intégrations externes.

---

## 10. Exemple complet recommandé

```php
<?php

declare(strict_types=1);

namespace App\Service\User;

use App\Repository\UserProfileRepository;

final class UserProfileService
{
    public function __construct(
        private readonly UserProfileRepository $UserProfileRepository,
    ) {
    }

    public function UpdateDisplayName(string $UserId, string $DisplayName): bool
    {
        $NormalizedDisplayName = trim($DisplayName);

        if ($NormalizedDisplayName === '') {
            return false;
        }

        $ExistingProfile = $this->UserProfileRepository->FindByUserId($UserId);

        if ($ExistingProfile === null) {
            return false;
        }

        $ExistingProfile->UpdateDisplayName($NormalizedDisplayName);

        $this->UserProfileRepository->Save($ExistingProfile);

        return true;
    }
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine PHP :

- `PascalCase` pour propriétés, paramètres, méthodes et variables locales ;
- code strict et typé ;
- contrôleurs minces ;
- services spécialisés ;
- interopérabilité framework gérée par exception ciblée, pas par dérive générale.

---

## 12. Résumé exécutable

À appliquer dans tous les projets PHP Galactic-Shrine :

- `declare(strict_types=1);` quand possible ;
- `PascalCase` pour propriétés, paramètres, méthodes et variables locales ;
- un type principal par fichier ;
- types explicites ;
- logique métier hors contrôleurs ;
- gestion claire des erreurs et résultats.
