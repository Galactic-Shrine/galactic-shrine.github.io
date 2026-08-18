---
layout: layouts/project-doc.njk
tags: projectDocs
projectId: gsid
implementationId: php
title: Installation PHP
navTitle: Installation
order: 30
permalink: /docs/gsid/php/index.html
summary: Installer le package galactic-shrine/gsid dans une application PHP 8.1+.
---

## Prérequis

La branche 2.x nécessite **PHP 8.1 ou supérieur**.

## Composer

```bash
composer require galactic-shrine/gsid:^2.0
```

Le package fournit le cœur PHP, un type Doctrine DBAL, un bundle Symfony optionnel, un bridge Symfony et un modèle de recipe Symfony Flex.
