// import type { Config } from "jest";

// On type l'objet de configuration avec le type 'Config' de Jest
const config = {
  // Un preset qui sert de base à la configuration de Jest.
  // 'ts-jest' est essentiel pour que Jest comprenne vos fichiers de test en TypeScript.
  preset: "ts-jest",

  // L'environnement de test qui sera utilisé. 'node' est parfait pour une bibliothèque.
  testEnvironment: "node",

  // Efface automatiquement les mocks et les instances avant chaque test.
  // C'est une bonne pratique pour assurer l'isolement des tests.
  clearMocks: true,

  // Indique si les informations de couverture de code doivent être collectées.
  collectCoverage: true,

  // Le répertoire où Jest doit générer les rapports de couverture.
  coverageDirectory: "coverage",

  // Le dossier racine que Jest doit utiliser pour rechercher les fichiers.
  roots: ["<rootDir>/src"],
};

// On exporte la configuration pour que Jest puisse la lire.
export default config;
