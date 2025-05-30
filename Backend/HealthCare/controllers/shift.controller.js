import Shift from "../models/shift.model.js";
import Staff from "../models/staff.model.js";

// Create a new shift (Morning, Afternoon, Night) with capacity
export const createShift = async (req, res) => {
  const { date, type, capacity } = req.body;
  try {
    // Prevent duplicate shift for same date and type
    const exists = await Shift.findOne({ date, type });
    if (exists) return res.status(409).json({ error: 'Shift already exists for this date and type' });

    const shift = new Shift({ date, type, capacity });
    await shift.save();
    res.json({ message: 'Shift created', shift });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
};

// Assign staff to a shift (with conflict check)
export const assignStaffToShift = async (req, res) => {
  const { shiftId } = req.params;
  const { staff_id } = req.body;

  try {
    const shift = await Shift.findById(shiftId);
    if (!shift) return res.status(404).json({ error: 'Shift not found' });

    if (shift.assignments.length >= shift.capacity)
      return res.status(400).json({ error: 'Shift capacity full' });

    // Prevent assigning same staff to multiple shifts of same date
    const conflict = await Shift.findOne({
      date: shift.date,
      "assignments.staff_id": staff_id
    });
    if (conflict) return res.status(400).json({ error: 'Staff already assigned on this date' });

    // Check staff exists
    const staff = await Staff.findById(staff_id);
    if (!staff) return res.status(404).json({ error: 'Staff not found' });

    shift.assignments.push({ staff_id });
    await shift.save();

    res.json({ message: 'Staff assigned to shift' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Display all shifts per day with assigned staff and available slots
export const getScheduleByDate = async (req, res) => {
  const { date } = req.query;
  try {
    // Populate staff details in assignments
    const shifts = await Shift.find({ date }).populate("assignments.staff_id", "name role shiftPreference contact");
    const result = shifts.map(s => ({
      shift_id: s._id,
      type: s.type,
      total_capacity: s.capacity,
      assigned: s.assignments.length,
      available: s.capacity - s.assignments.length,
      staff: s.assignments.map(a => a.staff_id)
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Check shift conflicts for a staff on a date
export const checkShiftConflicts = async (req, res) => {
  const { staff_id } = req.params;
  const { date } = req.query;

  try {
    const shifts = await Shift.find({
      date,
      "assignments.staff_id": staff_id
    });

    res.json({ conflict: shifts.length > 0, shifts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};