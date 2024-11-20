import Task from "../models/taskModel.js";

// Add new task
export const addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    res.status(200).json({ message: "Task added" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "error creating task", errror: err.message });
  }
};

// Retrieve Tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(201).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "error fetching tasks", err });
  }
};

// Modify Task
export const editTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndUpdate(taskId, req.body, { new: true });
    res.status(200).json({ message: "user updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Task
export const remTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
