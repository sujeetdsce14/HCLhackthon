import React, { useState } from "react";

// Example users, replace with API data as needed
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Brown" },
];

const shifts = ["Morning", "Afternoon", "Night"];

// Helper to get dates for the current week (Mon-Sun)
function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) - 6 (Sat)
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function ShiftTable({ attendance: externalAttendance }) {
  const [view, setView] = useState("week"); // 'week' is now the default view
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  });
  const [attendance, setAttendance] = useState(externalAttendance || {});

  // Sync attendance with externalAttendance if it changes
  React.useEffect(() => {
    if (externalAttendance) setAttendance(externalAttendance);
  }, [externalAttendance]);

  const weekDates = getWeekDates();

  const handleAttendance = (date, shift, userId, present) => {
    setAttendance((prev) => ({
      ...prev,
      [date]: {
        ...(prev[date] || {}),
        [shift]: {
          ...((prev[date] && prev[date][shift]) || {}),
          [userId]: present,
        },
      },
    }));
  };

  const renderTable = (dates) => (
    <table className="table table-bordered align-middle text-center">
      <thead className="table-primary">
        <tr>
          <th>Shift</th>
          {dates.map((date) => (
            <th key={date.toISOString()}>
              {date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {shifts.map((shift) => (
          <tr key={shift}>
            <td className={
              shift === "Morning"
                ? "bg-success text-white"
                : shift === "Afternoon"
                ? "bg-warning text-dark"
                : "bg-danger text-white"
            }>
              {shift}
            </td>
            {dates.map((date) => (
              <td key={date.toISOString()}>
                {users
                  .filter(user =>
                    // Only show user if they are present for this shift and not present for any other shift on this date
                    attendance[date.toISOString().slice(0, 10)] &&
                    attendance[date.toISOString().slice(0, 10)][shift] &&
                    attendance[date.toISOString().slice(0, 10)][shift][user.id] &&
                    // Ensure user is not present in any other shift for this date
                    shifts.every(s => s === shift || !(
                      attendance[date.toISOString().slice(0, 10)][s] &&
                      attendance[date.toISOString().slice(0, 10)][s][user.id]
                    ))
                  )
                  .map((user) => (
                    <div key={user.id} className="d-flex align-items-center justify-content-between mb-1">
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color:
                            shift === "Morning"
                              ? "#198754"
                              : shift === "Afternoon"
                              ? "#fd7e14"
                              : "#dc3545",
                        }}
                      >
                        {user.name}
                      </span>
                      <input
                        type="checkbox"
                        checked={
                          attendance[date.toISOString().slice(0, 10)] &&
                          attendance[date.toISOString().slice(0, 10)][shift] &&
                          attendance[date.toISOString().slice(0, 10)][shift][user.id]
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          setAttendance(prev => {
                            const dateKey = date.toISOString().slice(0, 10);
                            const newAttendance = { ...prev };
                            if (!newAttendance[dateKey]) newAttendance[dateKey] = {};
                            // Remove user from all shifts for this date
                            shifts.forEach(s => {
                              if (newAttendance[dateKey][s] && user.id in newAttendance[dateKey][s]) {
                                delete newAttendance[dateKey][s][user.id];
                              }
                            });
                            // If checked, add user to this shift
                            if (e.target.checked) {
                              if (!newAttendance[dateKey][shift]) newAttendance[dateKey][shift] = {};
                              newAttendance[dateKey][shift][user.id] = true;
                            }
                            return { ...newAttendance };
                          });
                        }}
                        title={user.name + ' present'}
                      />
                    </div>
                  ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className=" mb-0">Shift Attendance Table</h4>
        <div>
          <button
            className={`btn btn-outline-primary me-2 ${view === "day" ? "active" : ""}`}
            onClick={() => setView("day")}
          >
            Day View
          </button>
          <button
            className={`btn btn-outline-primary ${view === "week" ? "active" : ""}`}
            onClick={() => setView("week")}
          >
            Week View
          </button>
        </div>
      </div>
      {view === "day" && (
        <div className="mb-3">
          <label className="form-label me-2">Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="form-control d-inline-block"
            style={{ width: 180 }}
          />
        </div>
      )}
      {view === "day"
        ? renderTable([new Date(selectedDate)])
        : renderTable(weekDates)}
    </div>
  );
}

export default ShiftTable;
