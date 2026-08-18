---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: csharp
title: Installation C#
navTitle: Installation
order: 20
permalink: /docs/gsid/csharp/index.html
summary: Préparer une application .NET 8 pour utiliser GalacticShrine.GsId.
---

## Prérequis

L’implémentation C# cible **.NET 8 (`net8.0`)**.

Ajoutez la bibliothèque GalacticShrine.GsId à votre solution selon le mode de distribution utilisé par votre projet, puis importez son namespace :

```csharp
using GalacticShrine.GsId;
```

## Vérification

Une fois la référence ajoutée, vous pouvez créer un identifiant :

```csharp
GsId id = GsId.NewGsId();
```
