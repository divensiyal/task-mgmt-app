const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Fetch all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Add a task
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  const saved = await task.save();
  res.json(saved);
});

module.exports = router;
