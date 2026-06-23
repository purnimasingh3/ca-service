// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import styles from "../blogs.module.css";

// export default function BlogDetails() {
//   const params = useParams();
//   const slug =
//     params?.slug;
//   const [blog, setBlog] =
//     useState(null);

//   useEffect(() => {
//     if (!slug) return;
//     fetch(
//       `https://ca-service.onrender.com/api/blogs/${slug}`
//     )
//       .then((res) =>
//         res.json()
//       )
//       .then((data) =>
//         setBlog(data)
//       )
//       .catch(console.error);

//   }, [slug]);

//   if (!blog) {

//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }
//  return (
//     <div
//       className={styles.page}>
//       <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16 overflow-hidden">
//         <Link
//           href="/blogs"
//           className="text-blue-600 font-semibold">
//           ← Back to Blogs
//         </Link>
//         <div className="mt-5">
//           <span
//             className={styles.categoryTag}
//           >
//             {blog.category}
//           </span>
//           <h1
//             className="text-xl md:text-3xl font-bold text-slate-900 mt-4 leading-tight break-words"
//           >
//             {blog.title}
//           </h1>
//           <div className="mt-4 text-gray-500">

//             By {blog.author}
//             {" • "}
//             {new Date(
//               blog.createdAt
//             ).toLocaleDateString(
//               "en-IN",
//               {
//                 day: "numeric",
//                 month: "long",
//                 year: "numeric"
//               }
//             )}
//           </div>
//         </div>
//         <img
//           src={blog.image}
//           alt={blog.title}
//           cclassName="w-full h-auto rounded-2xl mt-8"
//         />
//         <div
//           className="prose prose-lg max-w-4xl w-full break-words overfow-hidden mt-6
//           prose-p:my-2
//           prose-ul:my-2
//           prose-ol:my-2
//           prose-li:my-1
//           prose-h1:my-3
//           prose-h2:my-3
//           prose-h3:my-2"
//           dangerouslySetInnerHTML={{
//             __html: blog.content
//           }}
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "../blogs.module.css";

export default function BlogDetails() {
  const params = useParams();
  const slug = params?.slug;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!slug) return;
    fetch(`https://ca-service.onrender.com/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch(console.error);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 font-medium">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span>Loading article...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <article className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Navigation */}
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors gap-1 group mb-8"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Blogs
        </Link>

        {/* Header Section */}
        <header className="mb-8">
          <span className={`${styles.categoryTag} uppercase tracking-wider text-xs px-3 py-1.5`}>
            {blog.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight whitespace-normal break-words">
            {blog.title}
          </h1>

          <div className="mt-6 flex items-center text-sm text-slate-500 border-b border-slate-200 pb-6 gap-2 flex-wrap">
            <span className="font-medium text-slate-700">By {blog.author}</span>
            <span className="text-slate-300">•</span>
            <time dateTime={blog.createdAt}>
              {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        {blog.image && (
          <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-sm bg-slate-100 mb-10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Main Content Render */}
        <div
          className="prose prose-slate max-w-none w-full mt-6 
            prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-base prose-p:leading-relaxed prose-p:text-slate-700 prose-p:my-4 
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-slate-700 prose-li:my-1.5
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:italic prose-blockquote:bg-slate-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
            [&_img]:rounded-xl [&_img]:mx-auto [&_table]:w-full [&_pre]:overflow-x-auto [&_code]:break-all"
          dangerouslySetInnerHTML={{
            __html: blog.content
          }}
        />
      </article>
    </div>
  );
}