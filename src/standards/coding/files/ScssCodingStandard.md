# Galactic-Shrine SCSS Coding Standard

**Version:** 1.0.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Projets SCSS / Design Systems / UI Kits / Frameworks CSS / Applications Web / Interfaces d’administration / Sites et produits front-end

---

## 1. Objectif

Ce standard définit la manière d’écrire le code **SCSS** dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser la structure SCSS ;
- d’améliorer la maintenabilité du style ;
- de limiter la dérive de sélecteurs, variables et mixins ;
- d’aligner le nommage applicatif avec Galactic-Shrine.

---

## 2. Principes généraux

Le code SCSS Galactic-Shrine doit être :

- structuré ;
- lisible ;
- modulaire ;
- prévisible ;
- raisonnablement découplé.

Le code doit privilégier :

- des tokens cohérents ;
- des composants réutilisables ;
- une profondeur de nesting limitée ;
- des noms de classes explicites ;
- une séparation claire entre base, layout, composants, utilitaires et thèmes.

---

## 3. Décisions officielles Galactic-Shrine pour SCSS

Décisions officielles :

- variables, mixins et fonctions SCSS : `PascalCase` ;
- paramètres de mixins et fonctions : `PascalCase` ;
- placeholders : nom explicite et stable ;
- classes CSS produites : convention projet, stable et lisible ;
- fichiers partiels : nom aligné sur la responsabilité ;
- tokens et maps : regroupés par domaine.

Exemple :

```scss
$PrimaryColor: #20c997;
$DangerColor: #e42217;

@mixin ButtonVariant($BackgroundColor, $TextColor) {
    background-color: $BackgroundColor;
    color: $TextColor;
}
```

---

## 4. Convention de nommage

- variables SCSS : `$PascalCase` ;
- mixins : `PascalCase` ;
- fonctions : `PascalCase` ;
- paramètres : `$PascalCase` ;
- placeholders : `%PascalCase` ;
- maps : `$PascalCase` ;
- classes CSS : convention choisie par le projet, mais stable sur l’ensemble du système ;
- fichiers partiels : `_Button.scss`, `_Form.scss`, `_Spacing.scss`, etc.

---

## 5. Structure recommandée d’un fichier SCSS

Ordre recommandé :

1. `@use` / `@forward` ;
2. variables ou maps locales ;
3. fonctions ;
4. mixins ;
5. placeholders ;
6. règles de composants ou utilitaires.

Règles :

- éviter de mélanger tokens, composants et overrides ad hoc ;
- un fichier doit avoir une responsabilité identifiable ;
- centraliser les tokens partagés ;
- éviter les dépendances circulaires entre partiels.

---

## 6. Style d’écriture

### 6.1 Nesting

- limiter la profondeur de nesting ;
- éviter les sélecteurs difficiles à surcharger ;
- ne pas reproduire toute la structure DOM dans le SCSS.

### 6.2 Spécificité

- garder une spécificité faible autant que possible ;
- éviter `!important` hors cas justifiés ;
- préférer la composition à l’escalade de sélecteurs.

### 6.3 Tokens

- utiliser des variables de design plutôt que des valeurs dupliquées ;
- centraliser couleurs, espacements, rayons, tailles et z-index critiques ;
- éviter les “magic numbers” répétées.

### 6.4 Mixins et fonctions

- créer un mixin ou une fonction seulement si le gain réel existe ;
- éviter les API SCSS trop abstraites ;
- garder des signatures courtes et compréhensibles.

---

## 7. Règles spécifiques SCSS

- séparer base, layout, components, utilities, themes quand le projet le justifie ;
- documenter les tokens structurants ;
- éviter les dépendances implicites à un ordre de chargement fragile ;
- utiliser `@use` / `@forward` de préférence aux anciens patterns si l’outillage le permet ;
- rester prudent avec les placeholders complexes et les `@extend`.

---

## 8. Gestion des erreurs et robustesse

- valider les entrées de fonctions ou mixins critiques lorsque possible ;
- fournir des valeurs par défaut raisonnables ;
- éviter les générateurs SCSS trop “magiques” difficiles à tracer ;
- garder les thèmes et variantes explicitement pilotables ;
- faire apparaître clairement les dépendances à des tokens externes.

---

## 9. Types d’éléments à revoir en priorité

Relire en priorité :

- tokens globaux ;
- mixins de composants ;
- systèmes d’espacement ;
- thèmes ;
- utilities ;
- responsive helpers ;
- surcharges spécifiques produit.

---

## 10. Exemple complet recommandé

```scss
@use "../Tokens/Colors" as *;
@use "../Tokens/Spacing" as *;

$CardRadius: 0.75rem;

@mixin CardSurface($BackgroundColor, $TextColor) {
    background-color: $BackgroundColor;
    color: $TextColor;
    border-radius: $CardRadius;
    padding: $SpacingMd;
}

.GsProfileCard {
    @include CardSurface($SurfaceColor, $TextPrimaryColor);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.12);

    &__Header {
        margin-bottom: $SpacingSm;
    }
}
```

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine SCSS :

- utiliser `$PascalCase` pour variables et paramètres ;
- utiliser `PascalCase` pour mixins et fonctions ;
- centraliser les tokens ;
- limiter le nesting ;
- garder des composants lisibles et peu spécifiques.

---

## 12. Résumé exécutable

À appliquer dans tous les projets SCSS Galactic-Shrine :

- `$PascalCase` pour variables et paramètres ;
- `PascalCase` pour mixins et fonctions ;
- tokens centralisés ;
- nesting limité ;
- pas d’abstraction SCSS inutile ;
- structure modulaire claire.
