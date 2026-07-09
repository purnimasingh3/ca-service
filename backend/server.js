import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
// import helmet from "helmet";
import rateLimit from "express-rate-limit";
// import mongoSanitize from "express-mongo-sanitize";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/BlogRoutes.js";


// console.log("Environment variables loaded:", process.env.MONGO_URI, process.env.PORT);
connectDB();

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});
// app.use(helmet());
app.use(
  cors({
    origin: [
      "https://fintaxadviser.com",
      "https://www.fintaxadviser.com",
      "http://localhost:5000",
      "http://localhost:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
// app.use(mongoSanitize());
app.use("/api", limiter);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/blogs",
  blogRoutes
);

app.listen(
  process.env.PORT,
  () => {

    console.log(
      `Server running on port ${process.env.PORT}`
    );

  });