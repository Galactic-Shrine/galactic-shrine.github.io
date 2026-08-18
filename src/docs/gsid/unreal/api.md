---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: unreal
title: Reference API Unreal Engine
navTitle: API
order: 43
permalink: /docs/gsid/unreal/api/index.html
summary: Reference des APIs FGsId, serialization, reseau et Blueprint.
---

## Enumerations Blueprint

### EGsIdFormat

- `N` : 64 caracteres hexadecimaux ;
- `D` : groupement `16-8-8-8-8-16`.

### EGsIdLetterCase

- `Upper`
- `Lower`

## FGsId

`FGsId` est un `USTRUCT(BlueprintType)` de **32 octets exactement**.

### Constantes

- `ByteLength = 32`
- `NormalizedStringLength = 64`
- `FormattedStringLength = 69`

### Creation

```cpp
FGsId::Empty();
FGsId::NewGsId();
FGsId::TryNewGsId(OutGsId);
FGsId::FromBytes(...);
FGsId::CreateDeterministic(...);
```

`CreateDeterministic` fournit une generation deterministe basee sur les octets d entree.

### Parsing et formatage

```cpp
FGsId::Parse(Value, OutGsId);
FGsId::ParseExact(Value, Format, OutGsId);
id.ToString(EGsIdFormat::D, EGsIdLetterCase::Upper);
```

### Etat et octets

```cpp
id.IsEmpty();
id.IsValid();
id.GetBytes();
id.CopyBytes(...);
id.ToByteArray();
```

### Integration C++ native

Lorsque `CPP` est disponible, `FGsId` peut etre construit depuis `GalacticShrine::GsId` et reconverti avec `ToNative()`.

## Serialisation Unreal

`FGsId` expose :

- `Serialize(FArchive&)` ;
- `ExportTextItem(...)` ;
- `ImportTextItem(...)` ;
- `NetSerialize(...)` ;
- `operator<<` pour `FArchive` ;
- `LexToString` et `LexFromString`.

Les `TStructOpsTypeTraits` activent la serialisation, le texte, le net serializer, l egalite structurelle, le zero constructor et l absence de destructeur.

## Comparaison et hash

`FGsId` implemente `==`, `!=`, `<`, `>`, `<=`, `>=` et `GetTypeHash`.

## UGsIdBlueprintLibrary

Noeuds exposes :

- `New GsId`
- `Try New GsId`
- `Empty GsId`
- `Is Empty`
- `Is Valid`
- `Equal (GsId)`
- `Not Equal (GsId)`
- `Less (GsId)`
- `To String`
- `Parse`
- `To Bytes`
- `From Bytes`
- `Create Deterministic GsId`
- `Get Stable Hash`

## Modules du plugin

Le plugin declare un module Runtime `GsId` et un module Editor `GsIdEditor`. Les plateformes cibles annoncees sont Win64, Linux et Mac.
