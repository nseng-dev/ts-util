/**
 * Regroupe les opérateurs logiques sous forme de méthodes statiques typées.
 */
export class Logic {
  private constructor() {}

  /**
   * Effectue un ET logique entre deux booléens de façon fonctionnelle.
   * @remarks Évaluation stricte et immédiate (eager) : contrairement à
   * l'opérateur natif `&&`, les deux arguments sont systématiquement évalués
   * avant l'appel. Le court-circuit natif (qui évite d'évaluer le second
   * opérande si le premier est `false`) est donc perdu : n'utilisez pas
   * d'expression à effet de bord comme second argument.
   * @param a Le premier opérande booléen.
   * @param b Le second opérande booléen.
   * @returns `true` si `a` et `b` valent tous les deux `true`, sinon `false`.
   * @example
   * // Impératif :
   * const peutPublier = utilisateur.estConnecte && utilisateur.estAdmin;
   *
   * // Fonctionnel :
   * const peutPublier = Logic.and(utilisateur.estConnecte, utilisateur.estAdmin);
   */
  static and(a: boolean, b: boolean): boolean {
    return a && b;
  }

  /**
   * Effectue un OU logique entre deux booléens de façon fonctionnelle.
   * @remarks Même remarque que `and` : évaluation eager, le court-circuit
   * natif de `||` est perdu.
   * @param a Le premier opérande booléen.
   * @param b Le second opérande booléen.
   * @returns `true` si `a` ou `b` vaut `true`, sinon `false`.
   * @example
   * // Impératif :
   * const estVisible = utilisateur.estAdmin || utilisateur.estProprietaire;
   *
   * // Fonctionnel :
   * const estVisible = Logic.or(utilisateur.estAdmin, utilisateur.estProprietaire);
   */
  static or(a: boolean, b: boolean): boolean {
    return a || b;
  }

  /**
   * Effectue une négation logique de façon fonctionnelle.
   * @param a L'opérande booléen à inverser.
   * @returns `true` si `a` est `false`, et inversement.
   * @example
   * // Impératif :
   * const estInactif = !utilisateur.estActif;
   *
   * // Fonctionnel :
   * const estInactif = Logic.not(utilisateur.estActif);
   */
  static not(a: boolean): boolean {
    return !a;
  }

  /**
   * Effectue un OU exclusif logique entre deux booléens.
   * @remarks JavaScript n'a pas d'opérateur XOR logique natif (`^` est un
   * XOR bit à bit, qui ne s'applique pas au type `boolean` en TypeScript).
   * L'idiome standard pour un XOR logique sur des booléens est l'inégalité
   * stricte (`a !== b`), dont la table de vérité est identique à un XOR bit
   * à bit sur 0/1.
   * @param a Le premier opérande booléen.
   * @param b Le second opérande booléen.
   * @returns `true` si `a` et `b` diffèrent, sinon `false`.
   * @example
   * // Impératif (idiome) :
   * const uneSeuleOption = optionA !== optionB;
   *
   * // Fonctionnel :
   * const uneSeuleOption = Logic.xor(optionA, optionB);
   */
  static xor(a: boolean, b: boolean): boolean {
    return a !== b;
  }
}
