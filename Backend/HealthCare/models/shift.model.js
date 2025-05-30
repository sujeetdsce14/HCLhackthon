import mongoose from "mongoose";

const shiftSchema = new mongoose.Schema({
  date: { type: String, required: true }, // YYYY-MM-DD
  type: { type: String, enum: ['Morning', 'Afternoon', 'Night'], required: true },
  capacity: { type: Number, required: true },
  assignments: [
    {
      staff_id: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" }
    }
  ]
});

const Shift = mongoose.model('Shift', shiftSchema);
export default Shift;