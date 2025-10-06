// app.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// ✅ Enable CORS for frontend (React running on localhost:3000)
app.use(cors({
  origin: "http://localhost:5173",
 
}));

// Body parser
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Test route for frontend fetch
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello world" });
});

// Root route
app.get("/", (req, res) => {
  res.json({ message: "🚀 Backend is running!" });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
