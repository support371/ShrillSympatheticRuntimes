import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Newsletter subscription schema
const newsletterSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company name is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      // In a real application, you would save this to a database
      // For now, we'll just log it and return success
      console.log("Newsletter subscription:", validatedData);
      
      // Here you would typically:
      // 1. Save to database
      // 2. Add to email marketing service (like Mailchimp, ConvertKit, etc.)
      // 3. Send welcome email
      
      res.status(200).json({ 
        message: "Successfully subscribed to newsletter",
        data: validatedData 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Contact form endpoint (for future use)
  app.post("/api/contact", async (req, res) => {
    try {
      const contactSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        company: z.string().optional(),
        message: z.string().min(1, "Message is required"),
        service: z.enum(["cybersecurity", "compliance", "realty", "integrated"]).optional(),
      });

      const validatedData = contactSchema.parse(req.body);
      
      console.log("Contact form submission:", validatedData);
      
      // Here you would typically:
      // 1. Save to database
      // 2. Send notification email to sales team
      // 3. Add to CRM system
      // 4. Send auto-response to user
      
      res.status(200).json({ 
        message: "Contact form submitted successfully",
        data: validatedData 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
