import { Router } from "express";
<<<<<<< Updated upstream
import { addStaff, getAllStaff,getStaffSearch } from "../controllers/staff.controller.js";
=======
import {
  createShift,
  assignStaffToShift,
  getScheduleByDate,
  checkShiftConflicts
} from "../controllers/shift.controller.js";
>>>>>>> Stashed changes

const shiftRouter = Router();

<<<<<<< Updated upstream
staffRouter.post("/", addStaff);
staffRouter.get("/", getAllStaff);
staffRouter.get("/search", getStaffSearch);
=======
// Create shift
shiftRouter.post('/', createShift);
>>>>>>> Stashed changes

// Assign staff to shift
shiftRouter.put('/:shiftId/assign', assignStaffToShift);

// Get daily schedule
shiftRouter.get('/schedule', getScheduleByDate);

// Conflict check
shiftRouter.get('/conflicts/:staff_id', checkShiftConflicts);

export default shiftRouter;