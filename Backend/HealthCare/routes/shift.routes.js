
import { Router } from "express";
import {createShift,assignStaffToShift,markAttendance,getScheduleByDate,checkShiftConflicts} from '../controllers/shift.controller.js';


const shiftRouter = Router();

// Create shift
shiftRouter.post('/', createShift);

// Assign staff
shiftRouter.put('/:shiftId/assign', assignStaffToShift);

// Mark attendance
shiftRouter.put('/:shiftId/attendance', markAttendance);

// Get daily schedule
shiftRouter.get('/schedule', getScheduleByDate);

// Conflict check
shiftRouter.get('/conflicts/:staff_id', checkShiftConflicts);

export default shiftRouter;

