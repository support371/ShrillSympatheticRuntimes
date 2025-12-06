
import { db } from "./index";
import { sql } from "drizzle-orm";

async function migrate() {
  console.log("Running migrations...");
  
  try {
    // Create investments table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS investments (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        strategy_id VARCHAR NOT NULL REFERENCES strategies(id) ON DELETE CASCADE,
        amount TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'active',
        purchase_date TIMESTAMP NOT NULL DEFAULT NOW(),
        maturity_date TIMESTAMP,
        current_value TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);

    // Create transactions table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS transactions (
        id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        investment_id VARCHAR REFERENCES investments(id) ON DELETE SET NULL,
        type TEXT NOT NULL,
        amount TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        description TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);

    console.log("Migrations completed successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
    throw error;
  }
}

migrate().catch(console.error);
