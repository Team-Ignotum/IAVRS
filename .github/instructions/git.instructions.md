# IARVS Git Branching Rules

## 1. Branch Naming Convention

All feature branches must follow:

```text
<area>/<type>/<descriptor>
```

### Allowed Areas

```text
fe
be
infra
config
```

### Allowed Types

```text
feat
fix
hotfix
docs
refactor
chore
release
```

### Valid Examples

```text
fe/feat/ed-110
fe/fix/ed-125
be/feat/ed-142
be/fix/ed-155
infra/chore/docker-configuration
config/refactor/auth-config
be/hotfix/registration-validation
```

Descriptors must:

* Use lowercase letters
* Use numbers where appropriate
* Use hyphens for word separation
* Not contain spaces
* Not contain uppercase letters

Example:

```text
fe/feat/student-registration
```

is valid.

```text
fe/feat/StudentRegistration
```

is invalid.

---

## 2. Protected / Exempt Branches

The following branches are exempt from the branch naming convention:

```text
main
dev
dev-stage
staging
develop
```

Do not create alternative permanent branches without team agreement.

---

## 3. Area Selection

Use the area that represents the primary purpose of the change.

### `fe`

Frontend/UI changes.

Examples:

```text
fe/feat/student-dashboard
fe/fix/registration-form
fe/refactor/student-table
```

### `be`

Backend/API/business-logic changes.

Examples:

```text
be/feat/registration-api
be/fix/prerequisite-validation
be/refactor/registration-service
```

### `infra`

Infrastructure/deployment/container changes.

Examples:

```text
infra/chore/update-docker
infra/feat/worker-container
infra/fix/redis-config
```

### `config`

Configuration-related changes.

Examples:

```text
config/chore/update-eslint
config/refactor/auth-config
```

---

## 4. Branch Scope

A branch should represent one coherent piece of work.

Avoid branches containing unrelated changes such as:

```text
feature-registration
+ database redesign
+ authentication rewrite
+ UI redesign
+ Docker changes
```

AI-generated changes must follow the same rule.

---

## 5. AI-Generated Work

AI assistance does not change the Git workflow.

AI-generated code must still be developed on an appropriately named branch.

AI must not recommend bypassing branch protection or naming conventions.

---

## 6. Before Creating a Branch

Determine:

1. What part of the system is being changed?
2. What type of change is it?
3. What issue/task does it correspond to?

Then select:

```text
<area>/<type>/<descriptor>
```

Example:

Requirement:

> Implement prerequisite validation API.

Branch:

```text
be/feat/prerequisite-validation
```

Requirement:

> Fix registration form validation.

Branch:

```text
fe/fix/registration-validation
```

---

## 7. Do Not Create Random Branch Names

Avoid:

```text
test
testing
my-branch
new-feature
update
fixing
stuff
changes
copilot
chatgpt-code
ai-generated
```

Branch names should communicate the purpose of the work.

---

## 8. Pull Requests

A Pull Request should normally originate from the appropriately named working branch.

Before merging:

* The implementation must be tested.
* The developer must self-review the changes.
* At least one other team member must review the PR.
* Review comments must be addressed.
* The branch must satisfy repository CI checks.

---

## 9. AI Must Not Bypass Git Controls

AI must not:

* Disable branch protection
* Bypass required reviews
* Push directly to protected branches
* Modify GitHub Actions merely to avoid checks
* Disable CI checks to make a PR pass
* Rename or delete branches without developer authorization
* Change repository policies without explicit approval

---

## 10. Repository Automation

The repository contains automated branch-name validation.

Developers should follow the convention before pushing/creating the branch rather than relying on GitHub to reject an invalid name.

The authoritative convention is:

```text
^(fe|be|infra|config)\/(feat|fix|hotfix|docs|refactor|chore|release)\/[a-z0-9][a-z0-9\-]+$
```

Do not modify this convention without team approval.
