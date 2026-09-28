/**
 * Démo : opérateurs natifs (Before) vs wrappers fonctionnels (After).
 * Exécution : npx ts-node main.ts
 */
import {
  Logic,
  Comparison,
  ternary,
  ternaryVal,
  coalesce,
} from "./index";

interface Utilisateur {
  nom: string;
  age: number;
  estActif: boolean;
  estAdmin: boolean;
  surnom: string | null;
}

const utilisateur: Utilisateur = {
  nom: "Alice",
  age: 17,
  estActif: true,
  estAdmin: false,
  surnom: null,
};

console.log("=== 1. Logique ===");
console.log("Before (&&):", utilisateur.estActif && utilisateur.estAdmin);
console.log("After  (Logic.and):", Logic.and(utilisateur.estActif, utilisateur.estAdmin));
console.log("Before (||):", utilisateur.estActif || utilisateur.estAdmin);
console.log("After  (Logic.or):", Logic.or(utilisateur.estActif, utilisateur.estAdmin));
console.log("Before (!):", !utilisateur.estAdmin);
console.log("After  (Logic.not):", Logic.not(utilisateur.estAdmin));
console.log("Before (xor via !==):", utilisateur.estActif !== utilisateur.estAdmin);
console.log("After  (Logic.xor):", Logic.xor(utilisateur.estActif, utilisateur.estAdmin));

console.log("\n=== 2. Comparaison ===");
console.log("Before (===):", utilisateur.age === 18, "| After (Comparison.eq):", Comparison.eq(utilisateur.age, 18));
console.log("Before (!==):", utilisateur.age !== 18, "| After (Comparison.neq):", Comparison.neq(utilisateur.age, 18));
console.log("Before (<):", utilisateur.age < 18, "| After (Comparison.lt):", Comparison.lt(utilisateur.age, 18));
console.log("Before (<=):", utilisateur.age <= 18, "| After (Comparison.lte):", Comparison.lte(utilisateur.age, 18));
console.log("Before (>):", utilisateur.age > 18, "| After (Comparison.gt):", Comparison.gt(utilisateur.age, 18));
console.log("Before (>=):", utilisateur.age >= 18, "| After (Comparison.gte):", Comparison.gte(utilisateur.age, 18));

console.log("\n=== 3. Ternaire ===");
console.log("Before (? : lazy):", utilisateur.age >= 18 ? "majeur" : "mineur");
console.log(
  "After  (ternary):",
  ternary(utilisateur.age >= 18, () => "majeur", () => "mineur")
);
console.log("Before (? : eager):", utilisateur.estActif ? "actif" : "inactif");
console.log("After  (ternaryVal):", ternaryVal(utilisateur.estActif, "actif", "inactif"));

console.log("\n=== 4. Coalescence nullish ===");
console.log("Before (??):", utilisateur.surnom ?? "Anonyme");
console.log("After  (coalesce):", coalesce(utilisateur.surnom, "Anonyme"));
