import { decimal, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const locationTable = pgTable("location", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull().default("Untitled"),
  longitude: decimal("longitude", { precision: 10, scale: 6 }).notNull(),
  latitude: decimal("latitude", { precision: 10, scale: 6 }).notNull(),
});
