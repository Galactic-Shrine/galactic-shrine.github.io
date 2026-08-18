---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: php
title: Exemples PHP
navTitle: Exemples
order: 34
permalink: /docs/gsid/php/examples/index.html
---

## Exemple PHP pur

```php
use GalacticShrine\GsId\GsId;
use GalacticShrine\GsId\GsIdCase;
use GalacticShrine\GsId\GsIdFormat;
use GalacticShrine\GsId\GsIdValidator;

$id = GsId::newGsId();

echo $id->toString(GsIdFormat::N, GsIdCase::Lower);
echo $id->toString(GsIdFormat::D, GsIdCase::Upper);

$parsed = GsId::fromString((string) $id);

if (GsIdValidator::isValid((string) $id)) {
    echo "GsId valide";
}
```

## Exemple Doctrine

```php
#[ORM\Column(type: 'gsid')]
private ?GsId $id = null;
```
