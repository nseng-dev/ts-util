/**
 * Regroupe les opérateurs de comparaison sous forme de méthodes statiques typées.
 */
export class Comparison {
  private constructor() {}

  /**
   * Compare deux valeurs par identité stricte via `Object.is`.
   * @remarks `Object.is` diffère de `===` sur deux cas particuliers :
   * `Object.is(NaN, NaN)` vaut `true` (alors que `NaN === NaN` vaut `false`),
   * et `Object.is(0, -0)` vaut `false` (alors que `0 === -0` vaut `true`).
   * @typeParam T Le type des valeurs comparées.
   * @param a La première valeur.
   * @param b La seconde valeur.
   * @returns `true` si `a` et `b` sont identiques au sens de `Object.is`.
   * @example
   * // Impératif :
   * const sontEgaux = prixA === prixB;
   *
   * // Fonctionnel :
   * const sontEgaux = Comparison.eq(prixA, prixB);
   */
  static eq<T>(a: T, b: T): boolean {
    return Object.is(a, b);
  }

  /**
   * Compare deux valeurs par non-identité stricte via `Object.is`.
   * @remarks Voir les cas particuliers documentés sur `eq`.
   * @typeParam T Le type des valeurs comparées.
   * @param a La première valeur.
   * @param b La seconde valeur.
   * @returns `true` si `a` et `b` ne sont pas identiques au sens de `Object.is`.
   * @example
   * // Impératif :
   * const sontDifferents = prixA !== prixB;
   *
   * // Fonctionnel :
   * const sontDifferents = Comparison.neq(prixA, prixB);
   */
  static neq<T>(a: T, b: T): boolean {
    return !Object.is(a, b);
  }

  /**
   * Indique si `a` est strictement inférieur à `b`.
   * @example
   * // Impératif :      const estMineur = age < 18;
   * // Fonctionnel :     const estMineur = Comparison.lt(age, 18);
   */
  static lt(a: number, b: number): boolean {
    return a < b;
  }

  /**
   * Indique si `a` est inférieur ou égal à `b`.
   * @example
   * // Impératif :      const estMineurOuMajeurLeJour = age <= 18;
   * // Fonctionnel :     const estMineurOuMajeurLeJour = Comparison.lte(age, 18);
   */
  static lte(a: number, b: number): boolean {
    return a <= b;
  }

  /**
   * Indique si `a` est strictement supérieur à `b`.
   * @example
   * // Impératif :      const estMajeur = age > 17;
   * // Fonctionnel :     const estMajeur = Comparison.gt(age, 17);
   */
  static gt(a: number, b: number): boolean {
    return a > b;
  }

  /**
   * Indique si `a` est supérieur ou égal à `b`.
   * @example
   * // Impératif :      const estMajeur = age >= 18;
   * // Fonctionnel :     const estMajeur = Comparison.gte(age, 18);
   */
  static gte(a: number, b: number): boolean {
    return a >= b;
  }
}
