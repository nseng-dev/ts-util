# Senior TypeScript Engineer — Claude Code Skill

Skill prêt à l'emploi pour Claude Code.

## Installation utilisateur

Copier le dossier `senior-typescript-engineer` dans :

```text
~/.claude/skills/
```

Résultat :

```text
~/.claude/skills/
└── senior-typescript-engineer/
    ├── SKILL.md
    ├── references/
    └── prompts/
```

Claude Code détecte le skill grâce aux métadonnées `name` et `description` de `SKILL.md` et le charge lorsqu'il est pertinent.

## Installation rapide

### macOS / Linux

Depuis le dossier qui contient ce skill :

```bash
mkdir -p ~/.claude/skills
cp -R senior-typescript-engineer ~/.claude/skills/
```

### Windows PowerShell

```powershell
New-Item -ItemType Directory -Force "$HOME\.claude\skills" | Out-Null
Copy-Item -Recurse -Force ".\senior-typescript-engineer" "$HOME\.claude\skills\"
```

## Utilisation

Tu n'es pas obligé d'écrire le nom du skill. Claude peut l'activer automatiquement lorsqu'une tâche TypeScript correspond à sa description.

Pour une tâche importante, indique explicitement les contraintes et demande d'inspecter le dépôt avant modification.

Exemple :

```text
Utilise les standards du skill senior-typescript-engineer.
Analyse d'abord le code existant. Ne modifie rien avant d'avoir identifié la cause.
Corrige ensuite le problème avec la plus petite modification cohérente.
Exécute le type-check, les tests concernés et le lint.
```

## Contenu

- `SKILL.md` : règles principales
- `references/typescript.md` : TypeScript moderne et type safety
- `references/solid.md` : SOLID pragmatique
- `references/design-patterns.md` : choix des patterns
- `references/green-software.md` : Green Software
- `references/testing.md` : stratégie de tests
- `references/security.md` : sécurité
- `references/architecture.md` : architecture et frontières
- `references/code-review.md` : méthode de review
- `prompts/PROMPTS.md` : prompts prêts à copier

## Conseil

Utilise des prompts orientés résultat. Donne :
- l'objectif
- le périmètre
- les contraintes
- les validations attendues
- ce qui ne doit pas être modifié

Évite les demandes vagues comme `améliore ce code`.
