import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertNewsletterSchema } from "@shared/schema";
import bcrypt from "bcryptjs";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
      fullName: string | null;
      isDemo: boolean;
    }
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Session & Passport Configuration
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "alliance-trust-realty-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // Passport Local Strategy
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await storage.getUserByEmail(email.toLowerCase());
          if (!user) {
            return done(null, false, { message: "Invalid credentials" });
          }

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            return done(null, false, { message: "Invalid credentials" });
          }

          return done(null, {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            isDemo: user.isDemo,
          });
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await storage.getUser(id);
      if (!user) {
        return done(null, false);
      }
      done(null, {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        isDemo: user.isDemo,
      });
    } catch (error) {
      done(error);
    }
  });

  // Auth Middleware
  const requireAuth = (req: any, res: any, next: any) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  };

  // ===== AUTH ROUTES =====
  
  app.post("/api/auth/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      // Check if user exists
      const existingUser = await storage.getUserByEmail(validatedData.email.toLowerCase());
      if (existingUser) {
        return res.status(400).json({ error: "Email already registered" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      // Create user
      const user = await storage.createUser({
        ...validatedData,
        email: validatedData.email.toLowerCase(),
        password: hashedPassword,
      });

      // Auto login
      req.login(
        {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          isDemo: user.isDemo,
        },
        (err) => {
          if (err) {
            return res.status(500).json({ error: "Login failed after registration" });
          }
          res.json({
            user: {
              id: user.id,
              email: user.email,
              fullName: user.fullName,
              isDemo: user.isDemo,
            },
          });
        }
      );
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Registration failed" });
    }
  });

  app.post("/api/auth/login", passport.authenticate("local"), (req, res) => {
    res.json({ user: req.user });
  });

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ error: "Logout failed" });
      }
      res.json({ success: true });
    });
  });

  app.get("/api/auth/me", (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ error: "Not authenticated" });
    }
  });

  // Demo Account Creation
  app.post("/api/auth/demo", async (req, res) => {
    try {
      const randomEmail = `demo-${Date.now()}@alliancetrust.demo`;
      const randomPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(randomPassword, 10);

      const user = await storage.createUser({
        email: randomEmail,
        password: hashedPassword,
        fullName: "Demo User",
        isDemo: true,
      });

      req.login(
        {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          isDemo: user.isDemo,
        },
        (err) => {
          if (err) {
            return res.status(500).json({ error: "Demo login failed" });
          }
          res.json({
            user: {
              id: user.id,
              email: user.email,
              fullName: user.fullName,
              isDemo: user.isDemo,
            },
          });
        }
      );
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Demo account creation failed" });
    }
  });

  // ===== NEWSLETTER ROUTES =====

  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.subscribeNewsletter(validatedData.email.toLowerCase());
      res.json({ success: true, subscription });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Subscription failed" });
    }
  });

  // ===== STRATEGY ROUTES =====

  app.get("/api/strategies", async (req, res) => {
    try {
      const strategies = await storage.getAllStrategies();
      res.json({ strategies });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch strategies" });
    }
  });

  app.get("/api/strategies/:slug", async (req, res) => {
    try {
      const strategy = await storage.getStrategyBySlug(req.params.slug);
      if (!strategy) {
        return res.status(404).json({ error: "Strategy not found" });
      }
      res.json({ strategy });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to fetch strategy" });
    }
  });

  // Seed strategies if none exist
  const existingStrategies = await storage.getAllStrategies();
  if (existingStrategies.length === 0) {
    await storage.createStrategy({
      slug: "multifamily-yield",
      title: "Multifamily Yield Fund IV",
      type: "Income",
      riskLevel: "Low-Moderate",
      targetIRR: "12-15%",
      minInvestment: "$50,000",
      term: "5-7 Years",
      description: "Stabilized apartment complexes in Sunbelt markets with value-add potential through operational efficiencies.",
      details: {
        assetFocus: "Class A & B multifamily properties",
        geography: "Sunbelt markets (TX, FL, AZ, NC)",
        leverage: "60-70% LTV",
      },
      isActive: true,
    });

    await storage.createStrategy({
      slug: "urban-office",
      title: "Urban Office Redevelopment",
      type: "Growth",
      riskLevel: "High",
      targetIRR: "18-22%",
      minInvestment: "$100,000",
      term: "7-10 Years",
      description: "Converting distressed Class B office space into mixed-use residential and retail destinations.",
      details: {
        assetFocus: "Office to residential conversion",
        geography: "Gateway cities",
        leverage: "50-60% LTV",
      },
      isActive: true,
    });

    await storage.createStrategy({
      slug: "industrial-logistics",
      title: "Industrial Logistics Trust",
      type: "Balanced",
      riskLevel: "Moderate",
      targetIRR: "14-16%",
      minInvestment: "$25,000",
      term: "5 Years",
      description: "Last-mile distribution centers powering the e-commerce economy.",
      details: {
        assetFocus: "Warehouse & distribution centers",
        geography: "Major metropolitan areas",
        leverage: "55-65% LTV",
      },
      isActive: true,
    });
  }

  return httpServer;
}
