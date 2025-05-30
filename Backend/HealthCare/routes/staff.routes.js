import { Router } from "express";
import { addStaff, getAllStaff } from "../controllers/staff.controller.js";

const staffRouter = Router();

staffRouter.post("/", addStaff);
staffRouter.get("/", getAllStaff);

export default staffRouter;