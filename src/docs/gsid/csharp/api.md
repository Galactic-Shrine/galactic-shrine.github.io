---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: csharp
title: Reference API C#
navTitle: API
order: 23
permalink: /docs/gsid/csharp/api/index.html
summary: Reference des types publics de GalacticShrine.GsId pour .NET 8.
---

## GsId

`GsId` est un `readonly struct` implementant `IEquatable<GsId>` et `IFormattable`.

### Creation et parsing

```csharp
GsId.Empty;
GsId.NewGsId();
GsId.Parse(value);
GsId.TryParse(value, out var result);
```

### Etat et octets

```csharp
id.IsEmpty;
byte[] bytes = id.ToByteArray();
```

### Formatage

```csharp
id.ToString();
id.ToString(GsIdFormat.N);
id.ToString(GsIdFormat.D, GsIdCase.Lower);
id.ToNormalizedString();
id.ToNormalizedString(GsIdCase.Lower);
id.ToString("n", null);
```

`TryFormat(Span<char>, out int, ...)` permet d ecrire dans un buffer existant. Les formats `N`, `D`, `n` et `d` suivent les memes conventions que les autres implementations.

## GsIdParser

```csharp
GsIdParser.Parse(value);
GsIdParser.TryParse(value, out var result);
GsIdParser.Normalize(value);
GsIdParser.Normalize(value, GsIdCase.Lower);
```

Le parseur valide les longueurs 64/69, les caracteres hexadecimaux et les positions officielles des tirets du format `D`.

## GsIdValidator

```csharp
GsIdValidator.IsValid(value);
GsIdValidator.IsValid(value, GsIdFormat.N);
GsIdValidator.IsValid(value, GsIdFormat.D);
```

## GsIdOptions

Proprietes globales :

- `DefaultCase`
- `DefaultTextFormat`
- `DefaultJsonFormat`
- `DefaultDatabaseFormat`
- `IsLocked`

Methodes :

```csharp
GsIdOptions.Configure(...);
GsIdOptions.Lock();
GsIdOptions.Reset();
```

Les valeurs par defaut sont `Upper`, `D`, `D`, `N`.

## GsIdOptionsConfiguration

Cette classe charge les options GsId depuis `Microsoft.Extensions.Configuration`. Elle permet de centraliser la configuration dans `appsettings.json` et d appliquer eventuellement le verrouillage apres chargement.

## GsIdJsonConverter

`GsIdJsonConverter` derive de `JsonConverter<GsId>` et supporte :

```csharp
new GsIdJsonConverter();
new GsIdJsonConverter(GsIdFormat.N);
new GsIdJsonConverter(GsIdFormat.D, GsIdCase.Lower);
```

La lecture attend une chaine JSON non vide. L ecriture utilise soit le format/casse fournis au constructeur, soit `GsIdOptions.DefaultJsonFormat` et `DefaultCase`.

## Types auxiliaires

- `GsIdCase` : `Upper`, `Lower` ;
- `GsIdFormat` : `N`, `D` ;
- `GsIdConstants` : longueurs et constantes du format ;
- `GsIdGenerator` : generation aleatoire ;
- `GsIdException` : exception specifique GsId.
