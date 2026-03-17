# Galactic-Shrine Coding Standards Pack

**Version:** 1.0.0

Ce pack contient une première édition harmonisée des conventions de codage Galactic-Shrine, construite dans le même esprit que les standards de documentation existants.

## Contenu

- `GalacticShrineCodingStandard.md`
- `CSharpCodingStandard.md`
- `CppCodingStandard.md`
- `PhpCodingStandard.md`
- `JsCodingStandard.md`
- `ScssCodingStandard.md`
- `HtmlCodingStandard.md`
- `TwigCodingStandard.md`

## Décision structurante intégrée

Le pack applique la décision officielle suivante :

- **propriétés** en `PascalCase`
- **paramètres** en `PascalCase`
- **méthodes / fonctions** en `PascalCase`

Selon les fichiers, cette règle est étendue aux variables locales et autres éléments lorsque cela améliore la cohérence du langage dans l’écosystème Galactic-Shrine.

## Notes

- Les exceptions liées aux frameworks, APIs externes, sérialisation ou conventions imposées par l’écosystème sont prévues dans les standards.
- Cette édition est harmonisée sur une structure commune en 12 sections.
- Une v1.1.0 peut ensuite raffiner les conventions par projet (Symfony, .NET, Unreal/C++, front-end, etc.).
