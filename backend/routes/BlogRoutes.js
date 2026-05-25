import express from "express";

import Blog from "../models/Blog.js";

import authMiddleware from "../middleware/authMiddleware.js";

import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();


// GET BLOGS
router.get(
  "/",
  async (req, res) => {

    const blogs =
      await Blog.find().sort({
        date: -1
      });

    res.json(blogs);

});


// CREATE BLOG
router.post(
  "/create",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    const blog =
      await Blog.create(req.body);

    res.json(blog);

});


// DELETE BLOG
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    await Blog.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted"
    });

});

export default router;