---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: csharp
title: Utilisation C#
navTitle: Utilisation
order: 22
permalink: /docs/gsid/csharp/usage/index.html
---

## Génération

```csharp
using GalacticShrine.GsId;

GsId id = GsId.NewGsId();
```

## Représentation texte

```csharp
string compact = id.ToString("N");
string readable = id.ToString("D");
string compactLower = id.ToString("n");
```

## Principes

L’implémentation fournit les opérations de génération, parsing, validation et sérialisation d’un GsId 256 bits. Les formats `N` et `D` sont communs aux autres implémentations officielles.

## Aller plus loin

Consultez la [reference API](/docs/gsid/csharp/api/) pour la liste des types et operations publics.
