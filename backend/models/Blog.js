import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      unique: true,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    excerpt: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true
    },

    image: {
      type: String,
      default: ""
    },

    author: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Blog",
  blogSchema
);