import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertPropertySchema, insertInvestmentSchema } from "@shared/schema";
import bcrypt from "bcryptjs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // ===== USER ROUTES =====
  
  app.post("/api/users/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      const existingUser = await storage.getUserByEmail(validatedData.email.toLowerCase());
      if (existingUser) {
        return res.status(400).json({ error: "Email already registered" });
      }

      const hashedPassword = await bcrypt.hash(validatedData.passwordHash, 10);

      const user = await storage.createUser({
        ...validatedData,
        email: validatedData.email.toLowerCase(),
        passwordHash: hashedPassword,
      });

      const { passwordHash, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Registration failed" });
    }
  });

  app.post("/api/users/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      const user = await storage.getUserByEmail(email.toLowerCase());
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const isValid = await bcrypt.compare(password, user.passwordHash);
      if (!isValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const { passwordHash, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Login failed" });
    }
  });

  // ===== PROPERTY ROUTES =====

  app.get("/api/properties", async (req, res) => {
    try {
      const properties = await storage.getAllProperties();
      res.json({ properties });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch properties" });
    }
  });

  app.get("/api/properties/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid property ID" });
      }

      const property = await storage.getProperty(id);
      if (!property) {
        return res.status(404).json({ error: "Property not found" });
      }
      res.json({ property });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch property" });
    }
  });

  app.post("/api/properties", async (req, res) => {
    try {
      const validatedData = insertPropertySchema.parse(req.body);
      const property = await storage.createProperty(validatedData);
      res.json({ property });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to create property" });
    }
  });

  app.patch("/api/properties/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid property ID" });
      }

      const property = await storage.updateProperty(id, req.body);
      res.json({ property });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to update property" });
    }
  });

  // ===== INVESTMENT ROUTES =====

  app.post("/api/investments", async (req, res) => {
    try {
      const validatedData = insertInvestmentSchema.parse(req.body);
      const investment = await storage.createInvestment(validatedData);
      res.json({ investment });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to create investment" });
    }
  });

  app.get("/api/investments/user/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ error: "Invalid user ID" });
      }

      const investments = await storage.getUserInvestments(userId);
      res.json({ investments });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch investments" });
    }
  });

  app.get("/api/investments/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid investment ID" });
      }

      const investment = await storage.getInvestment(id);
      if (!investment) {
        return res.status(404).json({ error: "Investment not found" });
      }
      res.json({ investment });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch investment" });
    }
  });

  // ===== HEALTH CHECK =====

  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    });
  });

  return httpServer;
}
