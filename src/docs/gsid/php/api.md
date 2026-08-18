---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: php
title: Reference API PHP
navTitle: API
order: 33
permalink: /docs/gsid/php/api/index.html
summary: Reference de l API PHP pure exposee par galactic-shrine/gsid.
---

## GsId

`GsId` est une classe finale implementant `JsonSerializable` et `Stringable`.

### Creation

```php
GsId::newGsId();
GsId::fromString($value);
GsId::tryFromString($value);
GsId::fromBytes($bytes);
GsId::fromNormalized($value);
GsId::empty();
```

`fromBytes()` attend une chaine binaire de **32 octets**. `fromNormalized()` attend exactement **64 caracteres hexadecimaux**.

### Etat et representations

```php
$id->isEmpty();
$id->normalized();
$id->normalized(GsIdCase::Lower);
$id->toString();
$id->toString(GsIdFormat::D, GsIdCase::Upper);
$id->toBytes();
$id->equals($other);
```

`jsonSerialize()` utilise `GsIdOptions::getDefaultJsonFormat()` et la casse globale. `__toString()` utilise les options texte globales.

## GsIdParser

```php
GsIdParser::parse($value);
GsIdParser::tryParse($value);
GsIdParser::normalize($value);
GsIdParser::normalize($value, GsIdCase::Lower);
```

`tryParse()` retourne `null` lorsqu une valeur ne peut pas etre analysee.

## GsIdValidator

La classe fournit la validation generale et la validation selon un format attendu (`N` ou `D`).

## GsIdOptions

Getters/setters disponibles pour la casse et les formats texte, JSON et base de donnees. Les operations globales sont :

```php
GsIdOptions::configure(...);
GsIdOptions::lock();
GsIdOptions::isLocked();
GsIdOptions::reset();
```

Les valeurs par defaut sont `Upper`, `D`, `D`, `N`.

## Types auxiliaires

- `GsIdCase` ;
- `GsIdFormat` ;
- `GsIdConstants` ;
- `GsIdGenerator` ;
- `GsIdException`.

## Contrats PHP

Le support natif de `Stringable` permet d utiliser directement `(string) $id`. `JsonSerializable` permet a `json_encode()` de produire la representation configuree sans adaptateur supplementaire.
