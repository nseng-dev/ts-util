import { Logic } from "./logic";

describe("Logic", () => {
  describe("and", () => {
    it("devrait retourner true si a et b sont vrais", () => {
      expect(Logic.and(true, true)).toBe(true);
    });

    it("devrait retourner false si a est vrai et b est faux", () => {
      expect(Logic.and(true, false)).toBe(false);
    });

    it("devrait retourner false si a est faux et b est vrai", () => {
      expect(Logic.and(false, true)).toBe(false);
    });

    it("devrait retourner false si a et b sont faux", () => {
      expect(Logic.and(false, false)).toBe(false);
    });
  });

  describe("or", () => {
    it("devrait retourner true si a et b sont vrais", () => {
      expect(Logic.or(true, true)).toBe(true);
    });

    it("devrait retourner true si a est vrai et b est faux", () => {
      expect(Logic.or(true, false)).toBe(true);
    });

    it("devrait retourner true si a est faux et b est vrai", () => {
      expect(Logic.or(false, true)).toBe(true);
    });

    it("devrait retourner false si a et b sont faux", () => {
      expect(Logic.or(false, false)).toBe(false);
    });
  });

  describe("not", () => {
    it("devrait retourner false si a est vrai", () => {
      expect(Logic.not(true)).toBe(false);
    });

    it("devrait retourner true si a est faux", () => {
      expect(Logic.not(false)).toBe(true);
    });
  });

  describe("xor", () => {
    it("devrait retourner false si a et b sont vrais", () => {
      expect(Logic.xor(true, true)).toBe(false);
    });

    it("devrait retourner true si a est vrai et b est faux", () => {
      expect(Logic.xor(true, false)).toBe(true);
    });

    it("devrait retourner true si a est faux et b est vrai", () => {
      expect(Logic.xor(false, true)).toBe(true);
    });

    it("devrait retourner false si a et b sont faux", () => {
      expect(Logic.xor(false, false)).toBe(false);
    });
  });
});
