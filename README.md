# HCLhackthon
#Healthcare Staff Shift Schedular and  Attendance tracker



High-Level Design (HLD) :

### 🔁 Architecture :

* **Frontend**: Next.js
* **Backend**: Node.js (Next JS)
* **Database**: MongoDB (Atlas)

---

## 🧾  MongoDB Document Design

### 1. `staff` Collection

```json
{
  "_id": ObjectId(),
  "name": "Dr. John Doe",
  "staff_id": "S123",
  "role": "Doctor",
  "contact": "1234567890",
  "shift_preference": "Morning"
}
```

---

### 2. `shifts` Collection

```json
{
  "_id": ObjectId(),
  "shift_id": "SHIFT001",
  "date": "2025-06-01",
  "type": "Morning",  // Morning / Afternoon / Night
  "capacity": 5,
  "assignments": [
    {
      "staff_id": "S123",
      "name": "Dr. John Doe",
      "role": "Doctor"
    },
    {
      "staff_id": "S124",
      "name": "Nurse A",
      "role": "Nurse"
    }
  ],
  "attendance": [
    {
      "staff_id": "S123",
      "status": "Present",
      "remarks": "On time"
    },
    {
      "staff_id": "S124",
      "status": "Absent",
      "remarks": "Sick leave"
    }
  ]
}
```

> 🔍 Notes:
>
> * Staff assignment and attendance are **embedded** into the `shifts` document for fast retrieval.
> * You can also store attendance in a separate collection if needed for historical logs or reporting scalability.

---

### 3. (Optional) `attendance_logs` Collection

```json
{
  "_id": ObjectId(),
  "shift_id": "SHIFT001",
  "staff_id": "S123",
  "date": "2025-06-01",
  "status": "Present",
  "remarks": ""
}
```

---

### 🧠 Queries & Logic in MongoDB

#### 🔍 Assign Staff to Shift

```js
db.shifts.updateOne(
  { shift_id: "SHIFT001" },
  {
    $addToSet: {
      assignments: {
        staff_id: "S125",
        name: "Nurse B",
        role: "Nurse"
      }
    }
  }
)
```

#### ✅ Mark Attendance

```js
db.shifts.updateOne(
  { shift_id: "SHIFT001" },
  {
    $addToSet: {
      attendance: {
        staff_id: "S125",
        status: "Present",
        remarks: ""
      }
    }
  }
)
```

#### 🚫 Conflict Check Query

```js
db.shifts.find({
  "assignments.staff_id": "S125",
  "date": "2025-06-01"
})
```

If count > 1, it's a conflict.

---

### 📋 Updated API Endpoints

| Endpoint                     | Operation                              |
| ---------------------------- | -------------------------------------- |
| `GET /staff`                 | Get all staff                          |
| `POST /staff`                | Add staff                              |
| `GET /shifts`                | List all shifts (filter by date/type)  |
| `POST /shifts`               | Create shift                           |
| `PUT /shifts/:id/assign`     | Assign staff to shift                  |
| `PUT /shifts/:id/attendance` | Mark attendance                        |
| `GET /shifts/conflicts`      | Check conflicts                        |
| `GET /reports`               | Export data (as CSV via backend logic) |

---

### 📊 Schedule View Optimization

* Use **MongoDB Aggregation Pipeline** to group shifts by date and type
* Add computed fields like:

  * `assigned_count`
  * `remaining_slots`
  * `conflict_flag`

---

## ✅ Benefits of MongoDB Approach

* Flexible schema
* Easy to embed assignments and attendance
* Efficient read performance for shift views
* Scales horizontally

---

Let me know if you want:

* The **MongoDB collection setup scripts**
* Backend code in **Flask**, **FastAPI**, or **Node.js**
* MongoDB Atlas setup tutorial

Would you also like a **component diagram** or **data flow diagram** for the MongoDB-based system?



Low-Level Design (LLD) :

Here is the **L** of the **Shift Scheduling and Attendance Management System** modified for **MongoDB**. This includes detailed data structures, modules, and their interactions, APIs, and MongoDB operations.

---

## 🔧 1. Modules Overview

| Module                    | Responsibility                                           |
| ------------------------- | -------------------------------------------------------- |
| **Auth**                  | Admin login and token-based authentication               |
| **Staff Management**      | Add/update/view staff directory                          |
| **Shift Management**      | Create shifts, assign staff, validate capacity/conflicts |
| **Attendance Management** | Mark/view attendance per shift                           |
| **Schedule Viewer**       | View daily/weekly shift view with filters                |
| **Conflict Checker**      | Detect overbooking or multiple assignments               |
| **Reports & Exports**     | Generate CSV reports for attendance/shifts               |

---

## 🧾 2. MongoDB Collections (Detailed)

### 📁 `staff`

```json
{
  "_id": ObjectId(),
  "staff_id": "S101",
  "name": "Dr. Smith",
  "role": "Doctor",
  "department": "General Medicine",
  "shift_preference": "Morning",
  "contact": "9876543210"
}
```

---

### 📁 `shifts`

```json
{
  "_id": ObjectId(),
  "shift_id": "SHIFT20250601MORNING",
  "date": "2025-06-01",
  "type": "Morning",  // Morning | Afternoon | Night
  "capacity": 5,
  "assignments": [
    {
      "staff_id": "S101",
      "name": "Dr. Smith",
      "role": "Doctor"
    }
  ],
  "attendance": [
    {
      "staff_id": "S101",
      "status": "Present",
      "remarks": "On time"
    }
  ]
}
```

---

## 🔌 3. REST APIs (with MongoDB Logic)

### 🔐 Admin Login

```
POST /api/auth/login
Body: { username, password }
→ Returns JWT token
```

---

### 👨‍⚕️ Add Staff

```
POST /api/staff
Body: { staff_id, name, role, contact, shift_preference }
→ Inserts into `staff`
```

---

### 📅 Create Shift

```
POST /api/shifts
Body: { date, type, capacity }
→ Creates new document in `shifts`
```

---

### 👥 Assign Staff to Shift

```
PUT /api/shifts/:shiftId/assign
Body: { staff_id }
→ Checks shift capacity
→ Checks for conflict on same day
→ Adds to assignments[]
```

**MongoDB Query Example**:

```js
db.shifts.updateOne(
  { shift_id: "SHIFT20250601MORNING" },
  {
    $addToSet: {
      assignments: {
        staff_id: "S102",
        name: "Nurse Joy",
        role: "Nurse"
      }
    }
  }
)
```

---

### 📋 Mark Attendance

```
PUT /api/shifts/:shiftId/attendance
Body: { staff_id, status, remarks }
→ Adds to attendance[]
```

---

### 📆 Daily Schedule View

```
GET /api/schedule?date=2025-06-01
→ Aggregates all shifts for that day
→ Returns assignment count, available slots
```

---

### ❌ Conflict Checker

```
GET /api/shifts/conflicts/:staff_id?date=2025-06-01
→ Checks if staff is assigned to >1 shift on same day
```

---

### 📂 Export Data

```
GET /api/export/shifts
GET /api/export/attendance
→ Uses `json2csv` to download CSV files
```

---

## 🧠 4. Business Rules

| Rule                             | Enforcement                               |
| -------------------------------- | ----------------------------------------- |
| Max 1 shift per day              | Check before inserting into `assignments` |
| Capacity should not be exceeded  | Count assignments before adding           |
| No duplicate staff in a shift    | Use `$addToSet`                           |
| Attendance only after shift date | Enforced in backend logic                 |

---

## 🖼 5. UI Integration Guidelines

* **Calendar Component**: For selecting shift dates
* **Dropdown Filters**: For staff role, department, status
* **Color Codes**:

  * Green: Assigned
  * Red: Conflict
  * Grey: Unassigned
* **Modal Forms**: For shift creation, attendance marking
* **Export Buttons**: To trigger CSV downloads

---

## 📊 6. Aggregation Examples

### 🔍 Get Daily Shift Summary

```js
db.shifts.aggregate([
  { $match: { date: "2025-06-01" } },
  {
    $project: {
      shift_id: 1,
      type: 1,
      assigned: { $size: "$assignments" },
      available: { $subtract: ["$capacity", { $size: "$assignments" }] }
    }
  }
])
```

---

### 📌 Conflict Detection

```js
db.shifts.find({
  "assignments.staff_id": "S101",
  "date": "2025-06-01"
})
```

If result > 1 ⇒ conflict.

---

## 🧰 7. Technology Stack

| Layer      | Tech                                  |
| ---------- | ------------------------------------- |
| Frontend   | Next.js                      |
| Backend    | Node.js + Next.js    |
| DB         | MongoDB Atlas                         |
| Auth       | JWT                                   |
| UI Library | Bootstrap               |
| Export     | json2csv                              |
| Hosting    |  Vercel   |

---



