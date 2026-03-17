# Galactic-Shrine Twig Coding Standard

**Version:** 1.0.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets Twig / Symfony / Layouts / Pages / Partials / Components / Emails / Back-office / Fragments réutilisables

---

## 1. Objectif

Ce standard définit la manière d’écrire le code **Twig** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser les templates Twig ;
- de limiter la logique applicative dans les vues ;
- de garder des layouts et composants lisibles ;
- d’aligner l’organisation Twig avec Symfony et les conventions Galactic-Shrine.

---

## 2. Principes généraux

Le code Twig Galactic-Shrine doit être :

- lisible ;
- structuré ;
- peu chargé en logique ;
- prévisible ;
- compatible avec une maintenance long terme.

Le code doit privilégier :

- des templates ciblés ;
- des blocks utiles ;
- des includes explicites ;
- un contexte de vue préparé en amont ;
- une logique d’affichage simple.

---

## 3. Décisions officielles Galactic-Shrine pour Twig

Décisions officielles :

- garder la logique métier hors Twig ;
- préparer les données dans le contrôleur, le presenter ou la couche dédiée ;
- nommer les blocks, templates et partials de manière explicite ;
- utiliser des variables de contexte claires ;
- limiter les conditions imbriquées dans les vues ;
- conserver une cohérence forte entre layout, partials et composants.

---

## 4. Convention de nommage

- templates : nommés selon leur rôle (`profile/show.html.twig`, `components/user-card.html.twig`) ;
- blocks : explicites ;
- variables Twig : convention du contexte préparé par l’application ;
- macros : rares, ciblées et clairement nommées ;
- fragments : pas de noms vagues.

Lorsque le contexte applicatif appartient à Galactic-Shrine, privilégier des noms clairs et stables.  
Lorsque Twig consomme des structures externes, conserver la convention imposée par la source.

---

## 5. Structure recommandée d’un template Twig

Ordre recommandé :

1. `extends` ou structure principale ;
2. définition des blocks majeurs ;
3. includes ou embeds ciblés ;
4. fragments secondaires ;
5. scripts et hooks spécifiques si nécessaires.

Règles :

- un template doit avoir un rôle identifiable ;
- un partial doit être réellement réutilisable ou spécialisé ;
- ne pas transformer un template en couche métier déguisée.

---

## 6. Style d’écriture

### 6.1 Conditions

- garder des conditions simples ;
- éviter l’enchaînement de logique métier ;
- préparer les états complexes en amont.

### 6.2 Blocks et includes

- créer un `block` pour un vrai point d’extension ;
- utiliser `include` pour les fragments réutilisables ;
- utiliser `embed` seulement si le gain structurel est réel.

### 6.3 Variables

- préférer des variables déjà normalisées ;
- éviter les chaînes d’accès trop profondes répétées ;
- garder les noms du contexte cohérents entre contrôleurs et templates.

---

## 7. Règles spécifiques Twig

- ne pas effectuer de calcul métier important dans Twig ;
- limiter les filtres chaînés difficiles à lire ;
- traiter les permissions et états complexes avant rendu quand possible ;
- garder les composants Twig stables et bien délimités ;
- préserver l’accessibilité du HTML produit.

---

## 8. Gestion des erreurs et robustesse

- prévoir les données optionnelles explicitement ;
- ne pas supposer silencieusement qu’une variable existe si le contrat est flou ;
- centraliser les valeurs par défaut importantes ;
- garder les templates résilients aux contextes partiels raisonnables.

---

## 9. Types d’éléments à revoir en priorité

Relire en priorité :

- layouts ;
- templates de page ;
- composants réutilisables ;
- partials complexes ;
- emails ;
- blocs avec permissions ou états multiples ;
- vues fortement couplées à JavaScript.

---

## 10. Exemple complet recommandé

```twig
{% extends 'layout/base.html.twig' %}

{% block body %}
    <main class="GsProfilePage">
        {% include 'components/profile/header.html.twig' with {
            User: User,
            Statistics: Statistics
        } only %}

        {% if RecentActivities is not empty %}
            {% include 'components/profile/recent-activities.html.twig' with {
                Activities: RecentActivities
            } only %}
        {% endif %}
    </main>
{% endblock %}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine Twig :

- logique métier hors template ;
- templates et partials explicites ;
- contexte préparé en amont ;
- conditions courtes ;
- structure de layout propre et maintenable.

---

## 12. Résumé exécutable

À appliquer dans tous les projets Twig Galactic-Shrine :

- peu de logique dans Twig ;
- blocks et includes ciblés ;
- noms de templates explicites ;
- contexte clair ;
- HTML produit sémantique et stable.
