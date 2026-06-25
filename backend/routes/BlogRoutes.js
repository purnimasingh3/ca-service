import express from "express";
import Blog from "../models/Blog.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";
import jwt from "jsonwebtoken";


const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization;
    let query = { status: "published" };

    if (token) {
      try {
        jwt.verify(token, process.env.JWT_SECRET);
        query = {};
      } catch (err) {
        query = { status: "published" };
      }
    }

    // const blogs = await Blog.find(query).sort({
    //   createdAt: -1
    // });
    const blogs = await Blog.find(query)
  .select("title slug category excerpt image author createdAt status")
  .sort({ createdAt: -1 })
  .lean();
 

    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

router.get("/id/:id", async (req, res) => {

  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found." });
  }

  res.json(blog);

});

router.get("/:slug", async (req, res) => {

  const blog = await Blog.findOne({
    slug: req.params.slug
  });

  res.json(blog);

});

// router.post(
//   "/create",
//   authMiddleware,
//   adminMiddleware,
//   async (req, res) => {

//     const blog = await Blog.create({
//       ...req.body,
//       createdBy: req.user.id
//     });

//     res.json(blog);

//   }
// );
router.post(
  "/create",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  async (req, res) => {
    try {
      let imageUrl = "";

      if (req.file) {
        const result = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "blogs" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );

          streamifier
            .createReadStream(req.file.buffer)
            .pipe(stream);
        });

        imageUrl = result.secure_url;
      }

      const blog = await Blog.create({
        ...req.body,
        image: imageUrl,
        createdBy: req.user.id,
      });

      res.json(blog);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error.message,
      });
    }
    // console.log("file:",req.file);
  }
);

// router.put(
//   "/:id",
//   authMiddleware,
//   adminMiddleware,
//   async (req, res) => {
// console.log("PUT HIT");
// console.log(req.params.id);
// console.log("BODY:" , req.body);
// console.log("file:" , req.file);
//     const blog =
//       await Blog.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//       );

//     res.json(blog);

//   }
// );

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  async (req, res) => {
    try {
      let updateData = { ...req.body };

      if (req.file) {
        const result = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "blogs" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );

          streamifier
            .createReadStream(req.file.buffer)
            .pipe(stream);
        });

        updateData.image = result.secure_url;
      }

      const blog = await Blog.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      res.json(blog);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    await Blog.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true
    });

  }
);


export default router;