import { Router } from "express";
import { addStaff, getAllStaff,getStaffSearch } from "../controllers/staff.controller.js";

const staffRouter = Router();

staffRouter.post("/", addStaff);
staffRouter.get("/", getAllStaff);
staffRouter.get("/search", getStaffSearch);

export default staffRouter;