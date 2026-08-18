---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: cpp
title: Reference API C++
navTitle: API
order: 13
permalink: /docs/gsid/cpp/api/index.html
summary: Reference de l API publique exposee par GalacticShrine.GsId.Cpp.
---

## Enumerations

### GsIdCase

- `GsIdCase::Upper`
- `GsIdCase::Lower`

### GsIdFormat

- `GsIdFormat::N`
- `GsIdFormat::D`

## GsIdConstants

La structure expose `ByteLength`, `HexLength`, `FormattedLength`, `HyphenCount` et `DGroupPattern`.

## GsId

Le type principal utilise `std::array<std::uint8_t, 32>` via l alias `ByteArray`.

### Construction et generation

```cpp
GsId::Empty();
GsId::NewGsId();
GsId::FromBytes(bytes);
GsId::FromNormalized(value);
GsId::FromString(value);
```

### Parsing

```cpp
GsId::Parse(value);
GsId::TryParse(value, result);
GsId::TryParse(value); // std::optional<GsId>
```

### Etat et octets

```cpp
id.IsEmpty();
id.Bytes();
id.ToByteArray();
```

### Formatage

```cpp
id.ToString();
id.ToString(GsIdFormat::N);
id.ToString(GsIdFormat::D, GsIdCase::Lower);
id.ToString('n');
id.ToNormalizedString();
id.ToNormalizedString(GsIdCase::Lower);
```

`TryFormat` dispose de surcharges permettant d ecrire directement dans un `std::span<char>` et de recuperer le nombre de caracteres ecrits sans allocation de chaine.

### Comparaison et hash

`GsId` fournit `==`, `!=`, `<=>`, un operateur de flux `operator<<` et une specialisation `std::hash<GalacticShrine::GsId>`.

## GsIdOptions

Les options globales exposent les valeurs par defaut de casse, de format texte, JSON et base de donnees.

```cpp
GsIdOptions::GetDefaultCase();
GsIdOptions::GetDefaultTextFormat();
GsIdOptions::GetDefaultJsonFormat();
GsIdOptions::GetDefaultDatabaseFormat();
GsIdOptions::GetValues();
GsIdOptions::IsLocked();

GsIdOptions::SetDefaultCase(...);
GsIdOptions::SetDefaultTextFormat(...);
GsIdOptions::SetDefaultJsonFormat(...);
GsIdOptions::SetDefaultDatabaseFormat(...);
GsIdOptions::Configure(...);
GsIdOptions::Lock();
GsIdOptions::Reset();
```

## GsIdGenerator

`GsIdGenerator::NewGsId()` fournit le generateur bas niveau utilise par `GsId::NewGsId()`.

## GsIdParser

```cpp
GsIdParser::Parse(value);
GsIdParser::TryParse(value, result);
GsIdParser::TryParse(value);
GsIdParser::Normalize(value);
GsIdParser::Normalize(value, GsIdCase::Lower);
```

## GsIdValidator

```cpp
GsIdValidator::IsValid(value);
GsIdValidator::IsValid(value, GsIdFormat::N);
```

## Exception

`GsIdException` derive de `std::runtime_error` et represente les erreurs propres au parsing et aux operations GsId.

## Integration nlohmann::json

L en-tete optionnel `galactic_shrine/gsid/nlohmann_json.hpp` ajoute les conversions JSON sans rendre `nlohmann/json` obligatoire pour le coeur de la bibliotheque.
