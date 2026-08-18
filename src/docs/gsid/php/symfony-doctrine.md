---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: php
title: Symfony et Doctrine
navTitle: Symfony & Doctrine
order: 35
permalink: /docs/gsid/php/symfony-doctrine/index.html
---

## Bundle Symfony

```php
return [
    GalacticShrine\GsId\Symfony\GsIdBundle::class => ['all' => true],
];
```

Configuration recommandée :

```yaml
gsid:
    default_case: Lower
    default_text_format: N
    default_json_format: D
    default_database_format: N
    lock: true
```

Le bundle peut enregistrer automatiquement le type Doctrine DBAL `gsid` lorsque `DoctrineBundle` est présent.

## Doctrine DBAL

Depuis la version 2.0, le type Doctrine est situé dans le namespace bridge :

```php
use GalacticShrine\GsId\Bridge\Doctrine\Types\GsidType;
```

Exemple :

```php
#[ORM\Column(type: GsidType::Name, unique: true)]
private ?GsId $id = null;
```

## Bridge Symfony

`GsIdToUid` fournit des conversions utiles pour les routes, DTO, formulaires et serializers Symfony.

```php
use GalacticShrine\GsId\Symfony\Bridge\GsIdToUid;

$value = GsIdToUid::normalizeForRoute($id);
$id = GsIdToUid::denormalizeFromRoute($value);
```

## Migration depuis 1.x

`GalacticShrine\GsId\GsIdDoctrineType` a été supprimé en 2.0. Utilisez désormais :

```php
GalacticShrine\GsId\Bridge\Doctrine\Types\GsidType
```
