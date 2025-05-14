const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: String,
  state: { type: String, default: "pending" }
});

module.exports = mongoose.model("Task", TaskSchema);
