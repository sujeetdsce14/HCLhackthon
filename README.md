SUJEET KUMAR  
8130984653            
sujeet.dsce14@gmail.com

Harsha vardhan  
8754979764          
harshavardhanmurugan@gmail.com


Deependra Singh                   
deependra.shekhawat@outlook.com



![image](https://github.com/user-attachments/assets/f80f1b87-cb73-4def-9402-0ca9465ea644)




![image](https://github.com/user-attachments/assets/a6efc1c3-ca63-454f-9576-c9ebd13ef92e)




![image](https://github.com/user-attachments/assets/f8a493f2-4996-4935-ba6f-924464f94171)



![image](https://github.com/user-attachments/assets/fe1aa57c-c683-4522-806c-57a7798609d2)



![image](https://github.com/user-attachments/assets/b7375529-7013-4f45-9721-8a8e9b17f304)



![image](https://github.com/user-attachments/assets/80538bd7-7d27-4bb3-be7d-18b7437b87eb)



![image](https://github.com/user-attachments/assets/2a41ba83-f0f6-4919-89d7-3d9b5f690664)



![image](https://github.com/user-attachments/assets/ad468a64-8a0f-4acc-97d1-2eb049ae3d3c)













## 🏗️ High-Level Design (HLD)

### 🔹 Project Overview

The **Healthcare Shift Scheduling and Attendance Management System** is designed to manage hospital staff schedules, track attendance, prevent shift conflicts, and export reports. The backend is built in **Node.js**, following **MVC architecture**.

---

## Required `.env` Variables

Create a `.env` file in the root of your backend project with the following variables:

```env
PORT=3001
APP_NAME="Healthcare Attendance Tracker"
APP_DOMAIN="http://localhost:3001"
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority&appName=ProjectCluster
DB_NAME=HealthCare
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
```


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
* 



# Healthcare Attendance & Shift Management Backend

A Node.js + Express backend for managing healthcare staff, shifts, and attendance.  
Built with MongoDB, Mongoose, and ES6 modules.

---

## Features

- Staff management (add, list, search/filter)
- Shift creation (Morning, Afternoon, Night) with configurable capacity
- Assign staff to shifts (with conflict checks)
- View daily shift schedules with assigned staff and available slots
- Check shift assignment conflicts for staff

---

## API Documentation

### Staff APIs

#### Add Staff
**POST** `/api/v1/staff`
```json
{
  "name": "Dr. Jane Doe",
  "staffId": "DOC123",
  "role": "Doctor",
  "shiftPreference": "Morning",
  "contact": "+1234567890"
}
```
**Response:**  
`201 Created`  
Returns the created staff object.

---

#### List All Staff
**GET** `/api/v1/staff`
**Response:**  
`200 OK`  
Returns an array of all staff.

---

#### Search/Filter Staff
**GET** `/api/v1/staff/search?name=Jane&role=Doctor&shift=Morning`
**Response:**  
`200 OK`  
Returns filtered staff list.

---

### Shift APIs

#### Create Shift
**POST** `/api/v1/shift`
```json
{
  "date": "2025-05-31",
  "type": "Morning",
  "capacity": 5
}
```
**Response:**  
`200 OK`  
Returns the created shift object.

---

#### Assign Staff to Shift
**PUT** `/api/v1/shift/:shiftId/assign`
```json
{
  "staff_id": "665f1b2c8e4b2a0012a3c456"
}
```
**Response:**  
`200 OK`  
Returns assignment confirmation or error if conflict/capacity.

---

#### Get Daily Schedule
**GET** `/api/v1/shift/schedule?date=2025-05-31`
**Response:**  
`200 OK`  
Returns all shifts for the date, with assigned staff and available slots.

---

#### Check Shift Conflicts
**GET** `/api/v1/shift/conflicts/:staff_id?date=2025-05-31`
**Response:**  
`200 OK`  
Returns conflict status and conflicting shifts.

---

## Setup

1. Clone the repo
2. Install dependencies:  
   `npm install`
3. Set up your `.env` file (see `.env.example`)
4. Start the server:  
   `npm run dev`

---

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- ES6 Modules

---

## Roadmap / Future Enhancements

- Staff authentication & role-based access
- Attendance marking and reporting
- Shift swap and leave management
- Notification system (email/SMS)
- Admin dashboard (with analytics)
- Export reports (CSV/PDF)
- API rate limiting & security improvements
- Dockerization and CI/CD setup

---

