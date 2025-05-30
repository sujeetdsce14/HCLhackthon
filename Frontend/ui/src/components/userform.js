import React, { useState } from "react";

function UserForm() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    shiftPreference: "",
    contact: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.role || !form.shiftPreference || !form.contact) {
      setMessage("Please fill in all fields.");
      return;
    }
    setMessage("User added successfully!");
    // Reset form (optional)
    setForm({
      name: "",
      role: "",
      shiftPreference: "",
      contact: "",
    });
  };

  return (
    <div className="container my-4" style={{ maxWidth: "500px" }}>
      <h3 className="mb-3 ">Add User</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        {message && (
          <div className={`alert ${message.includes("success") ? "alert-success" : "alert-danger"}`}>
            {message}
          </div>
        )}
        <div className="mb-3">
          <label className="form-label " htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-primary" htmlFor="role">
            Role
          </label>
          <select
            className="form-control"
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="">Select role</option>
            <option value="Doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="Technician">Technician</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label text-primary" htmlFor="shiftPreference">
            Shift Preference
          </label>
          <select
            className="form-control"
            id="shiftPreference"
            name="shiftPreference"
            value={form.shiftPreference}
            onChange={handleChange}
          >
            <option value="">Select shift</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label " htmlFor="contact">
            Contact
          </label>
          <input
            className="form-control"
            id="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Enter contact"
          />
        </div>
        <button type="submit" className="pink btn btn-primary w-100">
          Add User
        </button>
      </form>
    </div>
  );
}

export default UserForm;