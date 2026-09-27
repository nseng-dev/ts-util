# Security

Apply proportional security checks to the task.

## Boundaries
Validate data from:
- users
- HTTP
- files
- databases when schema trust is uncertain
- queues/events
- third-party APIs

## Review
Consider:
- injection
- XSS
- authorization checks
- authentication assumptions
- unsafe path construction
- prototype pollution
- unsafe dynamic property access
- secret exposure
- PII/sensitive logging
- dependency risk

Never expose secrets in code, tests, logs, generated examples or commits.
