---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: unreal
title: Exemples Unreal Engine
navTitle: Exemples
order: 44
permalink: /docs/gsid/unreal/examples/index.html
---

## Exemple C++

```cpp
#include "GsId.h"

const FGsId Id = FGsId::NewGsId();
const FString Text = Id.ToString(EGsIdFormat::D);

FGsId Parsed;
if (FGsId::Parse(Text, Parsed))
{
    check(Id == Parsed);
}
```

## API native C++20

```cpp
#include <galactic_shrine/gsid/gsid.hpp>

const GalacticShrine::GsId Id =
    GalacticShrine::GsId::NewGsId();
```

## Exemple Blueprint

Dans Blueprint, utilisez **New GsId** pour créer un identifiant puis **To String** pour obtenir sa représentation texte. **Try New GsId** est recommandé lorsque le projet doit gérer explicitement une éventuelle erreur du générateur sécurisé.
