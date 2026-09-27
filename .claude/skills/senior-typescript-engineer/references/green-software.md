# Green Software Engineering

Resource efficiency is a quality attribute.

## Frontend
Check:
- unnecessary renders
- duplicate subscriptions/listeners
- timers/polling
- oversized imports
- duplicate HTTP calls
- eager loading of heavy features
- processing entire collections when a subset is needed

Prefer:
- lazy loading
- request deduplication
- event-driven updates
- efficient list rendering
- pagination/virtualization for large datasets
- cleanup of timers/subscriptions/listeners

## Backend
Check:
- N+1 queries
- repeated remote calls
- repeated parsing/serialization
- full-table/full-object retrieval
- unbounded concurrency
- large in-memory aggregation
- connection churn

Prefer:
- batching
- selecting required fields
- pagination
- streaming
- connection pooling
- bounded concurrency
- cache with explicit validity/invalidation

## Evaluation
An optimization should state:
- resource currently wasted
- expected improvement
- complexity introduced
- evidence or reason the optimization matters

Do not sacrifice maintainability for unmeasured micro-optimizations.
