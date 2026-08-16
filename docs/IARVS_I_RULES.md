# IARVS AI Development Rules

You are assisting with the development of the Intelligent Academic Registration and Validation System (IARVS).

These instructions are mandatory for AI-assisted development within this repository.

## 1. Core Principle

AI is an engineering assistant, not an autonomous developer.

Do not blindly generate or modify code.

Before implementing a solution:

1. Understand the requested requirement.
2. Inspect the existing codebase for reusable implementations.
3. Follow the existing architecture and technology stack.
4. Prefer the simplest appropriate implementation.
5. Explain important architectural or security decisions when requested.
6. Never assume that generated code is correct or secure.

The developer remains responsible for all AI-generated code.

---

# 2. Approved Technology Baseline

The current IARVS web application uses:

* Next.js 16
* React 19
* TypeScript
* Next.js App Router
* Tailwind CSS
* shadcn/ui
* TanStack Query
* Prisma ORM
* PostgreSQL
* Redis
* JWT authentication
* Docker
* Docker Compose
* Background workers
* Monorepo architecture

Do not introduce another framework, ORM, database, authentication mechanism, state-management library, UI library, or major architectural technology unless explicitly requested or approved by the development team.

If a new dependency or technology appears necessary, explain why it is necessary before implementing it.

---

# 3. Reuse Before Create

Before creating any new:

* Component
* Hook
* Utility
* Service
* API helper
* Query function
* Validation function
* Type
* Interface
* Database helper
* Authentication helper
* Shared abstraction

inspect the existing repository first.

If an appropriate implementation already exists, reuse or extend it.

Do not create duplicate implementations simply because the existing implementation was not immediately obvious.

---

# 4. Architecture Preservation

Do not independently redesign or restructure the application.

Preserve:

* Existing folder structure
* Existing module boundaries
* Existing API conventions
* Existing authentication architecture
* Existing database architecture
* Existing Redis usage
* Existing worker architecture
* Existing component architecture

Do not introduce architectural changes merely because another pattern is easier to generate.

If a major architectural change appears necessary, stop and explain the proposed change and its trade-offs before implementing it.

---

# 5. React and Next.js

Prefer Server Components when client-side functionality is not required.

Use Client Components only when client-side functionality is genuinely required.

Do not add:

"use client"

to an entire page merely because one child component needs client-side functionality.

Prefer isolating the interactive functionality into a smaller Client Component.

Avoid unnecessary:

* useState
* useEffect
* useMemo
* useCallback
* custom hooks

Do not use React state/effects as a default solution.

First determine whether the requirement can be handled using:

* Server Components
* Server-side data access
* TanStack Query
* Props
* Derived values
* URL/search parameters
* Existing application mechanisms

---

# 6. TanStack Query

Use TanStack Query appropriately for client-side server-state management.

Do not implement server-state fetching using unnecessary combinations of:

* useEffect
* useState
* manual fetch
* manual loading state
* manual error state

when the established TanStack Query architecture is appropriate.

Do not assume TanStack Query itself provides data security.

Sensitive data must be protected by server-side authentication, authorization, API design, and response filtering.

---

# 7. shadcn/ui

Reuse existing shadcn/ui components whenever appropriate.

Do not manually recreate an existing component.

If an appropriate component does not exist, create a new component using the project's established technologies and conventions.

Do not introduce another UI library without explicit approval.

---

# 8. Business Logic

Do not duplicate business logic unnecessarily between frontend and backend.

Academic registration and validation rules are domain/business logic and must not be treated as frontend-only logic.

The frontend should not become the authoritative source for academic eligibility or registration decisions.

Do not move business logic into React components merely because it is convenient.

---

# 9. Database and Prisma

Prisma and PostgreSQL are the approved database technologies.

AI may generate Prisma queries and schema changes, but database-related changes require human review and testing.

Never independently:

* Modify the database schema
* Create major migrations
* Execute destructive database operations
* Delete production-like data
* Drop tables
* Perform mass destructive updates

without explicit team approval.

Pay particular attention to:

* Relationships
* Foreign keys
* Unique constraints
* Required fields
* Optional fields
* Indexes
* Cascading behavior
* Migration safety

---

# 10. Security

Never request or expose:

* Passwords
* API keys
* JWT secrets
* Database credentials
* Private tokens
* Production credentials
* .env secrets
* Real student records
* Sensitive personal information

Use placeholders when demonstrating sensitive values.

All generated authentication and authorization code requires human review.

All API endpoints must be checked for:

* Authentication
* Authorization
* Role/permission enforcement
* Input validation
* Output filtering
* Unauthorized access
* Injection risks

Never claim that code is secure without explaining the basis for that conclusion.

---

# 11. Dependencies

Do not install a package merely because it makes implementation easier.

Before recommending a dependency:

1. Check whether the existing project already provides the functionality.
2. Explain why the dependency is necessary.
3. Consider whether it increases project complexity.
4. Consider compatibility with the existing stack.
5. Consider security and maintenance.

Never silently introduce a major dependency.

---

# 12. Code Quality

Prefer:

* Simple implementations
* Existing abstractions
* Clear naming
* Strong typing
* Small focused components
* Reusable utilities
* Existing project patterns
* Maintainable code

Avoid:

* Duplicate code
* Unnecessary abstractions
* Excessive hooks
* Excessive wrappers
* Unnecessary libraries
* Premature optimization
* Over-engineering
* Generated code that does not follow existing conventions

Do not rewrite working code unnecessarily.

---

# 13. Comments

Add comments for:

* Complex academic rules
* Non-obvious algorithms
* Security-sensitive decisions
* Important workarounds
* Architectural constraints
* Non-obvious implementation decisions

Comments should explain WHY something is done, not describe obvious code.

Do not add meaningless comments to every line.

---

# 14. Testing

Do not assume AI-generated code works.

For every meaningful implementation:

* Identify relevant edge cases.
* Test expected behavior.
* Test invalid input where appropriate.
* Test error handling.
* Test authorization where relevant.
* Test database behavior where relevant.
* Test security-sensitive behavior manually.

When generating database, authentication, authorization, or security-sensitive code, provide a practical manual testing procedure when appropriate.

---

# 15. Code Review

AI-generated code is not considered complete merely because it compiles or runs.

Before merging:

1. The developer must understand the implementation.
2. The developer must test it.
3. The developer must self-review it.
4. A Pull Request must be created.
5. At least one other team member must review it.
6. Review findings must be addressed.

Never recommend bypassing the project's review process.

---

# 16. Developer Responsibility

The developer who accepts AI-generated code is responsible for it.

"AI generated this" is not an acceptable justification for:

* Bugs
* Security vulnerabilities
* Poor architecture
* Unnecessary dependencies
* Incorrect database behavior
* Broken functionality

Treat AI-generated code as code written by the developer once it is accepted into the project.

---

# 17. When Requirements Are Ambiguous

Do not invent important requirements.

If the requested implementation depends on an unclear architectural or business decision:

1. Identify the ambiguity.
2. State the assumptions.
3. Ask for clarification when necessary.
4. Do not silently choose a major architectural direction.

For minor implementation details, follow existing project conventions.

---

# 18. Before Generating Code

Before generating a significant implementation, inspect relevant existing files.

Especially inspect:

* Existing components
* Existing hooks
* Existing API routes
* Existing query functions
* Existing services
* Existing Prisma models
* Existing authentication utilities
* Existing validation utilities
* Existing UI components
* Existing folder/module structure

Do not generate an isolated solution without considering the existing codebase.

---

# 19. AI Slop Prevention

Do not produce code that is merely technically functional but inconsistent with IARVS.

Avoid:

* Duplicate components
* Duplicate utilities
* Random libraries
* Unnecessary useEffect
* Unnecessary useState
* Excessive "use client"
* Large monolithic components
* Repeated business logic
* Unnecessary abstractions
* Arbitrary folder structures
* Blind database migrations
* Blind authentication implementations
* Untested generated code

The goal is not to minimize AI usage.

The goal is to produce maintainable, secure, understandable, architecturally consistent software.

---

# 20. Final Rule

Before generating or modifying code, always consider:

1. Does this already exist?
2. Does this follow the current IARVS architecture?
3. Is this the simplest appropriate solution?
4. Am I introducing unnecessary dependencies?
5. Am I using the correct Next.js/React pattern?
6. Should TanStack Query be used?
7. Can an existing shadcn component be reused?
8. Am I duplicating business logic?
9. Are there security implications?
10. How will this implementation be tested?

If the proposed solution conflicts with the existing IARVS architecture, do not silently implement the conflicting approach.
