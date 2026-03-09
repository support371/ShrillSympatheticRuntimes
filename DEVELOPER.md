# Alliance Trust Realty - Developer Guide

## Project Overview

**Alliance Trust Realty** is a real estate investment platform built with Node.js/Express backend and React frontend, designed to manage users, properties, and investments using a PostgreSQL database with Drizzle ORM.

**Purpose**: Enable individual investors to access institutional-grade real estate investment opportunities.

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, TypeScript, TailwindCSS, Wouter (routing) |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL with Drizzle ORM |
| Authentication | Password-based (bcrypt hashing) |
| Validation | Zod schemas |

---

## Database Schema

### Complete Database Design

#### 1. **users** Table
Stores user account information and authentication data.

| Field | Type | Constraints | Notes |
|-------|------|-----------|-------|
| id | SERIAL | PRIMARY KEY | Auto-generated |
| email | TEXT | UNIQUE, NOT NULL | User login email |
| passwordHash | TEXT | NOT NULL | bcrypt hashed password |
| firstName | TEXT | NOT NULL | First name |
| lastName | TEXT | NOT NULL | Last name |
| phone | TEXT | Optional | Phone number |
| role | user_role enum | NOT NULL, DEFAULT: 'investor' | investor, agent, admin, property_manager |
| status | user_status enum | NOT NULL, DEFAULT: 'pending_verification' | active, inactive, suspended, pending_verification |
| kycStatus | kyc_status enum | NOT NULL, DEFAULT: 'not_submitted' | not_submitted, pending, approved, rejected |
| profileImageUrl | TEXT | Optional | Avatar/profile image URL |
| dateOfBirth | TIMESTAMP | Optional | User's birth date |
| ssnLast4 | TEXT | Optional | Last 4 digits of SSN (KYC) |
| address | JSONB | Optional | Address object {street, city, state, zip, country} |
| emailVerified | BOOLEAN | DEFAULT: false | Email verification status |
| phoneVerified | BOOLEAN | DEFAULT: false | Phone verification status |
| twoFactorEnabled | BOOLEAN | DEFAULT: false | 2FA status |
| lastLoginAt | TIMESTAMP | Optional | Last login timestamp |
| createdAt | TIMESTAMP | DEFAULT: NOW() | Account creation time |
| updatedAt | TIMESTAMP | DEFAULT: NOW() | Last update time |

**Enums**:
- `user_role`: investor, agent, admin, property_manager
- `user_status`: active, inactive, suspended, pending_verification
- `kyc_status`: not_submitted, pending, approved, rejected

---

#### 2. **properties** Table
Stores real estate property listings and details.

| Field | Type | Constraints | Notes |
|-------|------|-----------|-------|
| id | SERIAL | PRIMARY KEY | Auto-generated |
| mlsNumber | TEXT | UNIQUE, Optional | Multiple Listing Service number |
| propertyType | property_type enum | NOT NULL | single_family, multi_family, condo, townhouse, commercial, land |
| status | property_status enum | NOT NULL, DEFAULT: 'available' | available, under_contract, sold, rented, maintenance |
| listingStatus | listing_status enum | NOT NULL, DEFAULT: 'draft' | draft, active, pending, sold, archived |
| streetAddress | TEXT | NOT NULL | Full street address |
| unitNumber | TEXT | Optional | Apt/unit number |
| city | TEXT | NOT NULL | City name |
| state | TEXT | NOT NULL | State/province |
| zipCode | TEXT | NOT NULL | Postal code |
| latitude | DECIMAL(10,8) | Optional | Geolocation latitude |
| longitude | DECIMAL(11,8) | Optional | Geolocation longitude |
| bedrooms | DECIMAL(3,1) | Optional | Number of bedrooms |
| bathrooms | DECIMAL(3,1) | Optional | Number of bathrooms |
| squareFeet | INTEGER | Optional | Total square footage |
| yearBuilt | INTEGER | Optional | Construction year |
| listPrice | DECIMAL(12,2) | NOT NULL | Original listing price |
| currentValue | DECIMAL(12,2) | Optional | Current estimated value |
| estimatedMonthlyRent | DECIMAL(10,2) | Optional | Expected monthly rental income |
| capRate | DECIMAL(5,2) | Optional | Capitalization rate percentage |
| description | TEXT | Optional | Property description |
| images | JSONB | Optional | Array of image objects [{url, order, caption}] |
| isFeatured | BOOLEAN | DEFAULT: false | Featured property flag |
| createdAt | TIMESTAMP | DEFAULT: NOW() | Creation time |
| updatedAt | TIMESTAMP | DEFAULT: NOW() | Last update time |

**Enums**:
- `property_type`: single_family, multi_family, condo, townhouse, commercial, land
- `property_status`: available, under_contract, sold, rented, maintenance
- `listing_status`: draft, active, pending, sold, archived

---

#### 3. **investments** Table
Tracks user investments in properties.

| Field | Type | Constraints | Notes |
|-------|------|-----------|-------|
| id | SERIAL | PRIMARY KEY | Auto-generated |
| userId | INTEGER | FK → users.id, NOT NULL | User making investment |
| propertyId | INTEGER | FK → properties.id, NOT NULL | Property being invested in |
| investmentType | investment_type enum | NOT NULL, DEFAULT: 'full_ownership' | full_ownership, fractional, fund, reit |
| status | investment_status enum | NOT NULL, DEFAULT: 'pending' | pending, active, sold, matured, cancelled |
| investmentAmount | DECIMAL(12,2) | NOT NULL | Amount invested |
| ownershipPercentage | DECIMAL(5,2) | Optional | Ownership % in property |
| startDate | TIMESTAMP | NOT NULL, DEFAULT: NOW() | Investment start date |
| createdAt | TIMESTAMP | DEFAULT: NOW() | Record creation time |

**Enums**:
- `investment_type`: full_ownership, fractional, fund, reit
- `investment_status`: pending, active, sold, matured, cancelled

**Foreign Keys**:
- `userId` references `users(id)`
- `propertyId` references `properties(id)`

---

## API Endpoints

### Authentication & Users

#### Register User
```
POST /api/users/register
Content-Type: application/json

Request Body:
{
  "email": "investor@example.com",
  "passwordHash": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1-555-1234",
  "role": "investor"
}

Response (201 Created):
{
  "user": {
    "id": 1,
    "email": "investor@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1-555-1234",
    "role": "investor",
    "status": "pending_verification",
    "kycStatus": "not_submitted",
    "createdAt": "2026-03-09T..."
  }
}
```

#### Login User
```
POST /api/users/login
Content-Type: application/json

Request Body:
{
  "email": "investor@example.com",
  "password": "password123"
}

Response (200 OK):
{
  "user": {
    "id": 1,
    "email": "investor@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "investor"
  }
}
```

---

### Properties

#### List All Properties
```
GET /api/properties

Response (200 OK):
{
  "properties": [
    {
      "id": 1,
      "mlsNumber": "MLS123456",
      "propertyType": "multi_family",
      "status": "available",
      "listingStatus": "active",
      "streetAddress": "123 Main St",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78701",
      "listPrice": 2500000,
      "currentValue": 2600000,
      "bedrooms": 4,
      "bathrooms": 3,
      "squareFeet": 5000,
      "yearBuilt": 2015,
      "capRate": 7.5,
      "isFeatured": true,
      "createdAt": "2026-03-09T..."
    }
  ]
}
```

#### Get Property by ID
```
GET /api/properties/:id

Response (200 OK):
{
  "property": {
    "id": 1,
    "mlsNumber": "MLS123456",
    "propertyType": "multi_family",
    "status": "available",
    ...
  }
}
```

#### Create Property
```
POST /api/properties
Content-Type: application/json

Request Body:
{
  "propertyType": "multi_family",
  "streetAddress": "456 Oak Ave",
  "city": "Austin",
  "state": "TX",
  "zipCode": "78702",
  "listPrice": 3000000,
  "bedrooms": 6,
  "bathrooms": 4,
  "squareFeet": 6000,
  "yearBuilt": 2018
}

Response (201 Created):
{
  "property": {
    "id": 2,
    "propertyType": "multi_family",
    "status": "available",
    "listingStatus": "draft",
    ...
  }
}
```

#### Update Property
```
PATCH /api/properties/:id
Content-Type: application/json

Request Body:
{
  "listPrice": 2900000,
  "status": "under_contract",
  "listingStatus": "active"
}

Response (200 OK):
{
  "property": { ...updated property object... }
}
```

---

### Investments

#### Create Investment
```
POST /api/investments
Content-Type: application/json

Request Body:
{
  "userId": 1,
  "propertyId": 1,
  "investmentType": "fractional",
  "investmentAmount": 50000,
  "ownershipPercentage": 5.0
}

Response (201 Created):
{
  "investment": {
    "id": 1,
    "userId": 1,
    "propertyId": 1,
    "investmentType": "fractional",
    "status": "pending",
    "investmentAmount": 50000,
    "ownershipPercentage": 5.0,
    "startDate": "2026-03-09T...",
    "createdAt": "2026-03-09T..."
  }
}
```

#### Get User's Investments
```
GET /api/investments/user/:userId

Response (200 OK):
{
  "investments": [
    {
      "id": 1,
      "userId": 1,
      "propertyId": 1,
      "investmentType": "fractional",
      "status": "active",
      "investmentAmount": 50000,
      "ownershipPercentage": 5.0
    }
  ]
}
```

#### Get Investment by ID
```
GET /api/investments/:id

Response (200 OK):
{
  "investment": {
    "id": 1,
    "userId": 1,
    "propertyId": 1,
    ...
  }
}
```

---

### Health Check

#### Check API Health
```
GET /api/health

Response (200 OK):
{
  "status": "ok",
  "version": "1.0.0",
  "timestamp": "2026-03-09T01:44:42Z"
}
```

---

## Project File Structure

```
alliance-trust-realty/
│
├── shared/
│   └── schema.ts              # Drizzle ORM schemas & Zod validation
│                              # - users table definition
│                              # - properties table definition
│                              # - investments table definition
│                              # - Insert schemas for validation
│                              # - TypeScript type definitions
│
├── server/
│   ├── index.ts               # Express app initialization
│   │                          # - Server startup
│   │                          # - Middleware setup
│   │                          # - Route registration
│   │
│   ├── routes.ts              # API route handlers
│   │                          # - /api/users/* routes
│   │                          # - /api/properties/* routes
│   │                          # - /api/investments/* routes
│   │                          # - /api/health endpoint
│   │
│   └── storage.ts             # Database access layer
│                              # - IStorage interface
│                              # - DatabaseStorage class
│                              # - CRUD operations for users, properties, investments
│
├── db/
│   └── index.ts               # Database connection setup
│                              # - PostgreSQL connection
│                              # - Drizzle client initialization
│
├── client/
│   ├── src/
│   │   ├── App.tsx            # React app root & router setup
│   │   │                      # - Wouter routing configuration
│   │   │                      # - Page component registration
│   │   │
│   │   ├── pages/             # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Properties.tsx
│   │   │   ├── PropertyDetail.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── NotFound.tsx
│   │   │
│   │   ├── components/        # Reusable React components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── InvestmentForm.tsx
│   │   │   └── [other components...]
│   │   │
│   │   ├── hooks/             # Custom React hooks
│   │   ├── utils/             # Utility functions
│   │   └── index.css          # Global styles
│   │
│   └── index.html             # HTML entry point
│                              # - Meta tags (OG, Twitter Card)
│                              # - Root React element
│
├── package.json               # NPM dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── replit.md                  # Project documentation (Replit-specific)
└── DEVELOPER.md               # This file
```

---

## Development Workflow

### Starting the Development Server
```bash
npm install              # Install dependencies
npm run dev             # Start server on port 5000
```

The development server includes:
- Express backend running on port 5000
- Vite dev server for React with hot module replacement (HMR)
- TypeScript compilation for both frontend and backend

### Building for Production
```bash
npm run build           # Build both frontend and backend
npm start              # Start production server
```

---

## Data Flow Architecture

```
Client (React)
    ↓ (HTTP Requests)
Router (Wouter)
    ↓
Page Components
    ↓
API Calls to Backend
    ↓
Express Routes (/api/*)
    ↓
Storage Interface (IStorage)
    ↓
DatabaseStorage Implementation
    ↓
Drizzle ORM
    ↓
PostgreSQL Database
```

---

## Key Features

### 1. **User Management**
- User registration with email validation
- Secure password hashing with bcrypt
- User authentication and login
- KYC status tracking (not_submitted → pending → approved/rejected)
- User roles: investor, agent, admin, property_manager

### 2. **Property Management**
- Create, read, update properties
- Property type categorization (single_family, multi_family, commercial, etc.)
- Property status tracking (available, under_contract, sold, etc.)
- Listing status (draft, active, pending, sold, archived)
- Geographic data (latitude, longitude)
- Financial metrics (list price, cap rate, estimated rent)
- Featured properties flag
- Image gallery support (JSONB)

### 3. **Investment Tracking**
- Create investments linked to users and properties
- Investment types: full_ownership, fractional, fund, reit
- Status tracking: pending, active, sold, matured, cancelled
- Ownership percentage calculation
- Investment amount tracking
- Timeline tracking (start date)

---

## Error Handling

All API endpoints return standardized error responses:

```json
{
  "error": "Descriptive error message"
}
```

**Common HTTP Status Codes**:
- `200` - OK
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

---

## Security Considerations

1. **Password Security**: All passwords hashed with bcrypt (10 salt rounds)
2. **Email Validation**: Email uniqueness enforced at database level
3. **Data Validation**: All inputs validated against Zod schemas before processing
4. **Environment**: Sensitive data managed through environment variables
5. **Foreign Keys**: Database enforces referential integrity

---

## Environment Variables

Key environment variables used:

- `NODE_ENV` - Set to 'development' during development
- `DATABASE_URL` - PostgreSQL connection string (managed by Replit)
- `PORT` - Server port (default: 5000)

---

## Testing the API

### Using cURL

**Register a user:**
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "passwordHash": "password123",
    "firstName": "Test",
    "lastName": "User"
  }'
```

**Get all properties:**
```bash
curl http://localhost:5000/api/properties
```

**Create a property:**
```bash
curl -X POST http://localhost:5000/api/properties \
  -H "Content-Type: application/json" \
  -d '{
    "propertyType": "single_family",
    "streetAddress": "789 Pine St",
    "city": "Austin",
    "state": "TX",
    "zipCode": "78703",
    "listPrice": 1500000
  }'
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Server won't start | Check if port 5000 is available; check logs in workflow |
| Database connection error | Verify PostgreSQL is running; check DATABASE_URL env var |
| CORS errors in frontend | Add allowed origins to Express middleware |
| TypeScript errors | Run `npm run build` to check compilation errors |

---

## Future Enhancement Opportunities

1. **Payment Integration**: Stripe/PayPal for investment payments
2. **Document Management**: Upload/store offering memorandums, reports
3. **Notifications**: Email/SMS alerts for investment updates
4. **Analytics Dashboard**: Investment performance tracking
5. **Admin Panel**: User and property management interface
6. **API Documentation**: Swagger/OpenAPI specification
7. **Caching**: Redis for performance optimization
8. **Queue System**: Background jobs for async operations

---

## Contact & Support

For questions about the codebase:
1. Review this DEVELOPER.md file
2. Check individual files in the project structure
3. Review schema.ts for data model details
4. Review routes.ts for API endpoint implementations
5. Review storage.ts for database access patterns

