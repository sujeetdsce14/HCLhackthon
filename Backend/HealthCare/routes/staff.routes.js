import { Router } from "express";
import { addStaff, getAllStaff } from "../controllers/staff.controller.js";

const staffRouter = Router();

router.post("/", addStaff);
router.get("/", getAllStaff);

export default staffRouter;