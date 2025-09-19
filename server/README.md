# 💰 Expense Tracker App - Backend (MVC + TypeScript)

A simple **Expense Tracker Backend API** built with **Node.js + Express + TypeScript**, following the **MVC (Model-View-Controller)** architecture pattern.  
This server manages expense records such as adding, updating, deleting, and fetching expenses with proper structure and validations.

---

## 🚀 Features
- Add a new expense  
- Update an existing expense  
- Delete an expense  
- Get all expenses  
- Get expense by ID  
- Validation with **Zod**  
- Security with **Helmet** + logging with **Morgan**  
- CORS enabled for frontend integration  

---

## 📂 Folder Structure
```bash
src/
├── config/         # DB + Server configuration
│   └── db.config.ts
│   └── server.config.ts
├── controllers/    # Request handlers (Controller layer)
│   └── expense.controller.ts
├── models/         # Data access & DB logic (Model layer)
│   └── expense.model.ts
├── routes/         # API routes
│   └── expense.routes.ts
├── services/       # Business logic (Service layer)
│   └── expense.service.ts
├── middlewares/    # Error handling, validation
│   └── errorHandler.ts
├── utils/          # Helpers
│   └── validator.ts
├── app.ts          # Express app setup
└── server.ts       # Server entry point
```
## 🏗️ Architecture (MVC)
- **Model (M)** → Defines the `Task` schema using Mongoose.  
- **View (V)** → Not used here since it's an API-only server.  
- **Controller (C)** → Handles HTTP requests and responses.  
- **Service Layer** → Contains business logic (optional but keeps controllers clean).  

---

## ⚙️ Tech Stack
- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **TypeScript** – Static typing
- **SQLite / JSON** file – Persistent storage (configurable)
- **Helmet** – Security headers
- **Morgan** – HTTP request logging
- **Zod** – Request validation

---

## 📦 Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/sayyedaaman2/expense-tracker-app-server.git
cd expense-tracker-app-server
```
###  2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Set up environment variables
Create a .env file in the root:
```bash
PORT=8000
NODE_ENV=development
DB_PATH=./src/data/expenses.sqlite
```
### 4️⃣ Run the server
## Development
```bash
npm run dev
```
## Production
```bash
npm run build
npm start
```
Server will start at:
👉 http://localhost:8000/api/expenses

### 🔗 API Endpoints
| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| GET    | /api/expenses      | Get all expenses        |
| GET    | /api/expenses/\:id | Get expense by ID       |
| POST   | /api/expenses      | Create a new expense    |
| PUT    | /api/expenses/\:id | Update an expense by ID |
| DELETE | /api/expenses/\:id | Delete a expense by ID  |


### ✅ Example Task Object
```bash
{
  "title": "Grocery Shopping",
  "amount": 2500,
  "category": "Food"
}

```
### 📚 Learnings
- Practiced **MVC architecture** with **TypeScript**.
- Used **Zod** for request validation.
- Implemented **SQLite** for persistent storage.
- Learned how to organize a scalable **Node.js** backend project.

### 🛠️ Future Improvements

- User authentication (JWT)
- Task due dates & reminders
- Filtering & sorting tasks
- Docker containerization

---

## 👨‍💻 Author

<h3 align="center">Aaman Sayyed</h3>

<p align="center">
  <a href="https://sayyedaaman.vercel.app/">
    <img src="https://img.shields.io/badge/🌐%20Portfolio-000?style=for-the-badge" />
  </a>
  <a href="https://www.linkedin.com/in/sayyed-aaman/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/sayyedaaman2">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="mailto:sayyedaaman9@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>
