import express from "express";
import {
  addComplaint,
  getComplaints,
  updateStatus,
  deleteComplaint
} from "../controllers/complaintController.js";
const router = express.Router();
router.post("/", addComplaint);
router.get("/", getComplaints);
router.put("/:id", updateStatus);
router.delete("/:id", deleteComplaint);

export default router;