import Staff from "../models/staff.model.js";
import Shift from "../models/shift.model.js";

export const createShift = async (req, res) => {
  const { date, type, capacity } = req.body;
  console.log({ date, type, capacity });
  const shift_id = `SHIFT${date}${type.toUpperCase()}`;

  try {
    const exists = await Shift.findOne({ shift_id });
    if (exists) return res.status(409).json({ error: 'Shift already exists' });

    const shift = new Shift({ shift_id, date, type, capacity });
    await shift.save();

    res.json({ message: 'Shift created', shift });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const assignStaffToShift = async (req, res) => {
  const { shiftId } = req.params;
  const { staff_id } = req.body;

  try {
    const shift = await Shift.findOne({ shift_id: shiftId });
    if (!shift) return res.status(404).json({ error: 'Shift not found' });

    if (shift.assignments.length >= shift.capacity)
      return res.status(400).json({ error: 'Shift capacity full' });

    const conflict = await Shift.findOne({
      date: shift.date,
      'assignments.staff_id': staff_id
    });

    if (conflict) return res.status(400).json({ error: 'Staff already assigned on this date' });

    const staff = await Staff.findOne({ staff_id });
    if (!staff) return res.status(404).json({ error: 'Staff not found' });

    await Shift.updateOne(
      { shift_id: shiftId },
      {
        $addToSet: {
          assignments: {
            staff_id: staff.staff_id,
            name: staff.name,
            role: staff.role
          }
        }
      }
    );

    res.json({ message: 'Staff assigned to shift' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const markAttendance = async (req, res) => {
  const { shiftId } = req.params;
  const { staff_id, status, remarks } = req.body;

  try {
    const shift = await Shift.findOne({ shift_id: shiftId });
    if (!shift) return res.status(404).json({ error: 'Shift not found' });

    const today = new Date().toISOString().split('T')[0];
    if (today < shift.date)
      return res.status(400).json({ error: 'Attendance not allowed before shift date' });

    await Shift.updateOne(
      { shift_id: shiftId },
      { $addToSet: { attendance: { staff_id, status, remarks } } }
    );

    res.json({ message: 'Attendance marked' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getScheduleByDate = async (req, res) => {
  const { date } = req.query;
  try {
    const shifts = await Shift.find({ date });
    const result = shifts.map(s => ({
      shift_id: s.shift_id,
      type: s.type,
      total_capacity: s.capacity,
      assigned: s.assignments.length,
      available: s.capacity - s.assignments.length
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const checkShiftConflicts = async (req, res) => {
  const { staff_id } = req.params;
  const { date } = req.query;

  try {
    const shifts = await Shift.find({
      date,
      'assignments.staff_id': staff_id
    });

    res.json({ conflict: shifts.length > 1, shifts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
