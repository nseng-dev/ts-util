import { Comparison } from "./comparison";

describe("Comparison", () => {
  describe("eq", () => {
    it("devrait retourner true pour deux nombres identiques", () => {
      expect(Comparison.eq(42, 42)).toBe(true);
    });

    it("devrait retourner false pour deux nombres différents", () => {
      expect(Comparison.eq(42, 43)).toBe(false);
    });

    it("devrait retourner true pour NaN et NaN (contrairement à ===)", () => {
      expect(Comparison.eq(NaN, NaN)).toBe(true);
    });

    it("devrait retourner false pour 0 et -0 (contrairement à ===)", () => {
      expect(Comparison.eq(0, -0)).toBe(false);
    });

    it("devrait retourner true pour la même référence d'objet", () => {
      const objet = { id: 1 };
      expect(Comparison.eq(objet, objet)).toBe(true);
    });

    it("devrait retourner false pour deux objets structurellement identiques mais de références différentes", () => {
      expect(Comparison.eq({ id: 1 }, { id: 1 })).toBe(false);
    });
  });

  describe("neq", () => {
    it("devrait retourner false pour deux nombres identiques", () => {
      expect(Comparison.neq(42, 42)).toBe(false);
    });

    it("devrait retourner true pour deux nombres différents", () => {
      expect(Comparison.neq(42, 43)).toBe(true);
    });

    it("devrait retourner false pour NaN et NaN (contrairement à !==)", () => {
      expect(Comparison.neq(NaN, NaN)).toBe(false);
    });

    it("devrait retourner true pour 0 et -0 (contrairement à !==)", () => {
      expect(Comparison.neq(0, -0)).toBe(true);
    });
  });

  describe("lt", () => {
    it("devrait retourner true si a est strictement inférieur à b", () => {
      expect(Comparison.lt(5, 10)).toBe(true);
    });

    it("devrait retourner false si a est strictement supérieur à b", () => {
      expect(Comparison.lt(10, 5)).toBe(false);
    });

    it("devrait retourner false si a et b sont égaux", () => {
      expect(Comparison.lt(5, 5)).toBe(false);
    });
  });

  describe("lte", () => {
    it("devrait retourner true si a est strictement inférieur à b", () => {
      expect(Comparison.lte(5, 10)).toBe(true);
    });

    it("devrait retourner false si a est strictement supérieur à b", () => {
      expect(Comparison.lte(10, 5)).toBe(false);
    });

    it("devrait retourner true si a et b sont égaux", () => {
      expect(Comparison.lte(5, 5)).toBe(true);
    });
  });

  describe("gt", () => {
    it("devrait retourner true si a est strictement supérieur à b", () => {
      expect(Comparison.gt(10, 5)).toBe(true);
    });

    it("devrait retourner false si a est strictement inférieur à b", () => {
      expect(Comparison.gt(5, 10)).toBe(false);
    });

    it("devrait retourner false si a et b sont égaux", () => {
      expect(Comparison.gt(5, 5)).toBe(false);
    });
  });

  describe("gte", () => {
    it("devrait retourner true si a est strictement supérieur à b", () => {
      expect(Comparison.gte(10, 5)).toBe(true);
    });

    it("devrait retourner false si a est strictement inférieur à b", () => {
      expect(Comparison.gte(5, 10)).toBe(false);
    });

    it("devrait retourner true si a et b sont égaux", () => {
      expect(Comparison.gte(5, 5)).toBe(true);
    });
  });
});
