# 🛡️ FinTrack API Server

![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933)
![Express](https://img.shields.io/badge/Framework-Express.js-000000)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)
![JWT](https://img.shields.io/badge/Auth-JWT-000000)

> **The robust, secure RESTful API powering the FinTrack Personal Finance Dashboard.**

This repository contains the server-side logic, database schemas, and API endpoints that handle data persistence, user authentication, and financial calculations for the FinTrack application.

---

## Architecture & Design

The server follows the **MVC (Model-View-Controller)** architectural pattern (minus the View, as this is a headless API) to ensure separation of concerns and code maintainability.

### Folder Structure
```bash
server/
├── config/         # Database connection logic (MongoDB)
├── controllers/    # Business logic & request handling
├── middleware/     # JWT authentication & request protection
├── models/         # Mongoose schemas (Data modeling)
├── routes/         # API route definitions
└── utils/          # Helper functions (Email services, etc.)
```

---

## Key Features

*   **Secure Authentication:** Implements **JWT (JSON Web Tokens)** for stateless authentication and **Bcrypt** for password hashing.
*   **Middleware Protection:** Custom `authmiddleware.js` ensures protected routes are only accessible by valid tokens.
*   **Role-Based Access Control (RBAC):** Dedicated `admin.controller.js` to handle administrative actions separate from standard user logic.
*   **Financial Reporting:** Specialized logic in `reports.controller.js` to aggregate transaction data into meaningful insights (Income vs. Expense).
*   **Email Integration:** Integrated `Nodemailer` utility (`mail.js`) for user communication (Welcome emails, alerts).
*   **Data Integrity:** Mongoose models enforce strict schema validation for Users, Transactions, Budgets, and Balances.

---

## 🛠️ Tech Stack

-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Database:** MongoDB (Atlas)
-   **ODM:** Mongoose
-   **Authentication:** jsonwebtoken, bcryptjs
-   **Utilities:** Nodemailer, Dotenv, Cors

---

## 🔌 API Endpoints Overview

The API is organized into RESTful resources. Below is a high-level overview of the available routes:

| Resource | Description | Controller |
| :--- | :--- | :--- |
| **Auth** | Registration, Login, Token Verification | `auth.js` |
| **Transactions** | CRUD operations for Income/Expenses | `transaction.controller.js` |
| **Balance** | Real-time balance calculation & updates | `balance.controller.js` |
| **Reports** | Aggregated financial data for charts | `reports.controller.js` |
| **Admin** | User management & system stats | `admin.controller.js` |
| **User** | Profile management & settings | `user.controller.js` |

---

## ⚙️ Installation & Setup

### 1. Prerequisites
Ensure you have **Node.js** and **npm** installed. You will also need a **MongoDB Connection String**.

### 2. Install Dependencies
Navigate to the server directory:
```bash
cd server
npm install
```

### 3. Environment Variables
Create a `.env` file in the `server/` directory and configure the following:

```env
PORT=5002
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/fintrack
JWT_SECRET=your_super_secure_secret_key
NODE_ENV=development

# Email Configuration (if applicable)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### 4. Run the Server
```bash
# Development mode (using nodemon if installed)
npm run dev

# Production mode
npm start
```

---

## 🚀 Deployment

This server is optimized for deployment on platforms like **Railway** or **Render**.

1.  **Build Command:** `npm install`
2.  **Start Command:** `node server/server.js`
3.  **Environment:** Ensure all `.env` variables are added to the deployment platform's environment settings.

---

## 🤝 Contributing

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/# 🛡️ FinTrack API Server

![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933)
![Express](https://img.shields.io/badge/Framework-Express.js-000000)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)
![JWT](https://img.shields.io/badge/Auth-JWT-000000)