# Galactic-Shrine Coding Standard

**Version:** 1.0.0  
**Auteur / Author:** ⋞Galactic-Shrine⋟  
**Portée / Scope:** Standards transversaux / Bibliothèques / Frameworks / SDKs / Applications / Services / APIs / Outils internes / Produits Galactic-Shrine

---

## 1. Objectif

Ce standard définit les **conventions de codage transversales** applicables dans les projets Galactic-Shrine.

Il a pour objectifs :

- d’uniformiser l’écriture du code entre les langages ;
- d’améliorer la lisibilité, la maintenabilité et la relecture ;
- de réduire les divergences de style entre projets et contributeurs ;
- de fixer les règles de nommage, de structure et de robustesse ;
- de fournir une base commune avant les standards spécifiques par langage.

---

## 2. Principes fondamentaux

Le code Galactic-Shrine doit être :

- clair ;
- cohérent ;
- explicite ;
- maintenable ;
- robuste ;
- raisonnablement extensible.

Le code doit privilégier :

- la lisibilité avant l’astuce ;
- la cohérence avant les préférences individuelles ;
- des responsabilités courtes et bien délimitées ;
- des noms explicites ;
- des contrats d’entrée et de sortie compréhensibles ;
- des structures simples à relire.

---

## 3. Décisions transversales officielles

Décisions officielles Galactic-Shrine applicables par défaut :

- les **propriétés** doivent être en `PascalCase` ;
- les **paramètres** doivent être en `PascalCase` ;
- les **méthodes / fonctions** doivent être en `PascalCase` ;
- les **types** doivent être en `PascalCase` ;
- les **constantes nommées** doivent être en `PascalCase`, sauf contrainte forte du langage ou d’un standard externe ;
- les abréviations doivent rester lisibles et stables (`HttpClient`, `XmlWriter`, `UuidValue`) ;
- un nom doit décrire l’intention, pas seulement l’implémentation.

Règle d’exception :

> Une convention imposée par un framework, une API externe, une sérialisation, une interopérabilité, un standard public ou un langage peut justifier une dérogation locale.  
> Dans ce cas, la dérogation doit rester ciblée, explicite et techniquement justifiée.

---

## 4. Convention de nommage globale

### 4.1 Types

- classes : `PascalCase`
- interfaces : préfixe propre au langage si nécessaire, sinon `PascalCase`
- structures / structs : `PascalCase`
- enums : `PascalCase`
- namespaces / packages / modules : selon les usages du langage, mais de manière stable et prévisible

### 4.2 Membres

- propriétés : `PascalCase`
- méthodes : `PascalCase`
- paramètres : `PascalCase`
- événements : `PascalCase`
- champs privés : convention locale du langage, mais cohérente dans tout le projet
- variables locales : convention locale du langage, mais éviter les formes ambiguës ou cryptiques

### 4.3 Fichiers et dossiers

- un nom de fichier doit refléter clairement le contenu principal ;
- éviter les noms vagues comme `Helper`, `Utils`, `Common`, `Misc` sans qualification ;
- préférer des regroupements fonctionnels clairs plutôt qu’un rangement opportuniste.

---

## 5. Structure des fichiers

Chaque fichier doit tendre vers une structure simple et prévisible.

Ordre recommandé lorsque le langage le permet :

1. en-tête légal ou technique si requis ;
2. déclarations globales (`namespace`, `module`, `use`, `import`, `include`) ;
3. types, fonctions ou constantes publics principaux ;
4. implémentations privées ou détails internes ;
5. éventuels helpers strictement liés au fichier.

Règles générales :

- un fichier doit avoir une responsabilité identifiable ;
- éviter de mélanger API publique, logique métier et utilitaires génériques sans lien ;
- éviter les fichiers “fourre-tout”.

---

## 6. Règles de style

### 6.1 Lisibilité

- préférer des blocs courts ;
- réduire l’imbrication quand un retour anticipé améliore la lecture ;
- éviter les expressions trop compactes si elles nuisent à la compréhension ;
- garder un style stable sur tout le projet.

### 6.2 Conditions

- une condition doit exprimer une intention claire ;
- éviter les doubles négations ;
- extraire une variable nommée lorsque l’expression devient difficile à lire ;
- documenter les cas métier non évidents.

### 6.3 Commentaires

- commenter le **pourquoi** et le **contrat**, pas chaque ligne évidente ;
- éviter les commentaires qui répètent exactement le nom de la méthode ;
- conserver une cohérence avec les standards de documentation Galactic-Shrine.

### 6.4 Données temporaires

- limiter la durée de vie des variables locales ;
- éviter les mutations inutiles ;
- rapprocher la déclaration de l’usage réel.

---

## 7. Architecture locale

Le code Galactic-Shrine doit éviter :

- les classes ou modules “dieu” ;
- les helpers génériques sans périmètre clair ;
- les méthodes longues qui mélangent plusieurs responsabilités ;
- les dépendances implicites difficiles à tracer ;
- les effets de bord cachés.

Le code doit favoriser :

- une responsabilité par type ou fonction principale ;
- des dépendances explicites ;
- une séparation nette entre orchestration, logique métier et accès technique ;
- des noms de types orientés intention (`Service`, `Provider`, `Factory`, `Builder`, `Repository`, `Mapper`, `Validator`, `Options`, `Result`, selon le langage et le besoin réel).

---

## 8. Validation, erreurs et nullabilité

Règles générales :

- valider les entrées aux frontières importantes ;
- échouer tôt sur les données invalides ;
- distinguer autant que possible erreur métier, erreur technique et absence de donnée ;
- ne pas masquer silencieusement une erreur importante ;
- produire des messages d’erreur utiles au diagnostic.

La nullabilité doit être traitée explicitement :

- accepter `null` uniquement si cela a du sens dans le contrat ;
- éviter les valeurs sentinelles ambiguës ;
- documenter les cas optionnels.

---

## 9. Sécurité, performance et compatibilité

Le code doit :

- éviter les concaténations non sûres pour les requêtes, chemins, commandes ou expressions évaluées ;
- normaliser et valider les entrées externes ;
- éviter l’exposition involontaire de données sensibles dans les logs ;
- viser une performance raisonnable sans sacrifier la lisibilité prématurément ;
- rester compatible avec les contraintes de la plateforme cible.

Règle :

> Ne pas optimiser spéculativement.  
> Optimiser les zones identifiées comme coûteuses, mesurées ou critiques.

---

## 10. Exceptions au standard

Une exception au standard est acceptable si :

- elle répond à une contrainte réelle du langage ou du framework ;
- elle améliore clairement l’interopérabilité ;
- elle évite une complexité artificielle ;
- elle reste locale et documentée.

Une exception n’est pas acceptable si :

- elle repose seulement sur une préférence personnelle ;
- elle crée deux styles concurrents dans le même projet ;
- elle réduit la lisibilité générale ;
- elle affaiblit le contrat de code.

---

## 11. Décision officielle recommandée

Standard officiel recommandé pour Galactic-Shrine Coding :

- imposer `PascalCase` pour **propriétés**, **paramètres** et **méthodes** ;
- garder des noms explicites et stables ;
- structurer les fichiers et les responsabilités de manière prévisible ;
- limiter la taille et la complexité des blocs ;
- valider les entrées importantes ;
- documenter les dérogations imposées par l’écosystème ;
- conserver une cohérence stricte à l’échelle du dépôt.

---

## 12. Résumé exécutable

À appliquer dans tous les projets Galactic-Shrine :

- écrire un code clair, stable et relisible ;
- utiliser `PascalCase` pour propriétés, paramètres et méthodes ;
- éviter les fichiers et types “fourre-tout” ;
- préférer des responsabilités courtes ;
- valider les entrées et traiter les erreurs explicitement ;
- ne déroger au standard que pour une raison technique réelle.
