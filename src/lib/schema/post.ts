import {
  decimal,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const postTable = pgTable("post", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }),
  body: text("body").notNull().default(""),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  created_at: timestamp("created_at").defaultNow(),
  latitude: decimal("latitude", { precision: 10, scale: 6 }).notNull(),
  longitude: decimal("longitude", { precision: 10, scale: 6 }).notNull(),
});
