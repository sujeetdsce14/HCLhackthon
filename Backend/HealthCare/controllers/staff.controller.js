import Staff from "../models/staff.model.js";

// Add a new staff member
export const addStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// List all staff members
export const getAllStaff = async (req, res) => {
  try {
    const staffList = await Staff.find();
    res.json(staffList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search or list all staff members
export const getStaffSearch = async (req, res) => {
  try {
    const { name, role, shift } = req.query;

    // Create dynamic query object
    let query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" }; // case-insensitive search
    }

    if (role) {
      query.role = { $regex: role, $options: "i" }; // case-insensitive search
    }

    if (shift) {
      query.shiftPreference = { $regex: shift, $options: "i" }; // case-insensitive search
    }

    const staffList = await Staff.find(query);
    res.json(staffList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
