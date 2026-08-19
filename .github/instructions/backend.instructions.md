# IARVS Backend and API Development Rules

## 1. Scope

These rules apply to Next.js server-side code, API routes, services, business logic, authentication-related server code, and background processing.

---

## 2. Separation of Responsibilities

Maintain clear separation between:

* API layer
* Authentication/authorization
* Business/domain logic
* Data access
* Database layer

Do not place large amounts of business logic directly inside API route handlers.

API handlers should coordinate the request rather than become large monolithic functions.

---

## 3. Academic Business Rules

IARVS contains important academic rules including:

* Prerequisites
* Eligibility
* Concurrent registration
* Curriculum transitions
* Overrides
* Repeat conditions
* Registration restrictions

These rules are domain logic.

Do not implement them independently in multiple API endpoints.

Reuse the authoritative domain/service implementation.

---

## 4. API Validation

Every API endpoint receiving user-controlled input must validate that input.

Validate:

* Required fields
* Types
* Formats
* Allowed values
* IDs
* Relationships
* Business constraints

Do not assume the frontend has already validated the request.

---

## 5. Authorization

Never rely solely on frontend authorization.

Every protected API operation must enforce authorization server-side.

Check:

* Authentication
* User identity
* Role
* Permission
* Resource ownership
* Operation-specific authorization

---

## 6. API Responses

Return only data required by the client.

Do not expose:

* Password hashes
* Secrets
* Internal tokens
* Unnecessary database fields
* Internal implementation details
* Sensitive student information

Do not return entire database records simply because it is convenient.

---

## 7. Error Handling

Do not expose internal errors directly to clients.

Avoid returning:

* Stack traces
* Database credentials
* SQL details
* Internal file paths
* Secrets

Provide appropriate client-facing errors while preserving useful server-side logging.

---

## 8. Database Access

Use Prisma according to the existing project architecture.

Do not introduce direct database access patterns when an established data-access abstraction already exists.

Avoid duplicate database logic.

---

## 9. API Changes

Before creating a new endpoint:

1. Search for an existing endpoint.
2. Check whether the existing endpoint can be extended.
3. Check existing naming conventions.
4. Check existing authentication conventions.
5. Check response formats.
6. Check validation patterns.

Do not create duplicate endpoints for the same domain operation.

---

## 10. AI-Generated API Code

AI-generated API code requires manual verification of:

* Input validation
* Authentication
* Authorization
* Database access
* Error handling
* Data exposure
* Injection risks
* Edge cases

A successful HTTP response does not prove that an API is correctly implemented.

---

## 11. Server-Side Security Boundary

Never trust:

* Client-provided roles
* Client-provided permissions
* Client-provided user IDs
* Client-side eligibility decisions
* Client-side validation alone

The server must independently establish whether an operation is permitted.

---

## 12. Performance

Avoid unnecessary:

* Database queries
* N+1 queries
* Large database responses
* Repeated expensive calculations
* Unbounded data retrieval

Do not optimize prematurely.

Measure or identify a genuine performance problem before introducing complex optimization.
