# Library Management System

A full-stack library management system built with NestJS, React, and Prisma.

## Schema Decisions

In this project, the `Book` model references the `Genre` model via a `genreId` foreign key and the `@relation` attribute, rather than embedding the genre data directly inside the `Book` model.

**Why?** This follows the principles of relational database normalization:

1. **Single Source of Truth:** If we embedded the genre name in every book, updating a genre's name would require updating hundreds of book records. With a foreign key, we update the `Genre` table once, and all related books instantly reflect the change.

2. **Data Integrity:** The `@relation` and foreign key constraints ensure that a book cannot be assigned to a non-existent genre, preventing orphaned or invalid data.

3. **Efficiency:** It reduces data duplication, keeping the database size smaller and queries faster.

### Stretch Goal Note: Prisma vs. Document Databases

Modeling in Prisma (a relational ORM) felt distinctly different from a document database (like MongoDB). In a document database, I would likely embed the `Genre` directly inside the `Book` document for faster, single-query reads, accepting some data duplication. With Prisma/PostgreSQL, the focus shifts to strict data integrity, normalized tables, and using `JOIN`s (handled elegantly by Prisma's `include` feature) to reconstruct the nested data at runtime.