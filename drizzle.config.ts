import { defineConfig } from "drizzle-kit";

const connectionString = process.env.DATABASE_URL || "./drizzle/db.sqlite";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: connectionString,
  },
});
