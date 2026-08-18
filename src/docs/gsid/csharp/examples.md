---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: csharp
title: Exemples C#
navTitle: Exemples
order: 24
permalink: /docs/gsid/csharp/examples/index.html
---

## Exemple avec configuration

```csharp
using GalacticShrine.GsId;
using Microsoft.Extensions.Configuration;

IConfiguration configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build();

GsIdOptionsConfiguration.ConfigureFromConfiguration(configuration);

GsId id = GsId.NewGsId();
Console.WriteLine(id.ToString("N"));
Console.WriteLine(id.ToString("D"));
```

## Exemple de formats

```csharp
Console.WriteLine(id.ToString("N")); // N, majuscules
Console.WriteLine(id.ToString("D")); // D, majuscules
Console.WriteLine(id.ToString("n")); // N, minuscules
Console.WriteLine(id.ToString("d")); // D, minuscules
```
