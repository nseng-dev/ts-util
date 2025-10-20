import { Optional } from "./optional";

// 'describe' regroupe un ensemble de tests liés à une même fonctionnalité
describe("Optional", () => {
  // Teste la méthode statique 'of'
  describe("of", () => {
    // 'it' ou 'test' définit un cas de test individuel
    it("devrait créer un Optional avec une valeur", () => {
      const valeur = "test";
      const optional = Optional.of(valeur);
      expect(optional.isPresent()).toBe(true);
      expect(optional.get()).toBe(valeur);
    });

    it("devrait lancer une erreur si la valeur est null", () => {
      // On s'attend à ce que le code dans la fonction lève une erreur
      expect(() => Optional.of(null)).toThrow(
        "La valeur ne peut pas être nulle ou undefined. Utilisez ofNullable()."
      );
    });
  });

  // Teste la méthode statique 'ofNullable'
  describe("ofNullable", () => {
    it("devrait créer un Optional avec une valeur", () => {
      const optional = Optional.ofNullable("valeur");
      expect(optional.isPresent()).toBe(true);
    });

    it("devrait créer un Optional vide si la valeur est null", () => {
      const optional = Optional.ofNullable(null);
      expect(optional.isEmpty()).toBe(true);
    });
  });

  // Teste la méthode 'get'
  describe("get", () => {
    it("devrait retourner la valeur si elle est présente", () => {
      const optional = Optional.of("hello");
      expect(optional.get()).toBe("hello");
    });

    it("devrait lancer une erreur si l'Optional est vide", () => {
      const optional = Optional.empty();
      expect(() => optional.get()).toThrow("Aucune valeur présente");
    });
  });

  // Teste la méthode 'orElse'
  describe("orElse", () => {
    it("devrait retourner la valeur si elle est présente", () => {
      const valeur =
        Optional.of("valeur originale").orElse("valeur par défaut");
      expect(valeur).toBe("valeur originale");
    });

    it("devrait retourner la valeur alternative si l'Optional est vide", () => {
      const valeur = Optional.empty<string>().orElse("valeur par défaut");
      expect(valeur).toBe("valeur par défaut");
    });
  });

  // Teste la méthode 'map'
  describe("map", () => {
    it("devrait transformer la valeur si elle est présente", () => {
      const optional = Optional.of("test");
      const mapped = optional.map((v) => v.length);
      expect(mapped.get()).toBe(4);
    });

    it("devrait retourner un Optional vide si l'original est vide", () => {
      const optional = Optional.empty<string>();
      const mapped = optional.map((v) => v.length);
      expect(mapped.isEmpty()).toBe(true);
    });
  });

  // Teste la méthode 'filter'
  describe("filter", () => {
    it("devrait retourner le même Optional si le prédicat est vrai", () => {
      const optional = Optional.of(10);
      const filtré = optional.filter((v) => v > 5);
      expect(filtré.isPresent()).toBe(true);
      expect(filtré.get()).toBe(10);
    });

    it("devrait retourner un Optional vide si le prédicat est faux", () => {
      const optional = Optional.of(3);
      const filtré = optional.filter((v) => v > 5);
      expect(filtré.isEmpty()).toBe(true);
    });
  });
});
