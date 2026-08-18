---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: unreal
title: Configuration Unreal Engine
navTitle: Configuration
order: 41
permalink: /docs/gsid/unreal/configuration/index.html
---

## Modules

Le plugin expose un module Runtime `GsId` et un module Editor `GsIdEditor`.

## Intégration C++

Ajoutez `GsId` aux dépendances du module :

```csharp
PublicDependencyModuleNames.Add("GsId");
```

## Sérialisation et réseau

`FGsId` prend en charge la sérialisation binaire `FArchive`, la sérialisation textuelle et `NetSerialize`. Il peut ainsi être utilisé dans les systèmes de réplication Unreal lorsque le contexte du projet l’exige.

## Plateformes

Les sources d’aléa sécurisées utilisées sont :

| Plateforme | Source |
| --- | --- |
| Windows 64 bits | `BCryptGenRandom` |
| Linux | `getrandom` |
| macOS | `SecRandomCopyBytes` |
