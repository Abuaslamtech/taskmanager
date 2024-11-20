import express from "express";
import {
  addTask,
  editTask,
  getTasks,
  remTask,
} from "../controllers/taskController.js";

const router = express.Router();

// retrieve tasks
router.get("/tasks", getTasks);

//add tasks
router.post("/add", addTask);

// update task
router.put("/edit/:id", editTask);

// remove task
router.delete("/delete/:id", remTask);

export default router;
