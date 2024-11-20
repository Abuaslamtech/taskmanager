import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
