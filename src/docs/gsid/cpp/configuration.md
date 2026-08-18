---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: cpp
title: Configuration C++
navTitle: Configuration
order: 11
permalink: /docs/gsid/cpp/configuration/index.html
---

## Options globales

L’API publique utilise la namespace `GalacticShrine`. Les valeurs par défaut peuvent être configurées via `GsIdOptions`.

```cpp
GalacticShrine::GsIdOptions::Configure(
    GalacticShrine::GsIdCase::Lower,
    GalacticShrine::GsIdFormat::N,
    GalacticShrine::GsIdFormat::D,
    GalacticShrine::GsIdFormat::N);
```

Cette configuration permet notamment de choisir la casse et les formats utilisés par défaut pour le texte, le JSON et les usages de stockage.

## Formats rapides

- `ToString('N')` : format N en majuscules ;
- `ToString('D')` : format D en majuscules ;
- `ToString('n')` : format N en minuscules ;
- `ToString('d')` : format D en minuscules.

## JSON optionnel

L’adaptateur `nlohmann::json` reste optionnel et n’ajoute pas de dépendance au cœur de la bibliothèque.

```cpp
#include <galactic_shrine/gsid/nlohmann_json.hpp>
```
