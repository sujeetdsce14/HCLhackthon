# HCLhackthon
Healthcare Staff Shift Schedular and  Attendance tracker


🧑‍💼 1. Admin Login
No registration required – static credentials used.
POST /api/admin/login
Authenticate admin.
json
CopyEdit
{
  "username": "admin",
  "password": "yourPassword"
}
________________________________________
👩‍⚕️ 2. Staff Management
POST /api/staff
Add a new staff member.
json
CopyEdit
{
  "name": "Dr. Jane Doe",
  "staffId": "DOC123",
  "role": "Doctor",
  "shiftPreference": "Morning",
  "contact": "+1234567890"
}
GET /api/staff
List all staff members. Supports pagination, sorting, and searching via query params.
Query params (optional):
?search=Jane&sortBy=role&order=asc&page=1&limit=10
PUT /api/staff/:id
Update staff info.
json
CopyEdit
{
  "shiftPreference": "Afternoon",
  "contact": "+1987654321"
}
DELETE /api/staff/:id
Remove a staff member.
________________________________________
⏱ 3. Shift Scheduler
POST /api/shifts
Create a new shift (Morning, Afternoon, Night).
json
CopyEdit
{
  "date": "2025-06-01",
  "shiftType": "Morning",
  "capacity": 5
}
GET /api/shifts
Get all shifts for a specific day or week.
Query params:
?date=2025-06-01 or ?weekStart=2025-06-01&weekEnd=2025-06-07
POST /api/shifts/assign
Assign staff to a shift.
json
CopyEdit
{
  "shiftId": "shift123",
  "staffId": "DOC123"
}
GET /api/shifts/status?date=2025-06-01
Return all shifts for the day with assigned/unassigned counts.
________________________________________
📅 4. Daily Schedule View
GET /api/schedule/daily?date=2025-06-01
Get full daily view of all staff shift assignments.
GET /api/schedule/weekly?start=2025-06-01&end=2025-06-07
Get full weekly view.
________________________________________
🟢 5. Mark Attendance
POST /api/attendance
Mark attendance manually.
json
CopyEdit
{
  "staffId": "DOC123",
  "shiftId": "shift123",
  "status": "Present",
  "remarks": "N/A"
}
PUT /api/attendance/:id
Update attendance after shift (optional window check in backend).
json
CopyEdit
{
  "status": "Absent",
  "remarks": "Sick Leave"
}
GET /api/attendance?date=2025-06-01
View attendance for a given day (optional filters: role, staffId, shiftType)
________________________________________
🔍 6. Search & Filter
Use filters as query params in these GET routes:
•	/api/staff?role=Nurse&shiftPreference=Night
•	/api/schedule/daily?date=2025-06-01&role=Doctor
•	/api/attendance?status=Absent&role=Technician
________________________________________
⚠️ 7. Shift Conflict Alerts
✅ Automatically handled in POST /api/shifts/assign
Backend should check:
•	If staff is already assigned to another shift on the same day → return conflict response
Sample response:
json
CopyEdit
{
  "error": "Shift conflict: Staff is already assigned to Afternoon shift on 2025-06-01"
}
________________________________________
🔐 Optional Middleware
•	Authentication middleware for admin routes.
•	Role-based access control (only admin can assign shifts, mark attendance, etc.)
________________________________________
✅ Summary Table
Feature	Method	Endpoint	Description
Admin Login	POST	/api/admin/login	Login admin
Add Staff	POST	/api/staff	Create staff
View All Staff	GET	/api/staff	List/search staff
Update Staff	PUT	/api/staff/:id	Update staff details
Delete Staff	DELETE	/api/staff/:id	Remove staff
Create Shift	POST	/api/shifts	Create a shift
Assign Staff to Shift	POST	/api/shifts/assign	Assign a staff to a shift
View Daily Schedule	GET	/api/schedule/daily	Calendar view of one day
View Weekly Schedule	GET	/api/schedule/weekly	Calendar view of the week
Mark Attendance	POST	/api/attendance	Mark staff present/absent
Update Attendance	PUT	/api/attendance/:id	Edit attendance entry
View Attendance	GET	/api/attendance	Filter attendance
View Shift Status	GET	/api/shifts/status	Assigned vs. unassigned tracking
________________________________________


