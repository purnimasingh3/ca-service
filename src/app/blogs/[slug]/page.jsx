"use client";

import React, { useEffect,useState} from "react";
import Link from "next/link";
import { useParams }from "next/navigation";
import styles from "../blogs.module.css";

export default function BlogDetails() {

  const params = useParams();
  const slug =
    params?.slug;
  const [blog, setBlog] =
    useState(null);

  useEffect(() => {
    if (!slug) return;
    fetch(
      `http://localhost:5000/api/blogs/${slug}`
    )
      .then((res) =>
        res.json()
      )
      .then((data) =>
        setBlog(data)
      )
      .catch(console.error);

  }, [slug]);

  if (!blog) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );


  }

  return (

    <div
      className={styles.page}
    >

      <div className="max-w-4xl mx-auto px-6 py-16">

        <Link
          href="/blogs"
          className="text-blue-600 font-semibold"
        >
          ← Back to Blogs
        </Link>

        <div className="mt-8">

          <span
            className={styles.categoryTag}
          >
            {blog.category}
          </span>

          <h1
            className="text-5xl font-bold text-slate-900 mt-5"
          >
            {blog.title}
          </h1>

          <div className="mt-4 text-gray-500">

            By {blog.author}

            {" • "}

            {new Date(
              blog.createdAt
            ).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "long",
                year: "numeric"
              }
            )}

          </div>

        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[500px] object-cover rounded-3xl mt-10"
        />

        <div
          className="prose prose-lg max-w-none mt-10"
          dangerouslySetInnerHTML={{
            __html: blog.content
          }}
        />

      </div>

    </div>

  );

}
