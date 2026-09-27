# Testing

Use behavior-oriented tests.

## Minimum test matrix
For changed business behavior consider:
- nominal case
- boundary values
- empty/missing values
- invalid input
- failure of external dependency
- concurrency/state transition if applicable
- regression case that reproduces the original bug

## Rules
- deterministic tests
- explicit Arrange / Act / Assert where useful
- mock boundaries, not internal details
- avoid testing private methods directly
- avoid arbitrary delays
- use fake clocks/timers when time matters
- keep fixtures minimal

For bug fixes, create or identify a test that fails before the fix and passes afterward when practical.
