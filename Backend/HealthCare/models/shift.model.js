import mongoose from "mongoose";

const shiftSchema = new mongoose.Schema({
  shift_id: { type: String, required: true, unique: true },
  date: { type: String }, // YYYY-MM-DD
  type: { type: String, enum: ['Morning', 'Afternoon', 'Night'], required: true },
  capacity: { type: Number, required: true },
  assignments: [
    {
      staff_id: String,
      name: String,
      role: String
    }
  ],
  attendance: [
    {
      staff_id: String,
      status: { type: String, enum: ['Present', 'Absent', 'Late'] },
      remarks: String
    }
  ]
});

const Shift = mongoose.model('Shift', shiftSchema);
export default Shift;
