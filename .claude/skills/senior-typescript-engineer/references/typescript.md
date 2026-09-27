# TypeScript

## Type safety

- Prefer `unknown` for untrusted/unknown values.
- Narrow before use.
- Avoid `any`.
- Avoid assertions unless supported by a verified invariant.
- Model finite states with discriminated unions.
- Prefer exhaustive `switch` checks.
- Keep public contracts explicit when inference would hide intent.

## API design

Prefer parameter objects for multiple related arguments.

Prefer:
```ts
interface CreateUserOptions {
  readonly name: string;
  readonly email: string;
  readonly role: UserRole;
}
```

Avoid positional boolean flags.

## Collections

Use arrays for ordered sequences.
Use `Set` for uniqueness/membership.
Use `Map` for repeated key-based lookup.

Do not replace readable O(n) code with complex indexing unless data size or hot-path behavior justifies it.

## Async

Use `Promise.all` for independent operations.
Do not parallelize dependent operations.
Avoid fire-and-forget promises unless ownership/error handling is explicit.
Never silently swallow rejection.

## Immutability

Prefer immutability when it improves reasoning.
Allow controlled local mutation when it materially reduces cost and does not leak shared state.
