---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: unreal
title: C++ et Blueprint
navTitle: C++ & Blueprint
order: 45
permalink: /docs/gsid/unreal/cpp-blueprint/index.html
---

## API Unreal C++

Le type principal exposé par le plugin est `FGsId`.

```cpp
const FGsId Id = FGsId::NewGsId();
```

Il prend en charge comparaison, ordre et `GetTypeHash`, ainsi que les mécanismes de sérialisation Unreal.

## API C++20 native

L’implémentation C++20 native intégrée reste accessible :

```cpp
#include <galactic_shrine/gsid/gsid.hpp>

const GalacticShrine::GsId Id =
    GalacticShrine::GsId::NewGsId();
```

## Blueprint

La bibliothèque Blueprint fournit notamment :

- `New GsId` ;
- `Try New GsId` ;
- `Parse` ;
- `Parse Exact` ;
- `To String` ;
- `To Bytes` ;
- `From Bytes` ;
- `Create Deterministic GsId` ;
- `Get Stable Hash`.

`Create Deterministic GsId` permet notamment de produire un identifiant déterministe basé sur SHA-256.
