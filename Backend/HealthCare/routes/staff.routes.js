import { Router } from "express";
import { addStaff, getAllStaff } from "../controllers/staff.controller.js";

const staffRouter = Router();

router.post("/staff", addStaff);
router.get("/staff", getAllStaff);

export default staffRouter;