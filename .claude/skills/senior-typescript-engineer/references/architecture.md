# Architecture

Respect the existing architecture unless architecture itself is being changed.

## Boundaries
Aim for clear separation of:
- domain/business rules
- application orchestration
- infrastructure/integrations
- presentation/UI

## Dependency direction
Stable business rules should not be coupled unnecessarily to volatile framework/vendor details.

## Change design
For a requested change:
1. locate the business responsibility
2. identify the correct boundary
3. reuse existing extension points
4. avoid cross-layer shortcuts
5. avoid circular dependencies
6. keep public API surface small

Do not create new layers merely to make diagrams look cleaner.
