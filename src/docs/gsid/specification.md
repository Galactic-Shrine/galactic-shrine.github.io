---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
title: Specification GsId
navTitle: Specification
order: 2
permalink: /docs/gsid/specification/index.html
summary: Regles communes de representation, parsing, validation et interoperabilite du GsId 256 bits.
---

## Taille et representation

Un **GsId** contient exactement **256 bits**, soit **32 octets**. Les implementations officielles conservent les octets dans le meme ordre afin de permettre des echanges interlangages sans conversion structurelle.

| Constante | Valeur |
| --- | ---: |
| Taille binaire | 32 octets |
| Format `N` | 64 caracteres hexadecimaux |
| Format `D` | 69 caracteres |
| Nombre de tirets en `D` | 5 |
| Groupement `D` | `16-8-8-8-8-16` |

## Formats texte

### Format N

Le format `N` est la representation normalisee sans separateur :

```text
0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
```

### Format D

Le format `D` utilise cinq tirets aux positions officielles :

```text
0123456789abcdef-01234567-89abcdef-01234567-89abcdef-0123456789abcdef
```

## Casse

Les APIs communes proposent les variantes **Upper** et **Lower**. Les raccourcis de format `N` / `D` utilisent la majuscule, tandis que `n` / `d` utilisent la minuscule dans les implementations qui exposent une API de formatage par caractere.

## Parsing et normalisation

Le parsing accepte les formats `N` et `D`, avec espaces exterieurs ignores par les parseurs officiels. Le format `D` doit utiliser exactement les positions de tirets definies par le standard. Une valeur non hexadecimale ou de mauvaise longueur est rejetee.

## Valeur vide

La valeur vide est composee de **32 octets a zero**, soit 64 caracteres `0` au format `N`.

## Interoperabilite

Un GsId produit en C++, C#, PHP ou Unreal Engine doit conserver :

- les memes 32 octets bruts ;
- la meme representation `N` ;
- la meme representation `D` ;
- les memes regles de casse et de validation.

Cette compatibilite permet de stocker un GsId dans un service .NET, de le transmettre a une API PHP et de le consommer dans une application native ou Unreal Engine sans remappage des octets.
