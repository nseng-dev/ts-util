/**
 * Un conteneur qui peut contenir ou non une valeur non-nulle.
 * Si une valeur est présente, isPresent() retourne true.
 * Si aucune valeur n'est présente, l'objet est considéré comme vide et isPresent() retourne false.
 */
export class Optional<T> {
  private readonly value: T | null;

  // Singleton partagé pour tous les Optional vides : le cast est sûr car
  // aucune méthode ne peut faire fuiter cette valeur `null` en tant que `T`.
  private static readonly EMPTY = new Optional<unknown>(null);

  private constructor(value: T | null) {
    this.value = value;
  }

  /**
   * Crée un Optional contenant une valeur qui ne doit pas être nulle.
   * @param value La valeur à encapsuler, ne doit pas être null.
   * @throws {Error} si la valeur est null ou undefined.
   */
  public static of<T>(value: T): Optional<T> {
    if (value == null) {
      throw new Error(
        "La valeur ne peut pas être nulle ou undefined. Utilisez ofNullable()."
      );
    }
    return new Optional(value);
  }

  /**
   * Crée un Optional à partir d'une valeur qui peut être nulle.
   * @param value La valeur qui peut être null ou undefined.
   * @returns Un Optional contenant la valeur, ou un Optional vide.
   */
  public static ofNullable<T>(value: T | null | undefined): Optional<T> {
    return value === null || value === undefined
      ? Optional.empty<T>()
      : new Optional(value);
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
    return this.value !== null;
  }

  /**
   * Vérifie si l'Optional est vide.
   * @returns {boolean} true si aucune valeur n'est présente, sinon false.
   */
  public isEmpty(): boolean {
    return this.value === null;
  }

  /**
   * Récupère la valeur si elle est présente.
   * @throws {Error} si la valeur n'est pas présente.
   * @returns La valeur contenue.
   */
  public get(): T {
    if (this.value === null) {
      throw new Error("Aucune valeur présente");
    }
    return this.value;
  }

  /**
   * Retourne la valeur si elle est présente, sinon retourne une valeur par défaut.
   * @param other La valeur à retourner si cet Optional est vide.
   * @returns La valeur ou la valeur alternative.
   */
  public orElse(other: T): T {
    return this.value !== null ? this.value : other;
  }

  /**
   * Si une valeur est présente, applique la fonction de mapping à celle-ci.
   * @param mapper La fonction à appliquer à la valeur.
   * @returns Un nouveau Optional décrivant le résultat du mapping.
   */
  public map<U>(mapper: (value: T) => U): Optional<U> {
    return this.value === null
      ? Optional.empty<U>()
      : Optional.ofNullable(mapper(this.value));
  }

  /**
   * Si une valeur est présente et qu'elle correspond au prédicat, retourne cet Optional.
   * Sinon, retourne un Optional vide.
   * @param predicate La condition à appliquer à la valeur.
   * @returns Un Optional.
   */
  public filter(predicate: (value: T) => boolean): Optional<T> {
    return this.value !== null && predicate(this.value)
      ? this
      : Optional.empty<T>();
  }
}
