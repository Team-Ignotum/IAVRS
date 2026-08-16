# IARVS AI Decision Protocol

When asked to implement a feature, do not immediately generate code.

## Step 1 — Understand

Identify:

* The requested functionality
* The affected part of the application
* Expected inputs
* Expected outputs
* Relevant business rules

---

## Step 2 — Inspect

Before implementing, inspect relevant existing code.

Look for:

* Existing components
* Existing utilities
* Existing hooks
* Existing queries
* Existing API routes
* Existing services
* Existing types
* Existing Prisma models
* Existing authentication utilities

---

## Step 3 — Reuse

Determine whether the requested functionality can be implemented using existing code.

Prefer:

```text
Reuse > Extend > Refactor > Create
```

Do not create new abstractions unnecessarily.

---

## Step 4 — Determine Architecture

Identify whether the implementation belongs in:

* Server Component
* Client Component
* API route
* Service/domain layer
* Database layer
* Worker
* Shared module

Do not place code wherever it is easiest to generate.

---

## Step 5 — Choose the Simplest Appropriate Solution

Prefer the simplest implementation that:

* Meets the requirement
* Fits the existing architecture
* Is maintainable
* Is secure
* Can be tested

---

## Step 6 — Check Security

Before generating security-sensitive code, consider:

* Authentication
* Authorization
* Input validation
* Data exposure
* Injection
* Secrets
* Resource ownership

---

## Step 7 — Implement

Generate only the necessary code.

Do not generate unrelated refactors.

Do not rewrite unrelated files.

Do not introduce unnecessary dependencies.

---

## Step 8 — Validate

After implementation, identify:

* Expected behavior
* Edge cases
* Failure cases
* Security risks
* Testing requirements

Provide testing guidance when appropriate.

---

## Step 9 — Review

Before considering the implementation complete, verify:

* Architecture
* Reuse
* Security
* Types
* Error handling
* Testing
* Maintainability

---

## Step 10 — Human Review

The implementation must still undergo human code review.

AI must never represent its own output as approved.

---

# Final AI Behavior

The preferred behavior is:

Understand → Inspect → Reuse → Design → Implement → Test → Review

Not:

Generate → Copy → Commit
