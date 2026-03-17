---
layout: layouts/standard.njk
title: Galactic-Shrine HTML Coding Standard
description: Ce standard définit la manière d’écrire le code **HTML** dans les projets Galactic-Shrine.
version: 1.0.0
scope: Projets HTML / Templates / Interfaces Web / Emails HTML / Back-office / Composants UI / Fragments de vues
tags: ["HTML", "Codage", "Projets HTML", "Templates", "Interfaces Web", "Emails HTML"]
category: coding
categoryLabel: Codage
summary: Ce standard définit la manière d’écrire le code **HTML** dans les projets Galactic-Shrine.
rawPath: /standards/coding/files/HtmlCodingStandard.md
permalink: /standards/coding/docs/HtmlCodingStandard.html
---

# Galactic-Shrine HTML Coding Standard

**Version:** 1.0.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets HTML / Templates / Interfaces Web / Emails HTML / Back-office / Composants UI / Fragments de vues

---

## 1. Objectif

Ce standard définit la manière d’écrire le code **HTML** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’améliorer la lisibilité du markup ;
- de renforcer la sémantique et l’accessibilité ;
- d’aligner la structure HTML avec les besoins de maintenance ;
- de réduire les structures confuses ou trop couplées au style.

---

## 2. Principes généraux

Le HTML Galactic-Shrine doit être :

- sémantique ;
- lisible ;
- accessible ;
- structuré ;
- minimal sans être obscur.

Le code doit privilégier :

- les balises adaptées au rôle réel du contenu ;
- des attributs explicites ;
- une hiérarchie simple ;
- des hooks JS et CSS stables ;
- la cohérence entre structure, accessibilité et comportement.

---

## 3. Décisions officielles Galactic-Shrine pour HTML

Décisions officielles :

- utiliser d’abord les balises sémantiques natives ;
- éviter les `div` génériques lorsqu’un élément plus précis existe ;
- garder des attributs clairs et ordonnés ;
- préférer des noms de classes stables ;
- utiliser `data-*` pour les hooks techniques ;
- préserver les attributs d’accessibilité nécessaires.

---

## 4. Convention de nommage

- classes CSS : convention projet stable ;
- identifiants `id` : rares, explicites et réellement nécessaires ;
- attributs `data-*` : orientés rôle technique ;
- valeurs d’attributs : courtes et explicites ;
- noms d’ARIA : conformes au rôle et au contrat d’accessibilité.

Exemple :

```html
<section class="GsProfileCard" data-controller="profile-card">
```

---

## 5. Structure recommandée d’un template HTML

Ordre recommandé :

1. structure principale de page ;
2. sections majeures ;
3. composants réutilisables ;
4. zones dynamiques ;
5. scripts ou points d’injection externes selon l’architecture du projet.

Règles :

- une section doit avoir un rôle clair ;
- éviter les imbrications purement décoratives ;
- garder une hiérarchie d’en-têtes cohérente ;
- limiter les wrappers inutiles.

---

## 6. Style d’écriture

### 6.1 Sémantique

- choisir `header`, `main`, `nav`, `section`, `article`, `aside`, `footer` si approprié ;
- réserver `div` et `span` aux cas génériques réels.

### 6.2 Accessibilité

- conserver les labels, rôles et attributs ARIA utiles ;
- ne pas masquer une information essentielle uniquement par la couleur ;
- vérifier les intitulés des actions.

### 6.3 Attributs

- garder un ordre stable des attributs dans le projet ;
- éviter les attributs inutiles ou redondants ;
- distinguer clairement hooks JS, classes CSS et accessibilité.

---

## 7. Règles spécifiques HTML

- éviter le markup généré inutilement complexe ;
- garder des formulaires structurés et compréhensibles ;
- ne pas encoder la logique métier dans le HTML ;
- prévoir des hooks techniques propres pour JavaScript ;
- rester compatible avec le moteur de template utilisé au-dessus si présent.

---

## 8. Gestion des erreurs et robustesse

- prévoir des structures qui restent compréhensibles même si certaines données sont absentes ;
- ne pas casser la sémantique pour un besoin purement visuel ;
- garder un HTML résilient aux contenus dynamiques ;
- ne pas dépendre d’une structure fragile pour le comportement JS.

---

## 9. Types d’éléments à revoir en priorité

Relire en priorité :

- formulaires ;
- modales ;
- navigation ;
- cartes réutilisables ;
- tableaux ;
- listes dynamiques ;
- zones enrichies par JavaScript.

---

## 10. Exemple complet recommandé

```html
<main class="GsProfilePage">
    <section class="GsProfileHeader" aria-labelledby="profile-title">
        <h1 id="profile-title">Profile</h1>
        <p class="GsProfileHeader__Subtitle">Studio member dashboard.</p>
    </section>

    <section class="GsRecentActivity" data-controller="recent-activity" aria-live="polite">
    </section>
</main>
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine HTML :

- HTML sémantique d’abord ;
- classes et hooks techniques stables ;
- structure simple ;
- accessibilité conservée ;
- wrappers inutiles évités.

---

## 12. Résumé exécutable

À appliquer dans tous les projets HTML Galactic-Shrine :

- utiliser la bonne balise pour le bon rôle ;
- garder un markup lisible ;
- préserver l’accessibilité ;
- utiliser `data-*` pour les hooks techniques ;
- éviter les structures décoratives inutiles.
