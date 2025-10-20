/**
 * Un conteneur qui peut contenir ou non une valeur non-nulle.
 * Si une valeur est présente, isPresent() retourne true.
 * Si aucune valeur n'est présente, l'objet est considéré comme vide et isPresent() retourne false.
 */
export class Optional<T> {
  private readonly valeur: T | null;

  private static readonly EMPTY = new Optional(null);

  private constructor(valeur: T | null) {
    this.valeur = valeur;
  }

  /**
   * Crée un Optional contenant une valeur qui ne doit pas être nulle.
   * @param valeur La valeur à encapsuler, ne doit pas être null.
   * @throws {Error} si la valeur est null ou undefined.
   */
  public static of<T>(valeur: T): Optional<T> {
    if (valeur == null) {
      throw new Error(
        "La valeur ne peut pas être nulle ou undefined. Utilisez ofNullable()."
      );
    }
    return new Optional(valeur);
  }

  /**
   * Crée un Optional à partir d'une valeur qui peut être nulle.
   * @param valeur La valeur qui peut être null ou undefined.
   * @returns Un Optional contenant la valeur, ou un Optional vide.
   */
  public static ofNullable<T>(valeur: T | null | undefined): Optional<T> {
    return valeur === null || valeur === undefined
      ? Optional.empty<T>()
      : new Optional(valeur);
  }

  /**
   * Retourne une instance de Optional vide.
   */
  public static empty<T>(): Optional<T> {
    return Optional.EMPTY as Optional<T>;
  }

  /**
   * Vérifie si une valeur est présente.
   * @returns {boolean} true si une valeur est présente, sinon false.
   */
  public isPresent(): boolean {
    return this.valeur !== null;
  }

  /**
   * Vérifie si l'Optional est vide.
   * @returns {boolean} true si aucune valeur n'est présente, sinon false.
   */
  public isEmpty(): boolean {
    return this.valeur === null;
  }

  /**
   * Récupère la valeur si elle est présente.
   * @throws {Error} si la valeur n'est pas présente.
   * @returns La valeur contenue.
   */
  public get(): T {
    if (this.valeur === null) {
      throw new Error("Aucune valeur présente");
    }
    return this.valeur;
  }

  /**
   * Retourne la valeur si elle est présente, sinon retourne une valeur par défaut.
   * @param valeurAlternative La valeur à retourner si cet Optional est vide.
   * @returns La valeur ou la valeur alternative.
   */
  public orElse(valeurAlternative: T): T {
    return this.valeur != null ? this.valeur : valeurAlternative;
  }

  /**
   * Si une valeur est présente, applique la fonction de mapping à celle-ci.
   * @param mapper La fonction à appliquer à la valeur.
   * @returns Un nouveau MonOptional décrivant le résultat du mapping.
   */
  public map<U>(mapper: (valeur: T) => U): Optional<U> {
    if (this.isEmpty()) {
      return Optional.empty<U>();
    }
    return Optional.ofNullable(mapper(this.get()));
  }

  /**
   * Si une valeur est présente et qu'elle correspond au prédicat, retourne cet Optional.
   * Sinon, retourne un Optional vide.
   * @param predicate La condition à appliquer à la valeur.
   * @returns Un Optional.
   */
  public filter(predicate: (valeur: T) => boolean): Optional<T> {
    if (this.isEmpty() || !predicate(this.get())) {
      return Optional.empty<T>();
    }
    return this;
  }
}
