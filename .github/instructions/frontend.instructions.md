# IARVS Frontend Development Rules

## Scope

These rules apply to the Next.js/React frontend of IARVS.

## 1. Framework Standards

Use the existing:

* Next.js 16
* React 19
* TypeScript
* App Router
* Tailwind CSS
* shadcn/ui
* TanStack Query

Do not introduce alternative frontend frameworks or major frontend libraries without explicit team approval.

---

## 2. Server Components

Prefer Server Components whenever client-side functionality is not required.

Do not add `"use client"` by default.

Use Client Components only when the component genuinely requires client-side functionality such as:

* Browser APIs
* Event handlers
* Client-side state
* Client-side hooks
* Interactive UI

If only a small portion of a page requires client-side functionality, isolate that functionality into a smaller Client Component.

Do not convert an entire page to a Client Component unnecessarily.

---

## 3. State Management

Do not automatically use `useState` and `useEffect`.

Before introducing React state, determine whether the value is:

* Server state
* Derived state
* URL state
* Form state
* UI state

Use the appropriate mechanism.

Do not store derived values in state when they can be calculated directly.

---

## 4. Data Fetching

Use the established TanStack Query architecture for appropriate client-side server-state management.

Do not create repeated patterns such as:

```text
useEffect
+
useState
+
fetch()
+
manual loading
+
manual error handling
```

when TanStack Query is appropriate.

Reuse existing query functions and patterns.

Before creating a new query hook/function, inspect the repository for an existing implementation.

---

## 5. Component Reuse

Before creating a component:

1. Search the existing component directory.
2. Search for similar UI functionality.
3. Check existing shadcn components.
4. Check existing project-specific components.

Reuse or extend existing components when practical.

Do not create duplicate:

* Buttons
* Dialogs
* Tables
* Forms
* Cards
* Dropdowns
* Modals
* Inputs
* Loading components
* Error components

---

## 6. shadcn/ui

Use existing shadcn/ui components whenever appropriate.

Do not manually recreate functionality already provided by the project's shadcn components.

If no suitable component exists, create a new component using the project's established styling and component conventions.

Do not introduce another UI component library without approval.

---

## 7. TypeScript

Use TypeScript properly.

Avoid:

```ts
any
```

unless there is a documented and justified reason.

Prefer:

* Explicit types
* Existing shared types
* Type inference where appropriate
* Discriminated unions where useful
* Proper API response types

Do not create duplicate types when an appropriate existing type exists.

---

## 8. Component Size

Avoid unnecessarily large components.

If a component contains multiple independent responsibilities, consider separating them.

However, do not blindly create components for every small block of JSX.

The goal is:

> Clear boundaries without unnecessary fragmentation.

---

## 9. Business Logic

Do not place authoritative academic business logic inside UI components.

Components should primarily handle:

* Presentation
* User interaction
* UI state
* Calling appropriate application services/query functions

Academic validation rules should remain in the appropriate server/domain layer.

---

## 10. UI States

Interactive features should consider:

* Loading state
* Empty state
* Error state
* Success state
* Disabled state
* Unauthorized/forbidden state where applicable

Do not implement only the happy path.

---

## 11. Responsive Design

Follow the existing Tailwind conventions.

Do not introduce arbitrary styling systems.

Reuse existing layout patterns before creating new ones.

---

## 12. Frontend AI Generation

Before generating significant frontend code:

1. Inspect existing components.
2. Inspect existing query patterns.
3. Inspect the page's Server/Client boundary.
4. Check whether the functionality already exists.
5. Follow existing UI conventions.
6. Avoid unnecessary hooks.
7. Avoid unnecessary Client Components.
8. Test the resulting behavior.

Never generate a completely independent UI architecture for a single page.
