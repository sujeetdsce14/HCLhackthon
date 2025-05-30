

## 🏗️ High-Level Design (HLD)

### 🔹 Project Overview

The **Healthcare Shift Scheduling and Attendance Management System** is designed to manage hospital staff schedules, track attendance, prevent shift conflicts, and export reports. The backend is built in **Node.js**, following **MVC architecture**.

---

### 🔹 Architecture Diagram

```
[Client App] ⇄ [Express.js Backend API] ⇄ [MongoDB]
```

---

### 🔹 Core Modules

1. **Admin Module**

   * Login/Authentication
   * Staff & Shift Management
   * Conflict Checking
   * Report Generation

2. **Staff Module**

   * View Assigned Shifts
   * Check-in/Check-out

3. **Shift Scheduling**

   * Conflict-free Shift Assignment
   * Time Overlap Detection
   * Attendance Tracking

---

### 🔹 Technology Stack

| Layer     | Technology                |
| --------- | ------------------------- |
| Backend   | Node.js, Express          |
| Database  | MongoDB (Mongoose)        |
| Utilities | Nodemailer, CSV Generator |
| Auth      | Token-based (likely JWT)  |
| Tools     | Postman, Logger           |

---

### 🔹 Key Directories

| Folder         | Responsibility                              |
| -------------- | ------------------------------------------- |
| `controllers/` | Handles business logic                      |
| `models/`      | MongoDB schema definitions                  |
| `routes/`      | Route-level logic and API definitions       |
| `utils/`       | Helper functions (email, password, exports) |
| `middlewares/` | Authentication, error handling (assumed)    |
| `config/`      | DB and environment setup (assumed)          |

---

## 🛠️ Low-Level Design (LLD)

### 1. **User Module**

* **File(s):** `user.controller.js`, `user.model.js`, `user.route.js`
* **Schema:**

  ```js
  {
    name: String,
    email: String,
    password: String,
    role: [‘admin’, ‘staff’]
  }
  ```
* **Endpoints:**

  * `POST /user/register`
  * `POST /user/login`
  * `GET /user/profile`

---

### 2. **Staff Module**

* **File(s):** `staff.controller.js`, `staff.model.js`, `staff.routes.js`
* **Schema:**

  ```js
  {
    name: String,
    department: String,
    email: String,
    assignedShifts: [ShiftId]
  }
  ```
* **Features:**

  * Create/Update/Delete staff
  * View assigned shifts
  * Export staff data to CSV

---

### 3. **Shift Module**

* **File(s):** `shift.controller.js`, `shift.model.js`, `shift.routes.js`
* **Schema:**

  ```js
  {
    staffId: ObjectId,
    date: Date,
    shiftType: ['Morning', 'Evening', 'Night'],
    startTime: String,
    endTime: String
  }
  ```
* **Logic:**

  * Assign shift (with conflict check)
  * Update/Remove shift
  * Conflict: No overlapping shifts for the same staff

---

### 4. **Utils**

* `encryptPassword.js` – Handles hashing (bcrypt or crypto)
* `exportCSV.js` – Exports shift/staff data
* `sendmail.js` – Uses `nodemailer` to send emails (on schedule/alert)
* `removeSpecialCharacters.js` – Sanitizes input
* `generateSixDigitCode.js` – OTP for reset/verification
* `product_data.js` – (Assumed static dataset for inventory/supply)

---

### 5. **Middleware & Config (Assumed)**

* `middlewares/`

  * Authentication (JWT/Token)
  * Error handler
* `config/`

  * MongoDB URI
  * Environment variables
  * Mail server setup

---

### 6. **index.js (Entry Point)**

* Initialize Express App
* Setup middlewares
* Load routes
* Connect to MongoDB
* Start server on configured port

---

## 📊 Sample API Flow: Assign Shift

1. **POST `/shift/assign`**
2. **Controller checks:**

   * Staff exists
   * Date/Time does not conflict
3. **If valid:** Save shift, return success
4. **If conflict:** Return error message

---

## 📤 Exports & Logging

* `exportCSV.js`: Used by Admin to download attendance or shift data
* `logs.log`: Backend logs for debugging and audit

---

## 📬 Alerts

* `sendmail.js` can trigger:

  * Shift assignment notifications
  * Attendance alerts
  * Admin reports

---

## ✅ Possible Enhancements

* Add Role-Based Access Middleware
* Integrate JWT Authentication
* Add Unit Tests with Jest/Mocha
* Use Swagger for API docs (based on `API_docs.txt`)
* Frontend (under `Frontend/`) can be React/HTML-based client


