# IARVS Database and Prisma Rules

## 1. Database Stack

The approved database stack is:

* PostgreSQL
* Prisma ORM
* Prisma migrations
* Prisma generated client

Do not introduce another ORM or database without explicit approval.

---

## 2. Schema First

Before modifying `schema.prisma`, understand:

* Existing models
* Relationships
* Constraints
* Indexes
* Existing migrations
* Existing application dependencies

Do not modify the schema blindly.

---

## 3. Migration Safety

Every schema change must be reviewed before migration.

Consider:

* Existing records
* Required fields
* Foreign keys
* Unique constraints
* Nullability
* Cascades
* Indexes
* Migration compatibility

---

## 4. Destructive Operations

Never execute destructive database operations without explicit team approval.

Examples:

* DROP TABLE
* DROP DATABASE
* TRUNCATE
* Large DELETE operations
* Destructive migrations
* Mass updates

AI must not execute or recommend destructive operations without clearly explaining their consequences.

---

## 5. Existing Data

Do not assume the database is empty.

Before changing a schema, consider how the change affects existing data.

If existing records need transformation, define and test the migration strategy.

---

## 6. Query Design

Use Prisma appropriately.

Avoid:

* Unnecessary queries
* N+1 queries
* Loading entire tables unnecessarily
* Returning unnecessary fields
* Duplicate database access

Select only required fields where appropriate.

---

## 7. Security

Every database operation involving user-controlled input must be reviewed for:

* Authorization
* Injection risks
* Data exposure
* Resource ownership
* Unintended access

Never assume Prisma automatically makes every application-level data-access decision secure.

---

## 8. AI-Generated Database Code

AI-generated:

* Prisma models
* Prisma queries
* Migrations
* Seed scripts
* Database utilities

must undergo human review.

The developer must be able to explain:

* What the query does
* Which records it accesses
* Why the relationships are correct
* What happens when data does not exist
* What happens with duplicate data
* What happens with unauthorized access

---

## 9. Manual Testing

Database changes should be tested using realistic test data.

Verify:

* Normal case
* Empty case
* Invalid input
* Missing related data
* Duplicate data
* Relationship behavior
* Authorization
* Error behavior

---

## 10. Generated Prisma Client

Do not manually modify generated Prisma client code.

Modify the schema and regenerate the client according to the established project workflow.
