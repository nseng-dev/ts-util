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
