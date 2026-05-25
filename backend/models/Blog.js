import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({

  title: String,
  excerpt: String,
  author: String,
  category: String,
  readTime: String,
  content: String,
  image: String,

  date: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model(
  "Blog",
  blogSchema
);