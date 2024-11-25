# Todo List App - Backend

This is the backend for the Todo List App, built with **Express.js** and **Prisma**. It provides RESTful API endpoints to manage tasks in a SQL database (MySQL or PostgreSQL).

## Prerequisites

Ensure you have the following installed:
- Node.js >= 16.x
- npm >= 7.x
- MySQL or PostgreSQL
- Prisma CLI (`npm install -g prisma`)

## Setup Instructions

### 1. Clone the repository
```bash
git clone <repo-url>
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory with the following content:
```plaintext
DATABASE_URL="mysql://username:password@localhost:3306/todo_app"
```
Replace `username`, `password`, and `todo_app` with your actual database credentials.

## Database Setup

### For MySQL:
1. Log in to your MySQL server:
```bash
mysql -u root -p
```

2. Create a database:
```sql
CREATE DATABASE todo_app;
```

### For PostgreSQL:
1. Log in to your PostgreSQL server:
```bash
psql -U postgres
```

2. Create a database:
```sql
CREATE DATABASE todo_app;
```

## Prisma Setup

1. Initialize Prisma (if not already done):
```bash
npx prisma init
```

2. Generate Prisma client:
```bash
npx prisma generate
```

3. Apply migrations to set up the database schema:
```bash
npx prisma migrate dev --name init
```

## Running the Server

Start the server in development mode:
```bash
npm run dev
```

The server will be available at http://localhost:3001.