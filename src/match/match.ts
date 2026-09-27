/**
 * Effectue un filtrage exhaustif (pattern matching) sur une union discriminée,
 * en remplaçant un switch par une expression qui retourne directement une valeur.
 * L'exhaustivité des cas est vérifiée à la compilation : il est impossible
 * d'omettre un cas dans `handlers` sans provoquer une erreur de type.
 *
 * Attention : l'exhaustivité n'est garantie que si `value` est déjà typé comme
 * l'union discriminée au site d'appel (paramètre de fonction, variable annotée...).
 * Un littéral objet inline non typé fait perdre la vérification (le tag est élargi).
 * @param value La valeur à filtrer ; doit posséder la propriété discriminante `key`.
 * @param key Le nom de la propriété discriminante de `value`.
 * @param handlers Un objet associant chaque valeur possible de la propriété discriminante
 * à une fonction de traitement recevant la variante correspondante, déjà typée.
 * @returns Le résultat de la fonction correspondant au cas rencontré.
 * @throws {Error} si aucune fonction ne correspond à la valeur rencontrée (ne devrait pas
 * se produire si le typage est respecté ; se produit uniquement en cas de contournement
 * du système de types, par exemple via `as any`).
 * @example
 * // Impératif :
 * let surface;
 * switch (forme.type) {
 *   case "cercle":
 *     surface = Math.PI * forme.rayon ** 2;
 *     break;
 *   case "carre":
 *     surface = forme.cote ** 2;
 *     break;
 * }
 *
 * // Fonctionnel :
 * const surface = match(forme, "type", {
 *   cercle: (f) => Math.PI * f.rayon ** 2,
 *   carre: (f) => f.cote ** 2,
 * });
 */
export function match<T extends object, K extends keyof T, R>(
  value: T,
  key: K,
  handlers: {
    [P in T[K] & PropertyKey]: (value: Extract<T, Record<K, P>>) => R;
  }
): R {
  const tag = value[key] as T[K] & PropertyKey;
  const handler = handlers[tag];
  if (handler === undefined) {
    throw new Error(`Aucun gestionnaire trouvé pour la valeur "${String(tag)}".`);
  }
  return handler(value as never);
}
