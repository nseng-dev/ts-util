# Prompts efficaces — Senior TypeScript Engineer

Ces prompts sont conçus pour Claude Code. Remplace les éléments entre `<...>`.

---

## 1. Nouvelle fonctionnalité — mode senior

```text
Utilise le skill senior-typescript-engineer.

Objectif : implémenter <fonctionnalité>.

Avant toute modification :
1. inspecte les fichiers concernés et les conventions existantes ;
2. identifie les types, services, tests et abstractions déjà disponibles ;
3. explique brièvement où cette responsabilité doit vivre ;
4. évite toute nouvelle abstraction si une solution existante suffit.

Contraintes :
- TypeScript strict ;
- aucun `any` ;
- SOLID de manière pragmatique ;
- pas de surarchitecture ;
- minimise les allocations, appels réseau et calculs inutiles ;
- préserve les API existantes sauf nécessité démontrée ;
- ne modifie pas de code hors périmètre.

Ensuite implémente la solution la plus simple et maintenable.

Validation obligatoire :
- type-check ;
- tests concernés ;
- lint si disponible ;
- revue du diff.

Termine par : Changes / Engineering decisions / Verification / Remaining risks.
```

---

## 2. Correction de bug — chercher la cause avant le patch

```text
Utilise le skill senior-typescript-engineer.

Bug observé :
<décrire précisément le symptôme>

Comportement attendu :
<résultat attendu>

Commence par reproduire ou tracer le chemin d'exécution.
Ne corrige pas le symptôme tant que la cause racine n'est pas identifiée.

Analyse :
- données d'entrée ;
- état ;
- appels asynchrones ;
- conditions de course possibles ;
- gestion des erreurs ;
- contrats TypeScript concernés.

Applique ensuite la plus petite correction cohérente.
Ajoute ou adapte un test de non-régression si possible.

Ne refactore pas les parties non liées.

Exécute les validations disponibles et donne les preuves de résultat.
```

---

## 3. Refactoring

```text
Utilise le skill senior-typescript-engineer.

Refactore <fichier/classe/module> sans changer son comportement observable.

Objectifs prioritaires :
1. réduire la complexité ;
2. améliorer les types ;
3. améliorer les noms ;
4. supprimer les duplications métier réelles ;
5. réduire le couplage ;
6. appliquer SOLID seulement lorsqu'il apporte une amélioration concrète ;
7. éviter les design patterns inutiles.

Avant de modifier :
- analyse les responsabilités actuelles ;
- identifie les code smells réels ;
- indique les invariants à préserver.

Effectue le refactoring par changements minimaux.
Compare avant/après et exécute les tests/type-check/lint disponibles.
```

---

## 4. Code review complète

```text
Utilise le skill senior-typescript-engineer et effectue une review senior de <PR / diff / fichiers>.

Ne modifie rien dans un premier temps.

Inspecte dans cet ordre :
1. correctness ;
2. bugs et régressions ;
3. sécurité ;
4. intégrité des données ;
5. erreurs et cas limites ;
6. async/concurrence ;
7. architecture ;
8. type safety ;
9. maintenabilité ;
10. performance ;
11. Green Software ;
12. tests.

Retourne uniquement les problèmes réels et actionnables.

Pour chaque problème :
- sévérité : Critical / Important / Improvement ;
- fichier et emplacement ;
- problème ;
- impact ;
- correction concrète.

Ne remplis pas artificiellement la review avec des remarques cosmétiques.
Termine par les validations que tu recommandes avant merge.
```

---

## 5. Analyse architecture + SOLID

```text
Utilise le skill senior-typescript-engineer.

Analyse l'architecture de <module/feature>.

Je veux savoir :
- quelles responsabilités existent ;
- où sont les couplages forts ;
- si SRP/OCP/LSP/ISP/DIP sont réellement concernés ;
- quelles abstractions ont une valeur concrète ;
- quelles abstractions sont inutiles ;
- quels design patterns sont déjà présents ;
- quel pattern pourrait résoudre un problème réel, s'il y en a un.

Ne propose aucune réécriture complète par défaut.
Privilégie une trajectoire d'amélioration incrémentale.

Pour chaque proposition, indique :
- problème actuel ;
- modification ;
- bénéfice ;
- coût/complexité ;
- risque de surarchitecture.
```

---

## 6. Choix d'un design pattern

```text
Analyse ce problème TypeScript :
<problème>

Compare d'abord une solution simple basée sur fonctions/composition avec les patterns éventuellement pertinents.

Évalue uniquement les patterns justifiés parmi :
Strategy, Factory, Adapter, Repository, Command, Builder, Facade, Decorator, Observer, Dependency Injection.

Pour chaque solution viable :
- structure ;
- avantage ;
- inconvénient ;
- complexité ajoutée ;
- condition dans laquelle elle devient préférable.

Choisis ensuite la solution la plus simple répondant aux contraintes actuelles.
N'utilise pas un pattern uniquement pour anticiper un besoin hypothétique.
```

---

## 7. Green Dev / performance

```text
Utilise le skill senior-typescript-engineer avec priorité Green Software.

Analyse <module/fonction/feature> pour détecter le gaspillage de ressources.

Recherche notamment :
- calculs répétés ;
- boucles de complexité évitable ;
- allocations inutiles ;
- requêtes réseau répétées ;
- polling ;
- timers/listeners/subscriptions non nettoyés ;
- bundle/imports surdimensionnés ;
- rendu inutile ;
- N+1 ;
- sérialisation répétée ;
- chargement de données inutiles.

Pour chaque problème réel :
- ressource gaspillée ;
- emplacement ;
- impact probable ;
- optimisation proposée ;
- complexité supplémentaire ;
- moyen de mesurer l'amélioration.

Ne propose pas de micro-optimisation non mesurable qui dégrade la lisibilité.
```

---

## 8. Optimisation d'une fonction TypeScript

```text
Analyse et optimise cette fonction :
<fonction ou chemin du fichier>

Priorités :
1. conserver exactement le comportement ;
2. améliorer lisibilité et type safety ;
3. réduire la complexité algorithmique si elle est significative ;
4. limiter allocations et passages multiples inutiles ;
5. éviter les dépendances supplémentaires.

Explique la complexité avant/après lorsqu'elle change réellement.
Ajoute des tests ciblés pour les cas limites.
```

---

## 9. Type safety stricte

```text
Analyse <fichier/module> avec comme priorité la sûreté des types TypeScript.

Recherche :
- `any` ;
- assertions risquées ;
- `!` non justifiés ;
- unions mal modélisées ;
- états invalides représentables ;
- valeurs externes non validées ;
- fonctions aux contrats ambigus ;
- paramètres booléens opaques ;
- types dupliqués.

Propose les corrections les plus simples.
Utilise `unknown`, narrowing, discriminated unions, readonly et exhaustive checks lorsque pertinent.
Évite les génériques complexes sans bénéfice concret.
```

---

## 10. Tests unitaires senior

```text
Utilise le skill senior-typescript-engineer.

Crée ou améliore les tests de <fonction/module>.

Analyse d'abord le comportement public et les invariants métier.

Couvre au minimum lorsque pertinent :
- cas nominal ;
- valeurs limites ;
- vide/null/undefined ;
- entrée invalide ;
- erreur d'une dépendance ;
- transitions d'état ;
- régression associée au bug ;
- comportement async.

Évite :
- tests d'implémentation privée ;
- mocks excessifs ;
- sleeps arbitraires ;
- fixtures énormes.

Les tests doivent être déterministes et lisibles.
Exécute-les et rapporte le résultat réel.
```

---

## 11. Analyse avant modification — utile sur gros projet

```text
Utilise le skill senior-typescript-engineer.

Pour cette tâche :
<tâche>

PHASE 1 — ANALYSE UNIQUEMENT.
Ne modifie aucun fichier.

Inspecte le dépôt et retourne :
- fichiers réellement concernés ;
- flux d'exécution ;
- architecture existante ;
- abstractions réutilisables ;
- contraintes ;
- risques ;
- tests concernés ;
- solution minimale recommandée.

Sépare clairement les faits observés des hypothèses.
Toute hypothèse doit être explicitement marquée.

Attends mon instruction avant la phase d'implémentation.
```

---

## 12. Implémentation après plan approuvé

```text
Reprends le plan précédemment validé.

Avant de modifier, vérifie que l'état actuel du dépôt correspond toujours aux hypothèses du plan.
Si une hypothèse est devenue fausse, adapte le plan avec la plus petite correction nécessaire.

Implémente uniquement le périmètre approuvé.

Respecte :
- TypeScript strict ;
- SOLID pragmatique ;
- KISS ;
- YAGNI ;
- DRY sur la connaissance métier ;
- Green Software ;
- sécurité ;
- conventions existantes.

Puis exécute :
- type-check ;
- tests concernés ;
- lint ;
- revue du diff.

Ne déclare pas la tâche terminée si une validation obligatoire échoue.
```

---

## 13. Audit dette technique

```text
Utilise le skill senior-typescript-engineer.

Réalise un audit ciblé de la dette technique de <répertoire/module>.

Ne propose pas une réécriture globale.

Identifie uniquement les problèmes ayant un impact concret sur :
- fréquence des bugs ;
- coût d'évolution ;
- couplage ;
- type safety ;
- tests ;
- performance ;
- consommation de ressources ;
- sécurité.

Regroupe les résultats par :
Critical / Important / Improvement.

Pour chaque élément :
- preuve dans le code ;
- conséquence ;
- correction minimale ;
- effort relatif : faible / moyen / élevé ;
- dépendances éventuelles.

Termine par un ordre de traitement basé sur dépendances techniques et réduction du risque, pas sur l'esthétique du code.
```

---

## 14. Préparation d'une PR propre

```text
Utilise le skill senior-typescript-engineer.

Prépare ce travail pour une PR.

Inspecte le diff complet et vérifie :
- changements hors périmètre ;
- code mort ;
- imports inutiles ;
- logs temporaires ;
- commentaires obsolètes ;
- `any` ou assertions introduites ;
- tests manquants ;
- régressions potentielles ;
- problèmes de sécurité ;
- problèmes de performance/Green Software.

Corrige uniquement ce qui est directement lié à la PR.

Exécute les validations disponibles.
Puis rédige :
- résumé technique ;
- motivation ;
- changements ;
- tests ;
- risques ;
- points de review particuliers.
```

---

## 15. Prompt court quotidien

```text
Utilise le skill senior-typescript-engineer.
Analyse d'abord le code existant, puis réalise <tâche> avec la plus petite modification cohérente.
Respecte TypeScript strict, SOLID pragmatique, KISS, YAGNI, design patterns uniquement si justifiés et Green Software.
Ne modifie rien hors périmètre.
Exécute type-check, tests concernés et lint, puis revois le diff.
```

---

# Formule recommandée

Pour obtenir de meilleurs résultats, structure une demande ainsi :

```text
CONTEXTE
<où se trouve le problème et à quoi sert la feature>

OBJECTIF
<résultat observable attendu>

CONTRAINTES
<API à préserver, librairies, compatibilité, performance...>

HORS PÉRIMÈTRE
<ce qui ne doit pas changer>

VALIDATION
<tests/commandes/critères d'acceptation>
```

Cette structure réduit fortement les interprétations et les refactorings non souhaités.
