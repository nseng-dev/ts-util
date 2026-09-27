import { ifTrue } from "./if-true";

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
