# Design Patterns

Choose patterns from the problem, never the reverse.

## Strategy
Use for several interchangeable algorithms/behaviors selected by configuration or runtime state.

## Factory
Use when object creation contains real branching, invariants or dependency construction.

## Adapter
Use at integration boundaries to prevent vendor/legacy APIs leaking into domain code.

## Repository
Use when persistence details must be isolated from domain/application logic. Do not create pass-through repositories with no architectural value.

## Command
Use for operations requiring queuing, undo, audit, orchestration or independent execution.

## Builder
Use when construction is complex, ordered, validated or has many optional elements.

## Facade
Use to expose a stable simplified API over a complex subsystem.

## Decorator
Use for composable cross-cutting behavior without modifying the core implementation.

## Observer
Use for decoupled event reactions. Prefer framework-native event/reactive primitives when appropriate.

## Pattern review
Before adding a pattern, compare it against:
1. plain function
2. composition
3. simple object
4. direct dependency injection

Choose the least complex option that cleanly solves the current problem.
