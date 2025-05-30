# 🏥 HCL Hackathon – Healthcare Staff Shift Scheduler & Attendance Tracker

A modern web application to manage **healthcare staff shifts** and **track attendance**, built with **Next.js** and **MongoDB**. Designed for hospital administrators to easily manage doctors, nurses, and technicians.

---

## 🚀 Features

### 👨‍💼 Admin Login
- **POST** `/api/admin/login`
- Static credentials for admin authentication (no registration required).

```json
{
  "username": "admin",
  "password": "yourPassword"
}
```

---

### 👩‍⚕️ Staff Management

- **POST** `/api/staff` – Add a new staff member
- **GET** `/api/staff` – List/search staff with filters
- **PUT** `/api/staff/:id` – Update staff info
- **DELETE** `/api/staff/:id` – Remove staff

```json
{
  "name": "Dr. Jane Doe",
  "staffId": "DOC123",
  "role": "Doctor",
  "shiftPreference": "Morning",
  "contact": "+1234567890"
}
```

**Query Support:**

```
/api/staff?search=Jane&sortBy=role&order=asc&page=1&limit=10
```

---

### ⏰ Shift Scheduler

- **POST** `/api/shifts` – Create shifts (Morning, Afternoon, Night)
- **POST** `/api/shifts/assign` – Assign staff to shift
- **GET** `/api/shifts` – View shifts for a day or week
- **GET** `/api/shifts/status` – Track assigned/unassigned counts

```json
{
  "date": "2025-06-01",
  "shiftType": "Morning",
  "capacity": 5
}
```

**Conflict prevention:**

```json
{
  "error": "Shift conflict: Staff is already assigned to Afternoon shift on 2025-06-01"
}
```

---

### 📅 Schedule Views

- **GET** `/api/schedule/daily?date=YYYY-MM-DD` – View daily schedule
- **GET** `/api/schedule/weekly?start=YYYY-MM-DD&end=YYYY-MM-DD` – Weekly view

---

### 🟢 Attendance Tracking

- **POST** `/api/attendance` – Mark attendance

```json
{
  "staffId": "DOC123",
  "shiftId": "shift123",
  "status": "Present",
  "remarks": "N/A"
}
```

- **PUT** `/api/attendance/:id` – Update attendance (e.g., mark sick leave)
- **GET** `/api/attendance` – Filter attendance records

---

### 🔍 Advanced Search & Filters

Use filters as query parameters:

- `/api/staff?role=Nurse&shiftPreference=Night`
- `/api/schedule/daily?date=2025-06-01&role=Doctor`
- `/api/attendance?status=Absent&role=Technician`

---

### 🔐 Authentication & Middleware

- Admin-only routes for assigning shifts and marking attendance.
- Token-based or session-based middleware protection.

---

## 📋 Summary of API Endpoints

| Feature               | Method | Endpoint                    | Description                          |
|----------------------|--------|-----------------------------|--------------------------------------|
| Admin Login          | POST   | `/api/admin/login`         | Login admin                          |
| Add Staff            | POST   | `/api/staff`               | Create staff                         |
| View All Staff       | GET    | `/api/staff`               | List/search staff                    |
| Update Staff         | PUT    | `/api/staff/:id`           | Update staff details                 |
| Delete Staff         | DELETE | `/api/staff/:id`           | Remove staff                         |
| Create Shift         | POST   | `/api/shifts`              | Create a shift                       |
| Assign to Shift      | POST   | `/api/shifts/assign`       | Assign a staff to a shift            |
| View Daily Schedule  | GET    | `/api/schedule/daily`      | Calendar view of one day             |
| View Weekly Schedule | GET    | `/api/schedule/weekly`     | Calendar view of the week            |
| Mark Attendance      | POST   | `/api/attendance`          | Mark staff present/absent            |
| Update Attendance    | PUT    | `/api/attendance/:id`      | Edit attendance                      |
| View Attendance      | GET    | `/api/attendance`          | Filter attendance                    |
| View Shift Status    | GET    | `/api/shifts/status`       | Assigned vs. unassigned tracking     |

---

## 🛠 Project Setup (Next.js + MongoDB)

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. 🧱 Install Dependencies

```bash
npm install
```

### 3. 🗝 Setup Environment Variables

Create a `.env.local` file in the root with the following:

```env
MONGODB_URI=mongodb+srv://your_user:your_pass@cluster.mongodb.net/dbname
ADMIN_USERNAME=admin
ADMIN_PASSWORD=yourPassword
JWT_SECRET=yourStrongSecret
```

> ⚠️ Never commit `.env.local` to GitHub.

---

### 4. 🚀 Run the App

```bash
npm run dev
```

App will be running at: `http://localhost:3000`

---

## 🧪 Technologies Used

- **Next.js** – Fullstack React Framework (Frontend + API routes)
- **MongoDB** with **Mongoose** – For document-based data modeling
- **Tailwind CSS / CSS Modules** – UI styling
- **JWT or Sessions** – For admin authentication
- **Day.js / Moment.js** – Date management

---