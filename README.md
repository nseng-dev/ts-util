# ts-util

Boîte à outils TypeScript qui remplace les opérateurs et structures de contrôle natifs (`if/else`, `&&`, `||`, `??`, `===`, `switch`) par des fonctions et expressions typées, composables et testées : `Optional`, `Logic`, `Comparison`, `ifNull`/`coalesce`, `ifTrue`/`ternary`, `match`.

## Installation

Depuis le registre public npm :

```bash
npm install @nseng-dev/ts-util
```

Depuis GitHub Packages (nécessite un `.npmrc` avec `@nseng-dev:registry=https://npm.pkg.github.com` et un token d'accès) :

```bash
npm install @nseng-dev/ts-util --registry=https://npm.pkg.github.com
```

## Sommaire

- [`Optional<T>`](#optionalt) — conteneur de valeur potentiellement absente, façon `java.util.Optional`
- [`Logic`](#logic) — `and`, `or`, `not`, `xor`
- [`Comparison`](#comparison) — `eq`, `neq`, `lt`, `lte`, `gt`, `gte`
- [`ifNull` / `coalesce`](#ifnull--coalesce) — remplace la gestion de `null`/`undefined`
- [`ifTrue` / `ternary` / `ternaryVal`](#iftrue--ternary--ternaryval) — remplace `if/else` et `? :`
- [`match`](#match) — `switch` exhaustif sur union discriminée

## `Optional<T>`

```ts
import { Optional } from "@nseng-dev/ts-util";

const utilisateur = Optional.ofNullable(trouverUtilisateur(id))
  .filter((u) => u.estActif)
  .map((u) => u.nom)
  .orElse("Inconnu");
```

- `Optional.of(value)` — encapsule une valeur non nulle (`throw` si `null`/`undefined`).
- `Optional.ofNullable(value)` — encapsule une valeur potentiellement absente.
- `Optional.empty()` — instance vide.
- `.isPresent()` / `.isEmpty()` — teste la présence de la valeur.
- `.get()` — récupère la valeur (`throw` si absente).
- `.orElse(other)` — valeur par défaut si absente.
- `.map(fn)` — transforme la valeur si présente.
- `.filter(predicate)` — vide l'Optional si le prédicat échoue.

## `Logic`

```ts
import { Logic } from "@nseng-dev/ts-util";

// Avant :  utilisateur.estConnecte && utilisateur.estAdmin
Logic.and(utilisateur.estConnecte, utilisateur.estAdmin);

// Avant :  utilisateur.estAdmin || utilisateur.estProprietaire
Logic.or(utilisateur.estAdmin, utilisateur.estProprietaire);

// Avant :  !utilisateur.estActif
Logic.not(utilisateur.estActif);

// Avant :  optionA !== optionB
Logic.xor(optionA, optionB);
```

⚠️ Évaluation *eager* : contrairement à `&&`/`||`, les deux opérandes sont toujours évalués (pas de court-circuit).

## `Comparison`

```ts
import { Comparison } from "@nseng-dev/ts-util";

Comparison.eq(prixA, prixB);   // ===  (via Object.is)
Comparison.neq(prixA, prixB);  // !==
Comparison.lt(age, 18);        // <
Comparison.lte(age, 18);       // <=
Comparison.gt(age, 17);        // >
Comparison.gte(age, 18);       // >=
```

`eq`/`neq` utilisent `Object.is`, qui diffère de `===` sur `NaN` (`Object.is(NaN, NaN)` → `true`) et `-0`/`0` (`Object.is(0, -0)` → `false`).

## `ifNull` / `coalesce`

```ts
import { ifNull, coalesce } from "@nseng-dev/ts-util";

const message = ifNull(obj)
  .do(() => "absent")
  .else((valeur) => `présent: ${valeur}`);

// Avant :  utilisateur.surnom ?? "Anonyme"
const nom = coalesce(utilisateur.surnom, "Anonyme");
```

## `ifTrue` / `ternary` / `ternaryVal`

```ts
import { ifTrue, ternary, ternaryVal } from "@nseng-dev/ts-util";

const statut = ifTrue(utilisateur.estActif)
  .do(() => "actif")
  .else(() => "inactif");

// Avant :  age >= 18 ? "majeur" : "mineur"   (branches paresseuses)
const label = ternary(age >= 18, () => "majeur", () => "mineur");

// Avant :  estActif ? "actif" : "inactif"    (valeurs déjà calculées)
const label2 = ternaryVal(estActif, "actif", "inactif");
```

## `match`

Filtrage exhaustif sur une union discriminée, vérifié à la compilation : il est impossible d'oublier un cas dans `handlers` sans erreur de type.

```ts
import { match } from "@nseng-dev/ts-util";

type Forme =
  | { type: "cercle"; rayon: number }
  | { type: "carre"; cote: number };

const surface = match(forme, "type", {
  cercle: (f) => Math.PI * f.rayon ** 2,
  carre: (f) => f.cote ** 2,
});
```

## Développement

```bash
npm install
npm test    # Jest, couverture incluse
npm run build
```

## Licence

MIT
