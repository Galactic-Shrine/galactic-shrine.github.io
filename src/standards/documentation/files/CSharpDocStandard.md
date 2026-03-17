# Galactic-Shrine C# Documentation Standard

**Version:** 1.2.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets C# / .NET / Bibliothèques / Applications Console / WinForms / WPF / ASP.NET / Outils internes

---

## 1. Objectif

Ce standard définit la manière de documenter le code **C#** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser la documentation du code ;
- de conserver un style bilingue `[FR] / [EN]` ;
- de rester cohérent avec la convention documentaire Galactic-Shrine ;
- de conserver une structure visuelle homogène ;
- de documenter proprement les types et membres importants.

---

## 2. Principes généraux

La documentation C# Galactic-Shrine doit être :

- claire ;
- concise ;
- bilingue ;
- contractuelle ;
- utile techniquement.

La documentation doit privilégier :

- le format documentaire XML utilisé dans le standard Galactic-Shrine ;
- les descriptions courtes ;
- les balises XML utiles au contrat public ;
- les explications techniques réelles, sans surdocumentation.

---

## 3. Format obligatoire des blocs

Toujours utiliser le format suivant :

```csharp
/**
 * <summary>
 *   [FR] Génère les fichiers de traduction.
 *   [EN] Generates translation files.
 * </summary>
 **/
```

Ce format constitue le standard officiel recommandé pour Galactic-Shrine C#.

---

## 4. Convention bilingue

Chaque balise descriptive doit suivre l’ordre suivant :

1. ligne française `[FR]`
2. ligne anglaise `[EN]`

Exemple :

```csharp
/**
 * <summary>
 *   [FR] Recherche un fichier de configuration.
 *   [EN] Searches for a configuration file.
 * </summary>
 **/
```

---

## 5. Éléments autorisés

Éléments autorisés dans les commentaires C# Galactic-Shrine :

- texte libre avec `[FR]` et `[EN]`
- `<summary>`
- `<remarks>`
- `<param>`
- `<typeparam>`
- `<returns>`
- `<exception>`
- `<value>`
- `<example>`
- `<seealso>`

Éléments déconseillés :

- les descriptions longues sans valeur contractuelle ;
- les balises inutiles sur du code trivial ;
- les commentaires redondants avec le nom du membre sans contexte supplémentaire.

---

## 6. Structure recommandée d’un commentaire

Ordre recommandé :

1. `<summary>`
2. `<remarks>` si nécessaire
3. `<typeparam>` pour chaque paramètre générique
4. `<param>` pour chaque paramètre
5. `<returns>` si une valeur est retournée
6. `<exception>` si l’exception fait partie du contrat
7. `<value>` pour une propriété lorsque cela apporte une vraie valeur
8. autres balises utiles (`<example>`, `<seealso>`)

Exemple :

```csharp
/**
 * <summary>
 *   [FR] Convertit une valeur brute en locale normalisée.
 *   [EN] Converts a raw value into a normalized locale.
 * </summary>
 * <param name="value">
 *   [FR] Valeur d’entrée à convertir.
 *   [EN] Input value to convert.
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

```csharp
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
public sealed class TranslationGenerator
{
}
```

### 7.2 Interface

```csharp
/**
 * <summary>
 *   [FR] Définit le contrat d’un générateur de traductions.
 *   [EN] Defines the contract of a translation generator.
 * </summary>
 **/
public interface ITranslationGenerator
{
}
```

### 7.3 Enum

```csharp
/**
 * <summary>
 *   [FR] Représente le niveau de journalisation.
 *   [EN] Represents the logging level.
 * </summary>
 **/
public enum LogLevel
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
}
```

### 7.4 Propriété

```csharp
/**
 * <summary>
 *   [FR] Obtient ou définit la locale active.
 *   [EN] Gets or sets the active locale.
 * </summary>
 * <value>
 *   [FR] Une valeur normalisée, par exemple <c>fr</c> ou <c>en</c>.
 *   [EN] A normalized value, for example <c>fr</c> or <c>en</c>.
 * </value>
 **/
public string Locale { get; set; } = "fr";
```

### 7.5 Constructeur

```csharp
/**
 * <summary>
 *   [FR] Initialise une nouvelle instance de la classe <see cref="TranslationGenerator"/>.
 *   [EN] Initializes a new instance of the <see cref="TranslationGenerator"/> class.
 * </summary>
 * <param name="projectDirectory">
 *   [FR] Chemin racine du projet.
 *   [EN] Project root path.
 * </param>
 **/
public TranslationGenerator(string projectDirectory)
{
}
```

### 7.6 Méthode

```csharp
/**
 * <summary>
 *   [FR] Normalise une liste de locales.
 *   [EN] Normalizes a list of locales.
 * </summary>
 * <param name="locales">
 *   [FR] Valeurs d’entrée à normaliser.
 *   [EN] Input values to normalize.
 * </param>
 * <returns>
 *   [FR] Une liste de locales normalisées.
 *   [EN] A list of normalized locales.
 * </returns>
 **/
public IReadOnlyList<string> NormalizeLocales(IEnumerable<string>? locales)
{
}
```

### 7.7 Méthode générique

```csharp
/**
 * <summary>
 *   [FR] Convertit une valeur vers un type cible.
 *   [EN] Converts a value to a target type.
 * </summary>
 * <typeparam name="T">
 *   [FR] Type cible de conversion.
 *   [EN] Target conversion type.
 * </typeparam>
 * <param name="value">
 *   [FR] Valeur à convertir.
 *   [EN] Value to convert.
 * </param>
 * <returns>
 *   [FR] La valeur convertie.
 *   [EN] The converted value.
 * </returns>
 **/
public static T ConvertTo<T>(object? value)
{
}
```

### 7.8 Méthode avec exception

```csharp
/**
 * <summary>
 *   [FR] Charge le contenu d’un fichier YAML.
 *   [EN] Loads the content of a YAML file.
 * </summary>
 * <param name="filePath">
 *   [FR] Chemin du fichier à charger.
 *   [EN] Path of the file to load.
 * </param>
 * <returns>
 *   [FR] Le contenu du fichier.
 *   [EN] The file content.
 * </returns>
 * <exception cref="ArgumentException">
 *   [FR] Levée lorsque le chemin est vide.
 *   [EN] Thrown when the path is empty.
 * </exception>
 **/
public string LoadFile(string filePath)
{
}
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

Toujours documenter `<returns>` lorsqu’une méthode retourne une valeur.

### 8.6 `<exception>`

N’ajouter `<exception>` que si l’exception est réellement importante dans le contrat de la méthode.

### 8.7 Pas de surdocumentation

Ne pas commenter l’évidence.

---

## 9. Types d’éléments à documenter en priorité

Documenter en priorité :

- classes publiques ;
- interfaces ;
- structs publiques ;
- enums ;
- méthodes publiques ;
- propriétés publiques ;
- événements publics ;
- méthodes génériques ;
- points d’extension ;
- API internes complexes.

---

## 10. Exemple complet recommandé

```csharp
namespace GalacticShrine.Localization;

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
public sealed class TranslationGenerator
{
    /**
     * <summary>
     *   [FR] Obtient le répertoire racine du projet.
     *   [EN] Gets the project root directory.
     * </summary>
     **/
    public string ProjectDirectory { get; }

    /**
     * <summary>
     *   [FR] Initialise une nouvelle instance de la classe <see cref="TranslationGenerator"/>.
     *   [EN] Initializes a new instance of the <see cref="TranslationGenerator"/> class.
     * </summary>
     * <param name="projectDirectory">
     *   [FR] Chemin racine du projet.
     *   [EN] Project root path.
     * </param>
     **/
    public TranslationGenerator(string projectDirectory)
    {
        ProjectDirectory = projectDirectory;
    }

    /**
     * <summary>
     *   [FR] Normalise une liste de locales.
     *   [EN] Normalizes a list of locales.
     * </summary>
     * <param name="locales">
     *   [FR] Valeurs d’entrée à normaliser.
     *   [EN] Input values to normalize.
     * </param>
     * <returns>
     *   [FR] Une liste de locales normalisées.
     *   [EN] A list of normalized locales.
     * </returns>
     **/
    public IReadOnlyList<string> NormalizeLocales(IEnumerable<string>? locales)
    {
        return Array.Empty<string>();
    }
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine C# :

- utiliser le bloc `/** ... **/` ;
- utiliser `<summary>` pour la description principale ;
- écrire d’abord `[FR]`, puis `[EN]` ;
- utiliser `<param>`, `<returns>`, `<exception>`, `<remarks>`, `<typeparam>`, `<value>` quand nécessaire ;
- documenter ce qui compte, pas l’évidence ;
- conserver une mise en forme stricte et homogène.

---

## 12. Résumé exécutable

À appliquer dans tous les projets C# Galactic-Shrine :

- utiliser le format XML documentaire Galactic-Shrine ;
- écrire `[FR]` puis `[EN]` dans chaque balise descriptive ;
- documenter les types publics, membres publics et API complexes ;
- garder un style court, propre et uniforme ;
- éviter les commentaires inutiles sur le code trivial.
