import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import rateLimit from "express-rate-limit";
import User from "../models/User.js";

const router = express.Router();
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
});
// REGISTER
router.post(
  "/register",
  async (req, res) => {
    try {
      const {
        name,
        email,
        password
      } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          message: "Email already registered",
        });
      }
      const hashedPassword =
        await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword
      });
      // res.json(user);
      res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    } catch (error) {
      console.error("Register Error:", error);

      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  });


// LOGIN
router.post(
  "/login", loginLimiter,
  async (req, res) => {
    try {
      const {
        email,
        password
      } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          message: "User not found"
        });
      }
      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid credentials"
        });

      }
      const token = jwt.sign(
        {
          id: user._id,
          role: user.role
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d"
        }
      );

      res.status(200).json({
        success: true,
        token,
        role: user.role,
      });
    } catch (error) {
      console.error("Login Error:", error);

      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  });

export default router;