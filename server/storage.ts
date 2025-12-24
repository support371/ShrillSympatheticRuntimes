import { db } from "../db/index";
import { 
  users, 
  newsletters, 
  strategies,
  investments,
  transactions,
  orgConfigs,
  type User, 
  type InsertUser,
  type Newsletter,
  type InsertNewsletter,
  type Strategy,
  type InsertStrategy,
  type Investment,
  type InsertInvestment,
  type Transaction,
  type InsertTransaction,
  type OrgConfig,
  type InsertOrgConfig,
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

  // Org Config
  getOrgConfig(userId: string): Promise<OrgConfig | undefined>;
  createOrgConfig(config: InsertOrgConfig): Promise<OrgConfig>;
  updateOrgConfig(userId: string, config: Partial<OrgConfig>): Promise<OrgConfig>;
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
    const existing = await this.getNewsletterSubscription(email);
    if (existing) {
      return existing;
    }
    
    const [subscription] = await db.insert(newsletters).values({ email }).returning();
    return subscription;
  }

  async getNewsletterSubscription(email: string): Promise<Newsletter | undefined> {
    const [newsletter] = await db.select().from(newsletters).where(eq(newsletters.email, email)).limit(1);
    return newsletter;
  }

  async getAllStrategies(): Promise<Strategy[]> {
    return db.select().from(strategies).where(eq(strategies.isActive, true));
  }

  async getStrategyBySlug(slug: string): Promise<Strategy | undefined> {
    const [strategy] = await db.select().from(strategies).where(eq(strategies.slug, slug)).limit(1);
    return strategy;
  }

  async createStrategy(strategy: InsertStrategy): Promise<Strategy> {
    const [newStrategy] = await db.insert(strategies).values(strategy).returning();
    return newStrategy;
  }

  async createInvestment(investment: InsertInvestment): Promise<Investment> {
    const [newInvestment] = await db.insert(investments).values(investment).returning();
    return newInvestment;
  }

  async getUserInvestments(userId: string): Promise<Investment[]> {
    return db.select().from(investments).where(eq(investments.userId, userId));
  }

  async getInvestment(id: string): Promise<Investment | undefined> {
    const [investment] = await db.select().from(investments).where(eq(investments.id, id)).limit(1);
    return investment;
  }

  async updateInvestmentValue(id: string, currentValue: string): Promise<Investment> {
    const [updated] = await db.update(investments).set({ currentValue }).where(eq(investments.id, id)).returning();
    return updated;
  }

  async createTransaction(transaction: InsertTransaction): Promise<Transaction> {
    const [newTransaction] = await db.insert(transactions).values(transaction).returning();
    return newTransaction;
  }

  async getUserTransactions(userId: string): Promise<Transaction[]> {
    return db.select().from(transactions).where(eq(transactions.userId, userId)).orderBy(desc(transactions.createdAt));
  }

  async getTransaction(id: string): Promise<Transaction | undefined> {
    const [transaction] = await db.select().from(transactions).where(eq(transactions.id, id)).limit(1);
    return transaction;
  }

  async updateTransactionStatus(id: string, status: string): Promise<Transaction> {
    const [updated] = await db.update(transactions).set({ status }).where(eq(transactions.id, id)).returning();
    return updated;
  }

  async getOrgConfig(userId: string): Promise<OrgConfig | undefined> {
    const [config] = await db.select().from(orgConfigs).where(eq(orgConfigs.userId, userId)).limit(1);
    return config;
  }

  async createOrgConfig(config: InsertOrgConfig): Promise<OrgConfig> {
    const [newConfig] = await db.insert(orgConfigs).values(config).returning();
    return newConfig;
  }

  async updateOrgConfig(userId: string, updates: Partial<OrgConfig>): Promise<OrgConfig> {
    const [updated] = await db.update(orgConfigs).set(updates).where(eq(orgConfigs.userId, userId)).returning();
    return updated;
  }
}

export const storage = new DatabaseStorage();
