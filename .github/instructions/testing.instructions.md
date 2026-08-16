# IARVS Testing Rules for AI-Assisted Development

## 1. Core Principle

AI-generated code is not considered correct simply because:

* It compiles
* TypeScript has no errors
* The page renders
* The API returns 200
* The AI says it works

Actual testing is required.

---

## 2. Developer Testing

The developer implementing a feature must perform an initial test before creating the Pull Request.

---

## 3. Functional Testing

Test:

* Expected behavior
* Invalid behavior
* Edge cases
* Empty states
* Error states
* Boundary conditions

---

## 4. API Testing

For APIs test at minimum:

* Valid request
* Invalid request
* Missing required fields
* Unauthorized request
* Forbidden request
* Missing resource
* Unexpected input

---

## 5. UI Testing

For UI features test:

* Rendering
* Interaction
* Loading
* Error
* Empty
* Success
* Disabled states
* Responsive behavior where relevant

---

## 6. Academic Rules Testing

For IARVS academic functionality, testing should include realistic scenarios such as:

* Eligible student
* Ineligible student
* Missing prerequisite
* Completed prerequisite
* Failed prerequisite
* Curriculum transition
* Override request
* Repeat course
* Concurrent registration
* Conflicting registration

Do not test only the happy path.

---

## 7. AI-Generated Code

When AI generates a feature, ask:

1. What could go wrong?
2. What assumptions does this implementation make?
3. What edge cases exist?
4. What happens with invalid data?
5. What happens when the database returns nothing?
6. What happens when the user is unauthorized?

Use the answers to design tests.

---

## 8. Manual Testing Instructions

When generating security-sensitive or database-related code, AI should provide practical manual testing steps when requested.

The developer must actually execute the relevant tests.

---

## 9. Regression Testing

When modifying existing functionality, verify that existing behavior has not been broken.

Do not assume that a new feature is isolated from existing functionality.

---

## 10. Pull Request Requirement

A feature is not complete until:

* Developer testing is complete.
* Relevant tests pass.
* Self-review is complete.
* Pull Request is created.
* At least one other team member reviews it.
* Review issues are resolved.
