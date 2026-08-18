---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: php
title: Configuration PHP
navTitle: Configuration
order: 31
permalink: /docs/gsid/php/configuration/index.html
---

## Options globales

```php
use GalacticShrine\GsId\GsIdCase;
use GalacticShrine\GsId\GsIdFormat;
use GalacticShrine\GsId\GsIdOptions;

GsIdOptions::configure(
    defaultCase: GsIdCase::Lower,
    defaultTextFormat: GsIdFormat::N,
    defaultJsonFormat: GsIdFormat::D,
    defaultDatabaseFormat: GsIdFormat::N,
);

GsIdOptions::lock();
```

`lock()` empêche la modification de la configuration après l’initialisation de l’application.

## Formats

- `N` : 64 caractères hexadécimaux sans séparateur ;
- `D` : 69 caractères, groupés en `16-8-8-8-8-16`.
