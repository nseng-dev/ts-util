import { ifNull, coalesce } from "./if-null";

describe("ifNull", () => {
  describe("quand la valeur est null", () => {
    it("devrait exécuter la branche onNull", () => {
      const resultat = ifNull<string>(null)
        .do(() => "absent")
        .else((valeur) => `présent: ${valeur}`);
      expect(resultat).toBe("absent");
    });
  });

  describe("quand la valeur est undefined", () => {
    it("devrait exécuter la branche onNull", () => {
      const resultat = ifNull<string>(undefined)
        .do(() => "absent")
        .else((valeur) => `présent: ${valeur}`);
      expect(resultat).toBe("absent");
    });
  });

  describe("quand la valeur est présente", () => {
    it("devrait exécuter la branche onPresent avec le résultat attendu", () => {
      const resultat = ifNull("test")
        .do(() => "absent")
        .else((valeur) => `présent: ${valeur}`);
      expect(resultat).toBe("présent: test");
    });

    it("devrait transmettre la valeur d'origine sans la modifier", () => {
      const objet = { id: 1 };
      const valeurParDefaut = { id: -1 };
      const valeurRecue = ifNull(objet)
        .do(() => valeurParDefaut)
        .else((valeur) => valeur);
      expect(valeurRecue).toBe(objet);
    });

    it("ne devrait jamais appeler onNull", () => {
      const onNull = jest.fn(() => "absent");
      ifNull("test")
        .do(onNull)
        .else((valeur) => valeur);
      expect(onNull).not.toHaveBeenCalled();
    });
  });
});

describe("coalesce", () => {
  describe("quand value est null", () => {
    it("devrait retourner fallback", () => {
      expect(coalesce(null, "Anonyme")).toBe("Anonyme");
    });
  });

  describe("quand value est undefined", () => {
    it("devrait retourner fallback", () => {
      expect(coalesce(undefined, "Anonyme")).toBe("Anonyme");
    });
  });

  describe("quand value est présente", () => {
    it("devrait retourner value et non fallback", () => {
      expect(coalesce("Bob", "Anonyme")).toBe("Bob");
    });

    it("devrait retourner 0 et non le fallback (contrairement à ||)", () => {
      expect(coalesce(0, 42)).toBe(0);
    });

    it("devrait retourner une chaîne vide et non le fallback (contrairement à ||)", () => {
      expect(coalesce("", "Anonyme")).toBe("");
    });

    it("devrait retourner false et non le fallback (contrairement à ||)", () => {
      expect(coalesce(false, true)).toBe(false);
    });
  });
});
