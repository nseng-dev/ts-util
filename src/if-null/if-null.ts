/**
 * Traite une valeur potentiellement nulle ou undefined de façon fonctionnelle,
 * en remplaçant un bloc if/else par une expression qui retourne directement une valeur.
 * @param value La valeur qui peut être null ou undefined.
 * @returns Un constructeur permettant de définir le traitement selon la présence de la valeur.
 * @example
 * // Impératif :
 * let message;
 * if (obj === null || obj === undefined) {
 *   message = "absent";
 * } else {
 *   message = `présent: ${obj}`;
 * }
 *
 * // Fonctionnel :
 * const message = ifNull(obj)
 *   .do(() => "absent")
 *   .else((valeur) => `présent: ${valeur}`);
 */
export function ifNull<T>(value: T | null | undefined) {
  return {
    /**
     * Définit le traitement à appliquer si la valeur est null ou undefined.
     * @param onNull La fonction exécutée si la valeur est absente.
     * @returns Un objet permettant de définir le traitement pour le cas où la valeur est présente.
     */
    do<R>(onNull: () => R) {
      return {
        /**
         * Définit le traitement à appliquer si la valeur est présente, puis exécute la branche appropriée.
         * @param onPresent La fonction exécutée avec la valeur, si elle est présente.
         * @returns Le résultat de la branche exécutée (onNull ou onPresent).
         */
        else(onPresent: (value: T) => R): R {
          return value === null || value === undefined
            ? onNull()
            : onPresent(value);
        },
      };
    },
  };
}
