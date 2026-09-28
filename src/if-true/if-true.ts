/**
 * Traite une condition booléenne de façon fonctionnelle, en remplaçant un
 * bloc if/else par une expression qui retourne directement une valeur.
 * @param condition La condition à évaluer.
 * @returns Un constructeur permettant de définir le traitement selon la condition.
 * @example
 * // Impératif :
 * let statut;
 * if (utilisateur.estActif) {
 *   statut = "actif";
 * } else {
 *   statut = "inactif";
 * }
 *
 * // Fonctionnel :
 * const statut = ifTrue(utilisateur.estActif)
 *   .do(() => "actif")
 *   .else(() => "inactif");
 */
export function ifTrue(condition: boolean) {
  return {
    /**
     * Définit le traitement à appliquer si la condition est vraie.
     * @param onTrue La fonction exécutée si la condition est vraie.
     * @returns Un objet permettant de définir le traitement pour le cas où la condition est fausse.
     */
    do<R>(onTrue: () => R) {
      return {
        /**
         * Définit le traitement à appliquer si la condition est fausse, puis exécute la branche appropriée.
         * @param onFalse La fonction exécutée si la condition est fausse.
         * @returns Le résultat de la branche exécutée (onTrue ou onFalse).
         */
        else(onFalse: () => R): R {
          return condition ? onTrue() : onFalse();
        },
      };
    },
  };
}

/**
 * Évalue paresseusement l'une des deux branches selon une condition, sous forme
 * d'expression unique plus proche du `? :` natif que `ifTrue(...).do(...).else(...)`.
 * @remarks Seule la branche retenue est exécutée, comme pour `ifTrue` ci-dessus.
 * @param condition La condition à évaluer.
 * @param ifTrue La fonction exécutée si `condition` est vraie.
 * @param ifFalse La fonction exécutée si `condition` est fausse.
 * @returns Le résultat de la branche exécutée.
 * @example
 * // Impératif :
 * const statut = age >= 18 ? "majeur" : "mineur";
 *
 * // Fonctionnel :
 * const statut = ternary(age >= 18, () => "majeur", () => "mineur");
 */
export function ternary<T>(
  condition: boolean,
  ifTrue: () => T,
  ifFalse: () => T
): T {
  return condition ? ifTrue() : ifFalse();
}

/**
 * Sélectionne l'une de deux valeurs déjà calculées selon une condition.
 * @remarks Version eager de `ternary` : les deux valeurs sont déjà évaluées
 * par l'appelant avant l'appel, contrairement à `? :` qui ne construit jamais
 * la branche non retenue.
 * @param condition La condition à évaluer.
 * @param ifTrue La valeur retournée si `condition` est vraie.
 * @param ifFalse La valeur retournée si `condition` est fausse.
 * @returns `ifTrue` ou `ifFalse` selon `condition`.
 * @example
 * // Impératif :
 * const label = estActif ? "actif" : "inactif";
 *
 * // Fonctionnel :
 * const label = ternaryVal(estActif, "actif", "inactif");
 */
export function ternaryVal<T>(condition: boolean, ifTrue: T, ifFalse: T): T {
  return condition ? ifTrue : ifFalse;
}
