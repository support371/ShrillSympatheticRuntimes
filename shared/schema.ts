import { pgTable, text, serial, integer, decimal, timestamp, boolean, jsonb, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const userRoleEnum = pgEnum("user_role", ["investor", "agent", "admin", "property_manager"]);
export const userStatusEnum = pgEnum("user_status", ["active", "inactive", "suspended", "pending_verification"]);
export const kycStatusEnum = pgEnum("kyc_status", ["not_submitted", "pending", "approved", "rejected"]);
export const propertyTypeEnum = pgEnum("property_type", ["single_family", "multi_family", "condo", "townhouse", "commercial", "land"]);
export const propertyStatusEnum = pgEnum("property_status", ["available", "under_contract", "sold", "rented", "maintenance"]);
export const listingStatusEnum = pgEnum("listing_status", ["draft", "active", "pending", "sold", "archived"]);
export const investmentStatusEnum = pgEnum("investment_status", ["pending", "active", "sold", "matured", "cancelled"]);
export const investmentTypeEnum = pgEnum("investment_type", ["full_ownership", "fractional", "fund", "reit"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  passwordHash: text("password_hash").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone"),
  role: userRoleEnum("role").notNull().default("investor"),
  status: userStatusEnum("status").notNull().default("pending_verification"),
  kycStatus: kycStatusEnum("kyc_status").notNull().default("not_submitted"),
  profileImageUrl: text("profile_image_url"),
  dateOfBirth: timestamp("date_of_birth"),
  ssnLast4: text("ssn_last_4"),
  address: jsonb("address"),
  emailVerified: boolean("email_verified").default(false),
  phoneVerified: boolean("phone_verified").default(false),
  twoFactorEnabled: boolean("two_factor_enabled").default(false),
  lastLoginAt: timestamp("last_login_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  mlsNumber: text("mls_number").unique(),
  propertyType: propertyTypeEnum("property_type").notNull(),
  status: propertyStatusEnum("status").notNull().default("available"),
  listingStatus: listingStatusEnum("listing_status").notNull().default("draft"),
  streetAddress: text("street_address").notNull(),
  unitNumber: text("unit_number"),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  bedrooms: decimal("bedrooms", { precision: 3, scale: 1 }),
  bathrooms: decimal("bathrooms", { precision: 3, scale: 1 }),
  squareFeet: integer("square_feet"),
  yearBuilt: integer("year_built"),
  listPrice: decimal("list_price", { precision: 12, scale: 2 }).notNull(),
  currentValue: decimal("current_value", { precision: 12, scale: 2 }),
  estimatedMonthlyRent: decimal("estimated_monthly_rent", { precision: 10, scale: 2 }),
  capRate: decimal("cap_rate", { precision: 5, scale: 2 }),
  description: text("description"),
  images: jsonb("images"), // [{url, order, caption}]
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const investments = pgTable("investments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  propertyId: integer("property_id").references(() => properties.id).notNull(),
  investmentType: investmentTypeEnum("investment_type").notNull().default("full_ownership"),
  status: investmentStatusEnum("status").notNull().default("pending"),
  investmentAmount: decimal("investment_amount", { precision: 12, scale: 2 }).notNull(),
  ownershipPercentage: decimal("ownership_percentage", { precision: 5, scale: 2 }),
  startDate: timestamp("start_date").notNull().defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true, updatedAt: true });
export const insertPropertySchema = createInsertSchema(properties).omit({ id: true, createdAt: true, updatedAt: true });
export const insertInvestmentSchema = createInsertSchema(investments).omit({ id: true, createdAt: true });

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Property = typeof properties.$inferSelect;
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Investment = typeof investments.$inferSelect;
export type InsertInvestment = z.infer<typeof insertInvestmentSchema>;
