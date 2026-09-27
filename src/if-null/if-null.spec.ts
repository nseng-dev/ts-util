import { ifNull } from "./if-null";

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
