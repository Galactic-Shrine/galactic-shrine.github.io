---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: unreal
title: Installation Unreal Engine
navTitle: Installation
order: 40
permalink: /docs/gsid/unreal/index.html
summary: Installer le plugin GsId dans un projet Unreal Engine 5.8.
---

## Installation dans un projet

Copiez le dossier `GsId` dans :

```text
<Project>/Plugins/GsId/
```

Ou installez-le au niveau du moteur :

```text
<UnrealEngine>/Engine/Plugins/Marketplace/GsId/
```

Activez ensuite **GsId** dans le gestionnaire de plugins et recompilez le projet.

## Dépendance C++

Dans le fichier `.Build.cs` du module consommateur :

```csharp
PublicDependencyModuleNames.Add("GsId");
```
