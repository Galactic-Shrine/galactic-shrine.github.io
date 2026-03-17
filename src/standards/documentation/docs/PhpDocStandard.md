---
layout: layouts/standard.njk
title: Galactic-Shrine PHP Documentation Standard
description: Ce standard définit la manière de documenter le code **PHP** dans les projets Galactic-Shrine.
version: 1.2.0
scope: Projets PHP / Symfony / API / CLI / Bibliothèques internes
tags: ["PHP", "Documentation", "Projets PHP", "Symfony", "API", "CLI"]
category: documentation
categoryLabel: Documentation
summary: Ce standard définit la manière de documenter le code **PHP** dans les projets Galactic-Shrine.
rawPath: /standards/documentation/files/PhpDocStandard.md
permalink: /standards/documentation/docs/PhpDocStandard.html
---

# Galactic-Shrine PHP Documentation Standard

**Version:** 1.2.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets PHP / Symfony / API / CLI / Bibliothèques internes

---

## 1. Objectif

Ce standard définit la manière de documenter le code **PHP** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser la documentation du code ;
- de conserver un style bilingue `[FR] / [EN]` ;
- de rester compatible avec les outils PHP modernes ;
- de conserver un format visuel homogène ;
- d’éviter les conventions C# non adaptées à PHP.

---

## 2. Principes généraux

La documentation PHP Galactic-Shrine doit être :

- claire ;
- concise ;
- bilingue ;
- standard ;
- utile techniquement.

La documentation doit privilégier :

- le format PHPDoc natif ;
- les descriptions courtes ;
- les tags PHPDoc standard ;
- les types précis lorsqu’ils apportent une vraie valeur.

---

## 3. Format obligatoire des blocs

Toujours utiliser le format suivant :

```php
/**
 * [FR] Génère les fichiers de traduction YAML.
 * [EN] Generates YAML translation files.
 */
```

Ne pas utiliser :

```php
/** ... **/
```

---

## 4. Convention bilingue

Chaque description doit suivre l’ordre suivant :

1. ligne française `[FR]`
2. ligne anglaise `[EN]`

Exemple :

```php
/**
 * [FR] Charge les locales configurées.
 * [EN] Loads the configured locales.
 */
```

---

## 5. Éléments autorisés

Éléments autorisés dans les commentaires PHPDoc Galactic-Shrine :

- texte libre avec `[FR]` et `[EN]`
- `@param`
- `@return`
- `@throws`
- `@var`
- `@property`
- `@method`
- `@deprecated`
- `@example`
- `@see`
- `@note`

Éléments déconseillés ou interdits :

- `<summary>`
- `<param>`
- `<remarks>`
- `<returns>`
- `<exception>`

Ces balises sont réservées aux conventions XML de type C# / C++ et ne doivent pas être utilisées en PHP.

---

## 6. Structure recommandée d’un commentaire

Ordre recommandé :

1. description courte `[FR]`
2. description courte `[EN]`
3. détail complémentaire `[FR]` si nécessaire
4. détail complémentaire `[EN]` si nécessaire
5. tags PHPDoc techniques

Exemple :

```php
/**
 * [FR] Exécute la génération des traductions.
 * [EN] Executes translation generation.
 *
 * [FR] La méthode valide les entrées, exécute le traitement,
 *      puis retourne un code de sortie Symfony.
 * [EN] The method validates inputs, runs the process,
 *      then returns a Symfony exit code.
 *
 * @param InputInterface $input [FR] Entrée console.
 *                              [EN] Console input.
 * @param OutputInterface $output [FR] Sortie console.
 *                                [EN] Console output.
 * @return int [FR] Code de retour Symfony.
 *             [EN] Symfony return code.
 */
```

---

## 7. Standard par type d’élément

### 7.1 Classe

```php
/**
 * [FR] Commande Symfony permettant de générer les fichiers de traduction YAML.
 * [EN] Symfony command used to generate YAML translation files.
 *
 * [FR] Cette commande s’appuie sur la commande native de Symfony
 *      et ajoute une logique métier complémentaire.
 * [EN] This command relies on Symfony's native command
 *      and adds complementary business logic.
 */
final class GenerateLangCommand extends Command
{
}
```

### 7.2 Propriété

```php
/**
 * @var array<int, string>|string [FR] Locales configurées.
 *                                [EN] Configured locales.
 */
private readonly array|string $appLocales;
```

### 7.3 Constructeur

```php
/**
 * [FR] Initialise une nouvelle instance de la classe.
 * [EN] Initializes a new instance of the class.
 *
 * @param string $projectDir [FR] Répertoire racine du projet.
 *                           [EN] Project root directory.
 * @param array<int, string>|string $appLocales [FR] Locales configurées.
 *                                              [EN] Configured locales.
 */
public function __construct(string $projectDir, array|string $appLocales)
{
}
```

### 7.4 Méthode simple

```php
/**
 * [FR] Normalise une liste de valeurs.
 * [EN] Normalizes a list of values.
 *
 * @param array<int, string>|string|null $values [FR] Valeurs d’entrée.
 *                                               [EN] Input values.
 * @return list<string> [FR] Valeurs normalisées.
 *                      [EN] Normalized values.
 */
private function normalizeValues(array|string|null $values): array
{
}
```

### 7.5 Méthode métier

```php
/**
 * [FR] Exécute le traitement principal de la commande.
 * [EN] Executes the main command processing.
 *
 * [FR] La méthode valide les entrées, prépare les dépendances,
 *      lance le traitement puis retourne un code de sortie Symfony.
 * [EN] The method validates inputs, prepares dependencies,
 *      runs the process, then returns a Symfony exit code.
 *
 * @param InputInterface $input [FR] Entrée console.
 *                              [EN] Console input.
 * @param OutputInterface $output [FR] Sortie console.
 *                                [EN] Console output.
 * @return int [FR] Code de retour Symfony.
 *             [EN] Symfony return code.
 */
protected function execute(InputInterface $input, OutputInterface $output): int
{
}
```

### 7.6 Méthode avec exception

```php
/**
 * [FR] Écrit les données dans un fichier YAML.
 * [EN] Writes data into a YAML file.
 *
 * @param string $filePath [FR] Chemin du fichier.
 *                         [EN] File path.
 * @param array<string, mixed> $data [FR] Données à écrire.
 *                                   [EN] Data to write.
 * @throws \RuntimeException [FR] Si l’écriture échoue.
 *                           [EN] If writing fails.
 */
private function writeYamlFile(string $filePath, array $data): void
{
}
```

### 7.7 Méthode récursive ou technique

```php
/**
 * [FR] Parcourt récursivement un tableau pour collecter les entrées terminales.
 * [EN] Recursively walks an array to collect terminal entries.
 *
 * @param array<string, mixed> $data [FR] Données à parcourir.
 *                                   [EN] Data to traverse.
 * @param list<string> $path [FR] Chemin courant.
 *                           [EN] Current path.
 * @return list<array{id:string, path:list<string>, value:mixed}> [FR] Entrées collectées.
 *                                                                [EN] Collected entries.
 */
private function collectEntries(array $data, array $path = []): array
{
}
```

---

## 8. Règles de style

### 8.1 Descriptions courtes

Toujours préférer une phrase simple et directe.

### 8.2 Ordre fixe

Toujours écrire `[FR]` avant `[EN]`.

### 8.3 Tags techniques compacts

Écrire les tags sur une seule ligne lorsque c’est lisible. Utiliser plusieurs lignes si cela améliore la lisibilité.

### 8.4 `@return`

Documenter `@return` lorsqu’il existe une vraie valeur de retour. Ne pas écrire `@return void` sauf besoin particulier d’uniformité stricte.

### 8.5 `@throws`

N’ajouter `@throws` que si l’information est importante pour l’appelant.

### 8.6 Pas de surdocumentation

Ne pas commenter l’évidence.

---

## 9. Types d’éléments à documenter en priorité

Documenter en priorité :

- classes de service ;
- commandes Symfony ;
- écouteurs, subscribers et composants techniques ;
- méthodes publiques ;
- méthodes complexes ;
- propriétés dont le rôle ou le type n’est pas trivial ;
- structures de données documentaires ;
- API internes importantes.

---

## 10. Exemple complet recommandé

```php
<?php

declare(strict_types=1);

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * [FR] Génère les fichiers de traduction YAML pour les locales configurées.
 * [EN] Generates YAML translation files for configured locales.
 *
 * [FR] Cette commande s’appuie sur la commande native de Symfony
 *      et ajoute une logique de filtrage et de nettoyage.
 * [EN] This command relies on Symfony's native command
 *      and adds filtering and cleanup logic.
 */
final class GenerateLangCommand extends Command
{
    /**
     * @var array<int, string>|string [FR] Locales configurées.
     *                                [EN] Configured locales.
     */
    private readonly array|string $appLocales;

    /**
     * [FR] Initialise la commande.
     * [EN] Initializes the command.
     *
     * @param array<int, string>|string $appLocales [FR] Locales configurées.
     *                                              [EN] Configured locales.
     * @param string $projectDir [FR] Répertoire racine du projet.
     *                           [EN] Project root directory.
     */
    public function __construct(
        array|string $appLocales,
        private readonly string $projectDir,
    ) {
        parent::__construct();
        $this->appLocales = $appLocales;
    }

    /**
     * [FR] Exécute la génération des traductions.
     * [EN] Executes translation generation.
     *
     * @param InputInterface $input [FR] Entrée console.
     *                              [EN] Console input.
     * @param OutputInterface $output [FR] Sortie console.
     *                                [EN] Console output.
     * @return int [FR] Code de retour Symfony.
     *             [EN] Symfony return code.
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        return Command::SUCCESS;
    }
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine PHP :

- utiliser `/** ... */` ;
- écrire d’abord `[FR]`, puis `[EN]` ;
- utiliser uniquement des balises PHPDoc natives ;
- utiliser `@param`, `@return`, `@throws`, `@var` lorsque cela apporte une vraie valeur ;
- ne pas importer les conventions XML C# / C++ ;
- documenter ce qui compte, pas l’évidence.

---

## 12. Résumé exécutable

À appliquer dans tous les projets PHP Galactic-Shrine :

- utiliser PHPDoc natif ;
- écrire `[FR]` puis `[EN]` ;
- documenter les classes, méthodes et structures réellement utiles ;
- garder un style court, propre et uniforme ;
- éviter les commentaires inutiles sur le code trivial.
