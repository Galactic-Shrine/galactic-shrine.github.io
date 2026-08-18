---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: cpp
title: Exemples C++
navTitle: Exemples
order: 14
permalink: /docs/gsid/cpp/examples/index.html
---

## Exemple complet

```cpp
#include <galactic_shrine/gsid/gsid.hpp>
#include <iostream>

int main()
{
    GalacticShrine::GsIdOptions::Configure(
        GalacticShrine::GsIdCase::Lower,
        GalacticShrine::GsIdFormat::N,
        GalacticShrine::GsIdFormat::D,
        GalacticShrine::GsIdFormat::N);

    const auto id = GalacticShrine::GsId::NewGsId();

    std::cout << id.ToString(GalacticShrine::GsIdFormat::N) << '\n';
    std::cout << id.ToString(GalacticShrine::GsIdFormat::D) << '\n';

    const auto parsed =
        GalacticShrine::GsId::Parse(
            id.ToString(GalacticShrine::GsIdFormat::D));

    return parsed == id ? 0 : 1;
}
```

## Exemple JSON

```cpp
#include <galactic_shrine/gsid/nlohmann_json.hpp>

nlohmann::json json = id;
GalacticShrine::GsId restored =
    json.get<GalacticShrine::GsId>();
```
