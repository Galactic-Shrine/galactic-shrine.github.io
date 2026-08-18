---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: php
title: Utilisation PHP
navTitle: Utilisation
order: 32
permalink: /docs/gsid/php/usage/index.html
---

## Générer un GsId

```php
use GalacticShrine\GsId\GsId;

$id = GsId::newGsId();
```

## Formater

```php
use GalacticShrine\GsId\GsIdCase;
use GalacticShrine\GsId\GsIdFormat;

echo $id->toString(GsIdFormat::N, GsIdCase::Lower);
echo $id->toString(GsIdFormat::D, GsIdCase::Upper);
```

## Parser et valider

```php
use GalacticShrine\GsId\GsIdValidator;

$parsed = GsId::fromString((string) $id);

if (GsIdValidator::isValid((string) $id)) {
    // Identifiant valide.
}
```

## Aller plus loin

Consultez la [reference API](/docs/gsid/php/api/) pour la liste des types et operations publics.
