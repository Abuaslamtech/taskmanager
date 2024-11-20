import express from "express";
import router from "./routes/taskRoutes.js";
import mongoose from "mongoose";

const app = express();

// middlewares
app.use(express.json());

// connect to database
mongoose
  .connect("mongodb://localhost:27017/taskManager")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("database connection error:", err));

app.use("/api", router);
//Listen to port 3000
app.listen(3000, () => console.log("Server started at port 3000"));
