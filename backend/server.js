import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";


import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/BlogRoutes.js";


// console.log("Environment variables loaded:", process.env.MONGO_URI, process.env.PORT);
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

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