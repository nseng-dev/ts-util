# SOLID — Pragmatic Rules

## SRP
A unit should own one coherent responsibility. Split only when responsibilities actually evolve independently.

## OCP
Create extension points for real variation already present or strongly required. Do not pre-build plugin architectures for hypothetical cases.

## LSP
A subtype must preserve the observable guarantees of the abstraction. If a subtype disables parent behavior, reconsider inheritance.

## ISP
Model interfaces around consumer capabilities. Avoid wide interfaces that force unused dependencies.

## DIP
Abstract volatile infrastructure boundaries where it improves testability or replaceability. Pure domain code should not depend directly on HTTP, databases or vendor SDKs.

## Anti-overengineering rule
SOLID is violated when its mechanical application makes a simple system harder to understand or change.
