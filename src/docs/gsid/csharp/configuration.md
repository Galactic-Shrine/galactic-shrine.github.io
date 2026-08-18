---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: csharp
title: Configuration C#
navTitle: Configuration
order: 21
permalink: /docs/gsid/csharp/configuration/index.html
---

## appsettings.json

```json
{
  "GsId": {
    "DefaultCase": "Lower",
    "DefaultTextFormat": "N",
    "DefaultJsonFormat": "D",
    "DefaultDatabaseFormat": "N",
    "Lock": true
  }
}
```

## Charger la configuration

```csharp
using GalacticShrine.GsId;
using Microsoft.Extensions.Configuration;

IConfiguration configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build();

GsIdOptionsConfiguration.ConfigureFromConfiguration(configuration);
```

## Verrouillage

`GsIdOptions.Lock()` permet de figer les options globales après l’initialisation de l’application.

## Formats rapides

- `ToString("N")` / `ToString("D")` : majuscules ;
- `ToString("n")` / `ToString("d")` : minuscules.
