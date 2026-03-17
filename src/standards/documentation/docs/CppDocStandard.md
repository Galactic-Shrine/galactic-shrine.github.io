---
layout: layouts/standard.njk
title: Galactic-Shrine C++ Documentation Standard
description: Ce standard définit la manière de documenter le code **C++** dans les projets Galactic-Shrine.
version: 1.2.0
scope: Projets C++ / Bibliothèques / Moteurs / Outils / Applications Desktop / Jeux / Composants natifs
tags: ["C++", "Documentation", "Projets C++", "Bibliothèques", "Moteurs", "Outils"]
category: documentation
categoryLabel: Documentation
summary: Ce standard définit la manière de documenter le code **C++** dans les projets Galactic-Shrine.
rawPath: /standards/documentation/files/CppDocStandard.md
permalink: /standards/documentation/docs/CppDocStandard.html
---

# Galactic-Shrine C++ Documentation Standard

**Version:** 1.2.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets C++ / Bibliothèques / Moteurs / Outils / Applications Desktop / Jeux / Composants natifs

---

## 1. Objectif

Ce standard définit la manière de documenter le code **C++** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser la documentation du code ;
- de conserver un style bilingue `[FR] / [EN]` ;
- de rester cohérent avec la convention documentaire Galactic-Shrine ;
- de conserver une structure visuelle homogène ;
- de documenter proprement les types, fonctions et points d’extension importants.

---

## 2. Principes généraux

La documentation C++ Galactic-Shrine doit être :

- claire ;
- concise ;
- bilingue ;
- structurée ;
- utile techniquement.

La documentation doit privilégier :

- le format XML documentaire utilisé par le standard Galactic-Shrine C++ ;
- les descriptions courtes ;
- les contrats utiles sur les API exposées ;
- une logique simple, sans surdocumentation.

---

## 3. Format obligatoire des blocs

Toujours utiliser le format suivant :

```cpp
/**
 * <summary>
 *   [FR] Charge la configuration du module.
 *   [EN] Loads the module configuration.
 * </summary>
 **/
```

Ce format constitue le standard officiel recommandé pour Galactic-Shrine C++.

---

## 4. Convention bilingue

Chaque balise descriptive doit suivre l’ordre suivant :

1. ligne française `[FR]`
2. ligne anglaise `[EN]`

Exemple :

```cpp
/**
 * <summary>
 *   [FR] Normalise une locale.
 *   [EN] Normalizes a locale.
 * </summary>
 **/
```

---

## 5. Éléments autorisés

Éléments autorisés dans les commentaires C++ Galactic-Shrine :

- texte libre avec `[FR]` et `[EN]`
- `<summary>`
- `<remarks>`
- `<param>`
- `<tparam>`
- `<returns>`
- `<exception>`
- `<value>`
- `<example>`
- `<seealso>`

Éléments déconseillés :

- les descriptions longues sans valeur technique ;
- les commentaires redondants avec la signature ;
- les commentaires sur du code trivial sans enjeu de maintenance.

---

## 6. Structure recommandée d’un commentaire

Ordre recommandé :

1. `<summary>`
2. `<remarks>` si nécessaire
3. `<tparam>` pour chaque paramètre template
4. `<param>` pour chaque paramètre
5. `<returns>` si une valeur est retournée
6. `<exception>` si l’exception fait partie du contrat
7. `<value>` pour une constante exposée
8. autres balises utiles (`<example>`, `<seealso>`)

Exemple :

```cpp
/**
 * <summary>
 *   [FR] Convertit une valeur en locale normalisée.
 *   [EN] Converts a value into a normalized locale.
 * </summary>
 * <param name="Value">
 *   [FR] Valeur à convertir.
 *   [EN] Value to convert.
 * </param>
 * <returns>
 *   [FR] La locale normalisée.
 *   [EN] The normalized locale.
 * </returns>
 **/
```

---

## 7. Standard par type d’élément

### 7.1 Classe

```cpp
/**
 * <summary>
 *   [FR] Représente un générateur de traductions YAML.
 *   [EN] Represents a YAML translation generator.
 * </summary>
 * <remarks>
 *   [FR] Ce composant centralise la normalisation des locales,
 *        la collecte des clés et l’écriture des fichiers.
 *   [EN] This component centralizes locale normalization,
 *        key collection, and file writing.
 * </remarks>
 **/
class TranslationGenerator final
{
};
```

### 7.2 Struct

```cpp
/**
 * <summary>
 *   [FR] Représente le résultat d’une génération.
 *   [EN] Represents the result of a generation.
 * </summary>
 **/
struct GenerationResult
{
    bool Success = false;
};
```

### 7.3 Enum

```cpp
/**
 * <summary>
 *   [FR] Représente le niveau de journalisation.
 *   [EN] Represents the logging level.
 * </summary>
 **/
enum class LogLevel
{
    /**
     * <summary>
     *   [FR] Information générale.
     *   [EN] General information.
     * </summary>
     **/
    Information,

    /**
     * <summary>
     *   [FR] Avertissement.
     *   [EN] Warning.
     * </summary>
     **/
    Warning
};
```

### 7.4 Constructeur

```cpp
/**
 * <summary>
 *   [FR] Initialise une nouvelle instance de la classe TranslationGenerator.
 *   [EN] Initializes a new instance of the TranslationGenerator class.
 * </summary>
 * <param name="ProjectDirectory">
 *   [FR] Chemin racine du projet.
 *   [EN] Project root path.
 * </param>
 **/
TranslationGenerator(const std::string& ProjectDirectory);
```

### 7.5 Fonction ou méthode

```cpp
/**
 * <summary>
 *   [FR] Normalise une liste de locales.
 *   [EN] Normalizes a list of locales.
 * </summary>
 * <param name="Locales">
 *   [FR] Valeurs d’entrée à normaliser.
 *   [EN] Input values to normalize.
 * </param>
 * <returns>
 *   [FR] Une liste de locales normalisées.
 *   [EN] A list of normalized locales.
 * </returns>
 **/
std::vector<std::string> NormalizeLocales(const std::vector<std::string>& Locales) const;
```

### 7.6 Fonction template

```cpp
/**
 * <summary>
 *   [FR] Convertit une valeur vers un type cible.
 *   [EN] Converts a value to a target type.
 * </summary>
 * <tparam name="T">
 *   [FR] Type cible de conversion.
 *   [EN] Target conversion type.
 * </tparam>
 * <param name="Value">
 *   [FR] Valeur à convertir.
 *   [EN] Value to convert.
 * </param>
 * <returns>
 *   [FR] La valeur convertie.
 *   [EN] The converted value.
 * </returns>
 **/
template <typename T>
T ConvertTo(const std::string& Value);
```

### 7.7 Fonction avec exception

```cpp
/**
 * <summary>
 *   [FR] Charge le contenu d’un fichier YAML.
 *   [EN] Loads the content of a YAML file.
 * </summary>
 * <param name="FilePath">
 *   [FR] Chemin du fichier à charger.
 *   [EN] Path of the file to load.
 * </param>
 * <returns>
 *   [FR] Le contenu du fichier.
 *   [EN] The file content.
 * </returns>
 * <exception cref="std::runtime_error">
 *   [FR] Levée lorsque le fichier ne peut pas être lu.
 *   [EN] Thrown when the file cannot be read.
 * </exception>
 **/
std::string LoadFile(const std::string& FilePath);
```

### 7.8 Constante exposée

```cpp
/**
 * <summary>
 *   [FR] Représente la locale par défaut.
 *   [EN] Represents the default locale.
 * </summary>
 * <value>
 *   [FR] Valeur constante utilisée lors de l’initialisation.
 *   [EN] Constant value used during initialization.
 * </value>
 **/
inline constexpr const char* DefaultLocale = "fr";
```

---

## 8. Règles de style

### 8.1 Descriptions courtes

Toujours préférer une phrase simple et directe.

### 8.2 Ordre fixe

Toujours écrire `[FR]` avant `[EN]`.

### 8.3 Indentation recommandée

Conserver exactement l’indentation du modèle officiel.

### 8.4 `<remarks>`

Utiliser `<remarks>` uniquement si un complément utile existe.

### 8.5 `<returns>`

Toujours documenter `<returns>` lorsqu’une fonction retourne une valeur. Pour `void`, omettre `<returns>` sauf besoin exceptionnel.

### 8.6 `<exception>`

N’ajouter `<exception>` que si l’exception est réellement importante dans le contrat de la fonction.

### 8.7 Pas de surdocumentation

Ne pas commenter l’évidence.

---

## 9. Types d’éléments à documenter en priorité

Documenter en priorité :

- classes publiques ;
- structs publiques ;
- enums ;
- fonctions publiques ;
- méthodes publiques ;
- constructeurs ;
- templates ;
- constantes exposées ;
- points d’extension ;
- API internes complexes.

---

## 10. Exemple complet recommandé

```cpp
namespace GalacticShrine::Localization
{
    /**
     * <summary>
     *   [FR] Représente un générateur de traductions YAML.
     *   [EN] Represents a YAML translation generator.
     * </summary>
     * <remarks>
     *   [FR] Ce composant centralise la normalisation des locales,
     *        la collecte des clés et l’écriture des fichiers de sortie.
     *   [EN] This component centralizes locale normalization,
     *        key collection, and output file writing.
     * </remarks>
     **/
    class TranslationGenerator final
    {
    public:
        /**
         * <summary>
         *   [FR] Initialise une nouvelle instance de la classe TranslationGenerator.
         *   [EN] Initializes a new instance of the TranslationGenerator class.
         * </summary>
         * <param name="ProjectDirectory">
         *   [FR] Chemin racine du projet.
         *   [EN] Project root path.
         * </param>
         **/
        explicit TranslationGenerator(const std::string& ProjectDirectory);

        /**
         * <summary>
         *   [FR] Normalise une liste de locales.
         *   [EN] Normalizes a list of locales.
         * </summary>
         * <param name="Locales">
         *   [FR] Valeurs d’entrée à normaliser.
         *   [EN] Input values to normalize.
         * </param>
         * <returns>
         *   [FR] Une liste de locales normalisées.
         *   [EN] A list of normalized locales.
         * </returns>
         **/
        std::vector<std::string> NormalizeLocales(const std::vector<std::string>& Locales) const;
    };
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine C++ :

- utiliser le bloc `/** ... **/` ;
- utiliser `<summary>` pour la description principale ;
- écrire d’abord `[FR]`, puis `[EN]` ;
- utiliser `<param>`, `<returns>`, `<exception>`, `<remarks>`, `<tparam>`, `<value>` quand nécessaire ;
- documenter ce qui compte, pas l’évidence ;
- conserver une mise en forme stricte et homogène.

---

## 12. Résumé exécutable

À appliquer dans tous les projets C++ Galactic-Shrine :

- utiliser le format XML documentaire Galactic-Shrine ;
- écrire `[FR]` puis `[EN]` dans chaque balise descriptive ;
- documenter les types exposés, fonctions publiques et API complexes ;
- garder un style court, propre et uniforme ;
- éviter les commentaires inutiles sur le code trivial.
