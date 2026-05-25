"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../blogs.module.css';
// import postsData from '../postsData';

export default function BlogPostPage() {
  const params = useParams();
 const id = params?.id;
  const [post, setPost] = useState(null);

useEffect(() => {

  fetch("http://localhost:5000/api/blogs")
    .then((res) => res.json())
    .then((data) => {

      const found = data.find(
        (p) =>
          String(p._id) === String(id)
      );

      setPost(found || null);

    });

}, [id]);

  if (!post) {
    return (
      <div className={`${styles.page} min-h-screen`}>
        <main className="max-w-4xl mx-auto py-24 px-6 text-center">
          <h2 className={`text-2xl font-bold mb-4 text-black ${styles.headingShadow}`}>Article not found</h2>
          <p className="text-gray-700 mb-6">We couldn't find the article you're looking for.</p>
          <Link href="/blogs" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">Back to blogs</Link>
        </main>
        
      </div>
    );
  }

  return (
    <div className={`${styles.page} min-h-screen`}>
      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="mb-6">
          <h1 className={`text-4xl font-bold mb-2 text-black ${styles.headingShadow}`}>{post.title}</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{post.excerpt}</h2>
          <p className="text-sm text-gray-700 font-semibold">{post.category} • {post.author} • {post.readTime} • {post.date}</p>
        </div>

        {post.image && (
          <div className="w-full h-64 bg-center bg-cover rounded-lg mb-8 border-2 border-blue-300" style={{ backgroundImage: `url(${post.image})` }} />
        )}

        <article className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }} />
      </main>
      
    </div>
  );
}
