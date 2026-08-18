---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: cpp
title: Utilisation C++
navTitle: Utilisation
order: 12
permalink: /docs/gsid/cpp/usage/index.html
---

## Générer un identifiant

```cpp
#include <galactic_shrine/gsid/gsid.hpp>

const GalacticShrine::GsId id =
    GalacticShrine::GsId::NewGsId();
```

## Formater un identifiant

```cpp
const auto compact =
    id.ToString(GalacticShrine::GsIdFormat::N);

const auto readable =
    id.ToString(GalacticShrine::GsIdFormat::D);
```

## Parser un identifiant

```cpp
const GalacticShrine::GsId parsed =
    GalacticShrine::GsId::Parse(readable);

if (parsed == id) {
    // Identifiant identique.
}
```

## Compatibilité

Les **32 octets bruts** et les représentations `N` / `D` sont conçus pour rester identiques entre les implémentations compatibles de GsId.

## Aller plus loin

Consultez la [reference API](/docs/gsid/cpp/api/) pour la liste des types et operations publics.
