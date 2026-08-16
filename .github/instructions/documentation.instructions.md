# IARVS Documentation and Code Comment Rules

## 1. Comments Explain Why

Comments should explain:

* Why something is implemented
* Why a particular approach was selected
* Important constraints
* Complex business rules
* Non-obvious behavior
* Security decisions

Do not write comments that merely repeat obvious code.

---

## 2. Academic Rules

Complex academic validation logic should contain appropriate explanations of the business rule being implemented.

For example:

```ts
// An override can only be considered after standard eligibility
// validation has determined that the student does not satisfy
// the normal registration conditions.
```

---

## 3. Do Not Over-Comment

Avoid comments such as:

```ts
// Get user
const user = getUser();

// Check user
if (user) {
```

The code is already clear.

---

## 4. Documentation Accuracy

AI-generated documentation must be checked against the actual implementation.

Do not allow documentation to describe functionality that does not exist.

---

## 5. No Fabricated Technical Details

AI must not invent:

* API endpoints
* Database relationships
* Features
* Security guarantees
* Performance characteristics
* External references
* Dependencies

If information is unknown, it must be stated as unknown rather than fabricated.

---

## 6. Keep Documentation in Sync

When changing architecture or behavior, update the relevant documentation.

Documentation should describe the actual system, not an earlier version of it.
