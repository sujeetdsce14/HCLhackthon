import { Router } from "express";
import {
  createShift,
  assignStaffToShift,
  getScheduleByDate,
  checkShiftConflicts
} from "../controllers/shift.controller.js";

const shiftRouter = Router();

// Create shift
shiftRouter.post('/', createShift);

// Assign staff to shift
shiftRouter.put('/:shiftId/assign', assignStaffToShift);

// Get daily schedule with assigned staff and available slots
shiftRouter.get('/schedule', getScheduleByDate);

// Conflict check
shiftRouter.get('/conflicts/:staff_id', checkShiftConflicts);

export default shiftRouter;