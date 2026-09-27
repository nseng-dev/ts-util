# Code Review

Review changed code against real behavior.

## Severity

### Critical
Likely security issue, data loss/corruption, major outage, broken core behavior.

### Important
Real bug, regression, substantial maintainability/performance risk, incorrect error handling or contract.

### Improvement
Useful simplification, clarity, performance or test improvement without immediate correctness failure.

## Finding format

**[Severity] Short title**
- Location: file + symbol/line when available
- Problem: concrete behavior or design issue
- Impact: why it matters
- Fix: actionable correction

Do not report hypothetical issues without a plausible execution path.
Do not focus on formatting if automated tooling already handles it.
