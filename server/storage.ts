import { db } from "../db/index";
import { 
  users, 
  newsletters, 
  strategies,
  investments,
  transactions,
  type User, 
  type InsertUser,
  type Newsletter,
  type InsertNewsletter,
  type Strategy,
  type InsertStrategy,
  type Investment,
  type InsertInvestment,
  type Transaction,
  type InsertTransaction
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

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
  
  // Investments
  createInvestment(investment: InsertInvestment): Promise<Investment>;
  getUserInvestments(userId: string): Promise<Investment[]>;
  getInvestment(id: string): Promise<Investment | undefined>;
  updateInvestmentValue(id: string, currentValue: string): Promise<Investment>;
  
  // Transactions
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  getUserTransactions(userId: string): Promise<Transaction[]>;
  getTransaction(id: string): Promise<Transaction | undefined>;
  updateTransactionStatus(id: string, status: string): Promise<Transaction>;
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

  async createInvestment(insertInvestment: InsertInvestment): Promise<Investment> {
    const [investment] = await db.insert(investments).values(insertInvestment).returning();
    return investment;
  }

  async getUserInvestments(userId: string): Promise<Investment[]> {
    return await db.select().from(investments).where(eq(investments.userId, userId)).orderBy(desc(investments.purchaseDate));
  }

  async getInvestment(id: string): Promise<Investment | undefined> {
    const [investment] = await db.select().from(investments).where(eq(investments.id, id)).limit(1);
    return investment;
  }

  async updateInvestmentValue(id: string, currentValue: string): Promise<Investment> {
    const [investment] = await db.update(investments)
      .set({ currentValue })
      .where(eq(investments.id, id))
      .returning();
    return investment;
  }

  async createTransaction(insertTransaction: InsertTransaction): Promise<Transaction> {
    const [transaction] = await db.insert(transactions).values(insertTransaction).returning();
    return transaction;
  }

  async getUserTransactions(userId: string): Promise<Transaction[]> {
    return await db.select().from(transactions).where(eq(transactions.userId, userId)).orderBy(desc(transactions.createdAt));
  }

  async getTransaction(id: string): Promise<Transaction | undefined> {
    const [transaction] = await db.select().from(transactions).where(eq(transactions.id, id)).limit(1);
    return transaction;
  }

  async updateTransactionStatus(id: string, status: string): Promise<Transaction> {
    const [transaction] = await db.update(transactions)
      .set({ status })
      .where(eq(transactions.id, id))
      .returning();
    return transaction;
  }
}

export const storage = new DatabaseStorage();
