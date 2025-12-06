import { db } from "../db/index";
import { 
  users, 
  newsletters, 
  strategies,
  type User, 
  type InsertUser,
  type Newsletter,
  type InsertNewsletter,
  type Strategy,
  type InsertStrategy
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Newsletter
  subscribeNewsletter(email: string): Promise<Newsletter>;
  getNewsletterSubscription(email: string): Promise<Newsletter | undefined>;
  
  // Strategies
  getAllStrategies(): Promise<Strategy[]>;
  getStrategyBySlug(slug: string): Promise<Strategy | undefined>;
  createStrategy(strategy: InsertStrategy): Promise<Strategy>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
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

  async subscribeNewsletter(email: string): Promise<Newsletter> {
    // Check if already subscribed
    const existing = await this.getNewsletterSubscription(email);
    if (existing) {
      return existing;
    }
    
    const [subscription] = await db.insert(newsletters).values({ email }).returning();
    return subscription;
  }

  async getNewsletterSubscription(email: string): Promise<Newsletter | undefined> {
    const [subscription] = await db
      .select()
      .from(newsletters)
      .where(eq(newsletters.email, email))
      .limit(1);
    return subscription;
  }

  async getAllStrategies(): Promise<Strategy[]> {
    return await db.select().from(strategies).where(eq(strategies.isActive, true));
  }

  async getStrategyBySlug(slug: string): Promise<Strategy | undefined> {
    const [strategy] = await db
      .select()
      .from(strategies)
      .where(eq(strategies.slug, slug))
      .limit(1);
    return strategy;
  }

  async createStrategy(insertStrategy: InsertStrategy): Promise<Strategy> {
    const [strategy] = await db.insert(strategies).values(insertStrategy).returning();
    return strategy;
  }
}

export const storage = new DatabaseStorage();
