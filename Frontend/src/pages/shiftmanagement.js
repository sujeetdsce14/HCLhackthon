import React, { useState } from "react";
import ShiftTable from "../components/shifttable";

// Example users, replace with API data as needed
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Brown" },
];

const shiftColors = {
  Morning: "bg-success text-white",
  Afternoon: "bg-primary text-white",
  Night: "bg-danger text-white",
};

function ShiftManagement() {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({ userId: "", shift: "", date: "" });
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Build attendance object for ShiftTable
  const attendance = {};
  assignments.forEach((a) => {
    if (!attendance[a.date]) attendance[a.date] = {};
    if (!attendance[a.date][a.shift]) attendance[a.date][a.shift] = {};
    attendance[a.date][a.shift][parseInt(a.userId)] = true;
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    today.setHours(0,0,0,0);
    const selected = new Date(form.date);
    selected.setHours(0,0,0,0);
    if (!form.userId || !form.shift || !form.date) {
      setMessage("Please select user, shift, and date.");
      return;
    }
    if (selected < today) {
      setMessage("Cannot assign shift for a past date.");
      return;
    }
    // Only one shift per user per date
    if (assignments.some((a) => a.userId === form.userId && a.date === form.date)) {
      setMessage("This user already has a shift assigned for this date.");
      return;
    }
    setAssignments([
      ...assignments,
      { userId: form.userId, shift: form.shift, date: form.date },
    ]);
    setMessage("");
    setForm({ userId: "", shift: "", date: "" });
  };

  return (
    <div className="container my-5" style={{ maxWidth: "900px" }}>
      <h2 className="mb-4 ">Shift Management</h2>
      <button className="pink btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        Assign Shift
      </button>
      {/* Modal for shift form */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Assign Shift</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const today = new Date();
                  today.setHours(0,0,0,0);
                  const selected = new Date(form.date);
                  selected.setHours(0,0,0,0);
                  if (!form.userId || !form.shift || !form.date) {
                    handleSubmit(e); // sets message
                    return;
                  }
                  if (selected < today) {
                    handleSubmit(e); // sets message
                    return;
                  }
                  if (assignments.some((a) => a.userId === form.userId && a.date === form.date)) {
                    handleSubmit(e); // sets message
                    return;
                  }
                  handleSubmit(e);
                  setShowModal(false);
                }}>
                  {message && (
                    <div className={`alert ${message.includes("already") ? "alert-danger" : "alert-warning"}`}>{message}</div>
                  )}
                  <div className="mb-3">
                    <label className="form-label " htmlFor="userId">User</label>
                    <select
                      className="form-control"
                      id="userId"
                      name="userId"
                      value={form.userId}
                      onChange={handleChange}
                    >
                      <option value="">Select user</option>
                      {users.map((u) => (
                        <option key={u.id} value={u.id}>{u.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label " htmlFor="shift">Shift</label>
                    <select
                      className="form-control"
                      id="shift"
                      name="shift"
                      value={form.shift}
                      onChange={handleChange}
                    >
                      <option value="">Select shift</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Night">Night</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label " htmlFor="date">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="pink btn btn-primary w-100">Assign Shift</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Pass attendance to ShiftTable */}
      <ShiftTable attendance={attendance} />
    </div>
  );
}

export default ShiftManagement;
