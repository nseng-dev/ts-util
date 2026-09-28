import { ifTrue, ternary, ternaryVal } from "./if-true";

describe("ifTrue", () => {
  describe("quand la condition est vraie", () => {
    it("devrait exécuter la branche onTrue", () => {
      const resultat = ifTrue(true)
        .do(() => "actif")
        .else(() => "inactif");
      expect(resultat).toBe("actif");
    });

    it("ne devrait jamais appeler onFalse", () => {
      const onFalse = jest.fn(() => "inactif");
      ifTrue(true)
        .do(() => "actif")
        .else(onFalse);
      expect(onFalse).not.toHaveBeenCalled();
    });
  });

  describe("quand la condition est fausse", () => {
    it("devrait exécuter la branche onFalse", () => {
      const resultat = ifTrue(false)
        .do(() => "actif")
        .else(() => "inactif");
      expect(resultat).toBe("inactif");
    });

    it("ne devrait jamais appeler onTrue", () => {
      const onTrue = jest.fn(() => "actif");
      ifTrue(false)
        .do(onTrue)
        .else(() => "inactif");
      expect(onTrue).not.toHaveBeenCalled();
    });
  });
});

describe("ternary", () => {
  describe("quand la condition est vraie", () => {
    it("devrait exécuter la branche ifTrue", () => {
      const resultat = ternary(
        true,
        () => "majeur",
        () => "mineur"
      );
      expect(resultat).toBe("majeur");
    });

    it("ne devrait jamais appeler ifFalse", () => {
      const ifFalse = jest.fn(() => "mineur");
      ternary(true, () => "majeur", ifFalse);
      expect(ifFalse).not.toHaveBeenCalled();
    });
  });

  describe("quand la condition est fausse", () => {
    it("devrait exécuter la branche ifFalse", () => {
      const resultat = ternary(
        false,
        () => "majeur",
        () => "mineur"
      );
      expect(resultat).toBe("mineur");
    });

    it("ne devrait jamais appeler ifTrue", () => {
      const ifTrueFn = jest.fn(() => "majeur");
      ternary(false, ifTrueFn, () => "mineur");
      expect(ifTrueFn).not.toHaveBeenCalled();
    });
  });
});

describe("ternaryVal", () => {
  describe("quand la condition est vraie", () => {
    it("devrait retourner la valeur ifTrue", () => {
      const resultat = ternaryVal(true, "actif", "inactif");
      expect(resultat).toBe("actif");
    });
  });

  describe("quand la condition est fausse", () => {
    it("devrait retourner la valeur ifFalse", () => {
      const resultat = ternaryVal(false, "actif", "inactif");
      expect(resultat).toBe("inactif");
    });
  });

  it("devrait transmettre la valeur d'origine sans la modifier", () => {
    const valeurActive = { id: 1 };
    const valeurInactive = { id: -1 };
    const resultat = ternaryVal(true, valeurActive, valeurInactive);
    expect(resultat).toBe(valeurActive);
  });
});
