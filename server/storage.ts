import { db } from "../db/index";
import { 
  users, 
  properties,
  investments,
  type User, 
  type InsertUser,
  type Property,
  type InsertProperty,
  type Investment,
  type InsertInvestment,
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Properties
  getAllProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;
  updateProperty(id: number, updates: Partial<Property>): Promise<Property>;
  
  // Investments
  createInvestment(investment: InsertInvestment): Promise<Investment>;
  getUserInvestments(userId: number): Promise<Investment[]>;
  getInvestment(id: number): Promise<Investment | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getAllProperties(): Promise<Property[]> {
    return db.select().from(properties);
  }

  async getProperty(id: number): Promise<Property | undefined> {
    const [property] = await db.select().from(properties).where(eq(properties.id, id)).limit(1);
    return property;
  }

  async createProperty(property: InsertProperty): Promise<Property> {
    const [newProperty] = await db.insert(properties).values(property).returning();
    return newProperty;
  }

  async updateProperty(id: number, updates: Partial<Property>): Promise<Property> {
    const [updated] = await db.update(properties).set(updates).where(eq(properties.id, id)).returning();
    return updated;
  }

  async createInvestment(investment: InsertInvestment): Promise<Investment> {
    const [newInvestment] = await db.insert(investments).values(investment).returning();
    return newInvestment;
  }

  async getUserInvestments(userId: number): Promise<Investment[]> {
    return db.select().from(investments).where(eq(investments.userId, userId));
  }

  async getInvestment(id: number): Promise<Investment | undefined> {
    const [investment] = await db.select().from(investments).where(eq(investments.id, id)).limit(1);
    return investment;
  }
}

export const storage = new DatabaseStorage();
