import { match } from "./match";

type Forme =
  | { type: "cercle"; rayon: number }
  | { type: "carre"; cote: number };

// TypeScript figerait le type de `forme` sur la seule variante littérale
// utilisée si on l'assignait directement à une const : cette fonction force
// la conservation du type union complet, comme le ferait un vrai paramètre.
function creerForme(forme: Forme): Forme {
  return forme;
}

describe("match", () => {
  describe("quand la valeur correspond à un cas géré", () => {
    it("devrait calculer la surface d'un cercle", () => {
      const forme = creerForme({ type: "cercle", rayon: 2 });
      const surface = match(forme, "type", {
        cercle: (f) => Math.PI * f.rayon ** 2,
        carre: (f) => f.cote ** 2,
      });
      expect(surface).toBeCloseTo(Math.PI * 4);
    });

    it("devrait calculer la surface d'un carré", () => {
      const forme = creerForme({ type: "carre", cote: 3 });
      const surface = match(forme, "type", {
        cercle: (f) => Math.PI * f.rayon ** 2,
        carre: (f) => f.cote ** 2,
      });
      expect(surface).toBe(9);
    });
  });

  describe("quand aucun gestionnaire ne correspond", () => {
    it("devrait lancer une erreur avec le tag rencontré", () => {
      const forme = { type: "triangle" } as unknown as Forme;
      expect(() =>
        match(forme, "type", {
          cercle: (f) => Math.PI * f.rayon ** 2,
          carre: (f) => f.cote ** 2,
        })
      ).toThrow('Aucun gestionnaire trouvé pour la valeur "triangle".');
    });
  });

  describe("exhaustivité (vérification à la compilation)", () => {
    it("devrait refuser un objet handlers incomplet", () => {
      const forme = creerForme({ type: "cercle", rayon: 1 });
      // @ts-expect-error handlers doit couvrir tous les cas de l'union ("carre" manquant ici).
      match(forme, "type", {
        cercle: (f) => Math.PI * f.rayon ** 2,
      });
    });
  });
});
