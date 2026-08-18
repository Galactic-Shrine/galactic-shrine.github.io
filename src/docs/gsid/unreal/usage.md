---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: unreal
title: Utilisation Unreal Engine
navTitle: Utilisation
order: 42
permalink: /docs/gsid/unreal/usage/index.html
---

## Génération C++

```cpp
#include "GsId.h"

const FGsId Id = FGsId::NewGsId();
```

## Formatage et parsing

```cpp
const FString Text = Id.ToString(EGsIdFormat::D);

FGsId Parsed;
if (FGsId::Parse(Text, Parsed))
{
    check(Id == Parsed);
}
```

## Conversion brute

Le type permet la conversion vers et depuis les **32 octets** représentant le GsId.

## Blueprint

Les opérations courantes sont également exposées aux Blueprints : génération, parsing, formatage et conversion.

## Aller plus loin

Consultez la [reference API](/docs/gsid/unreal/api/) pour la liste des types et operations publics.
