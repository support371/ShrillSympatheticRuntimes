# Alliance Trust Realty

## Overview

Alliance Trust Realty is a full-stack real estate investment platform built with React, Express, and PostgreSQL. The application provides institutional-grade investment strategies, portfolio management, demo trading accounts, and enterprise SaaS dashboard features. It integrates market intelligence widgets (TradingView, cryptocurrency data), user authentication, and configurable organization setup for multi-tenant deployments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18 with TypeScript**: Component-based UI using functional components and hooks
- **Vite Build System**: Fast development with HMR and optimized production builds
- **Wouter Routing**: Lightweight client-side routing for SPA navigation
- **Tailwind CSS v4 + shadcn/ui**: Utility-first styling with Radix UI primitives for accessible components
- **TanStack Query**: Server state management with caching and automatic refetching
- **Custom Theme**: Deep navy primary with muted gold secondary colors, using Playfair Display for headers and Manrope for body text

### Backend Architecture
- **Express.js Server**: RESTful API with session-based authentication
- **Passport.js with Local Strategy**: Username/password authentication with bcrypt password hashing
- **Session Management**: Express sessions with cookie-based persistence
- **Modular Route Structure**: Organized API endpoints for auth, investments, transactions, newsletter, and system health
- **Performance Monitoring**: Built-in latency tracking and graded performance metrics (A/B/C grades based on p50/p95 thresholds)

### Data Storage Solutions
- **PostgreSQL Database**: Primary data store accessed via DATABASE_URL environment variable
- **Drizzle ORM**: Type-safe database operations with schema-first design
- **Schema Location**: Centralized in `shared/schema.ts` with Zod validation via drizzle-zod
- **Key Tables**: users, org_configs, newsletters, strategies, investments, transactions

### Authentication and Authorization
- **Session-based Auth**: Passport.js local strategy with express-session
- **Demo Accounts**: Special demo user type with virtual $100K capital for educational purposes
- **Admin Features**: isAdmin flag on users for administrative access to diagnostics and setup

### Key Application Features
- **Investment Strategies**: Three tracks (Income, Growth, Balanced) with different risk/return profiles
- **Demo Trading**: Simulated portfolio with buy/sell actions stored in localStorage
- **Organization Setup Wizard**: First-run configuration for multi-tenant deployments
- **Health & Diagnostics**: `/api/health`, `/api/ready`, `/api/metrics-lite` endpoints for monitoring
- **Market Intelligence**: TradingView calendar embeds and cryptocurrency market data widgets

## External Dependencies

### Database Services
- **PostgreSQL**: Required via DATABASE_URL environment variable
- **Drizzle Kit**: Database migrations via `npm run db:push`

### Authentication & Security
- **bcryptjs**: Password hashing
- **Passport.js**: Authentication middleware with local strategy
- **express-session**: Session management

### UI Framework
- **shadcn/ui Components**: Full suite of Radix UI-based components (dialogs, forms, tables, etc.)
- **Lucide React**: Icon library
- **TailwindCSS v4**: With @tailwindcss/vite plugin

### Market Data Widgets
- **TradingView**: Economic calendar embeds (client-side widget integration)
- **Cryptocurrency Data**: Market tables displaying price/rank/volume (CoinMarketCap-style display)

### Build & Development
- **Vite**: Frontend bundling with React plugin
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development server
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner for Replit environment