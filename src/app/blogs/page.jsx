"use client";
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './blogs.module.css';
// import postsData from './postsData';

// Consistent date formatter to avoid hydration mismatch
const formatDate = (dateString) => {
  if (!dateString) return "No Date";
  const [year, month, day] =
    dateString.split('-');
  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];
  return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
};

const initialFormState = {
  title: '',
  excerpt: '',
  author: '',
  category: 'Tax',
  readTime: '5 min read',
  content: '',
  image: '/assets/blog-default.jpg'
};

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [postForm, setPostForm] = useState(initialFormState);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAdmin, setShowAdmin] = useState(true);
  const [search, setSearch] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);


  const categories = useMemo(
    () => ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    [blogPosts]
  );

  // useEffect(() => {
  //   if (typeof window === 'undefined') return;
  //   const storedPosts = window.localStorage.getItem('ca-blog-posts');
  //   if (storedPosts) {
  //     try {
  //       const parsedPosts = JSON.parse(storedPosts);
  //       if (Array.isArray(parsedPosts) && parsedPosts.length > 0) {
  //         setBlogPosts(parsedPosts);
  //       }
  //     } catch (error) {
  //       console.warn('Failed to load saved blog posts', error);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if (typeof window === 'undefined') return;
  //   window.localStorage.setItem('ca-blog-posts', JSON.stringify(blogPosts));
  // }, [blogPosts]);

  const filteredPosts = useMemo(
    () => {
      const byCategory =
        selectedCategory === 'All'
          ? blogPosts
          : blogPosts.filter((post) => post.category === selectedCategory);

      if (!search.trim()) return byCategory;

      const q = search.trim().toLowerCase();
      return byCategory.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    },
    [blogPosts, selectedCategory, search]
  );

  useEffect(() => {

    fetch(
      "http://localhost:5000/api/blogs"
    )
      .then((res) => res.json())
      .then((data) =>
        setBlogPosts(data)
      );

  }, []);
  useEffect(() => {

    const role =
      localStorage.getItem("role");

    if (role === "admin") {

      setIsAdmin(true);

    }

  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPost =
    async (event) => {

      event.preventDefault();
      try {
        const response =
          await fetch(
            "http://localhost:5000/api/blogs/create",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",

                Authorization:
                  localStorage.getItem(
                    "token"
                  )
              },

              body: JSON.stringify(
                postForm
              )
            }
          );

        const newBlog =
          await response.json();

        setBlogPosts((prev) => [
          newBlog,
          ...prev
        ]);
        //Form Reset
        setPostForm(initialFormState);
      } catch (error) {
        console.log(error);
      }
    };


  const handleDeletePost = async (postId) => {

    try {
      await fetch(
        `http://localhost:5000/api/blogs/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              localStorage.getItem("token")
          }
        }
      );

      setBlogPosts((prev) =>
        prev.filter((post) =>
          post._id !== postId
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className={`${styles.page} min-h-screen`}>

      {/* Hero Section */}
      <section className={`${styles.hero} text-white py-20 relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-slate-700`}>
              Latest Insights
            </h1>
            <p className="text-xl md:text-2xl text-slate-900 max-w-3xl mx-auto">
              Stay informed with expert articles on taxation, finance, audit, and business advisory services
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Featured */}
          <div className="mb-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="relative max-w-xl">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles, authors, or topics"
                  className="w-full rounded-full border-2 border-blue-300 px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-black bg-white"
                />
                <div className="absolute right-3 top-3 text-gray-400">🔎</div>
              </div>
              <div className="flex mt-4 gap-3 flex-wrap">
                <span className="text-sm text-gray-600 font-semibold">Trending:</span>
                {['GST', 'Tax', 'Audit', 'Finance'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedCategory(t)}
                    className="text-sm px-3 py-1 rounded-full bg-white border-2 border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className={`${styles.featured} rounded-2xl overflow-hidden mb-12 shadow-xl border-2 border-blue-300`}>
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-slate-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${filteredPosts[0].image || '/assets/blog-default.jpg'})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                </div>
                <div className="p-8 md:w-1/2 bg-white">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">{filteredPosts[0].author.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
                    <div>
                      <p suppressHydrationWarning className="text-sm text-gray-600 font-semibold">{filteredPosts[0].category} • {formatDate(filteredPosts[0].date)}</p>
                      <h3 className={`text-2xl font-bold text-black ${styles.headingShadow}`}>{filteredPosts[0].title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4">
                    <Link href={`/blogs/${filteredPosts[0]._id}`} className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-full font-semibold transition">Read Full Article</Link>
                    <span className="text-sm text-gray-600">By {filteredPosts[0].author} • {filteredPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="rounded-3xl border-2 border-blue-300 bg-white/95 p-8 shadow-lg mb-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Admin Panel</p>
                <h2 className={`text-3xl font-bold text-black mb-2 ${styles.headingShadow}`}>Publish a New Blog</h2>
                <p className="mt-2 text-gray-700">
                  Add fresh articles from this admin panel. New entries are saved locally in your browser.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAdmin((current) => !current)}
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-300 bg-white px-5 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50 transition"
              >
                {showAdmin ? 'Hide Admin Form' : 'Show Admin Form'}
              </button>
            </div>

            {isAdmin && showAdmin && (
              <form onSubmit={handleAddPost} className="mt-8 grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-black uppercase tracking-wide">Title</span>
                  <input
                    type="text"
                    name="title"
                    value={postForm.title}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-2 border-blue-300 bg-white px-4 py-3 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    placeholder="Enter blog title"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-black uppercase tracking-wide">Author</span>
                  <input
                    type="text"
                    name="author"
                    value={postForm.author}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-2 border-blue-300 bg-white px-4 py-3 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    placeholder="Author name"
                    required
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="text-sm font-bold text-black uppercase tracking-wide">Excerpt</span>
                  <textarea
                    name="excerpt"
                    value={postForm.excerpt}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-2 border-blue-300 bg-white px-4 py-3 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    rows={4}
                    placeholder="Write a short description for the blog post"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-black uppercase tracking-wide">Category</span>
                  <input
                    type="text"
                    name="category"
                    value={postForm.category}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-2 border-blue-300 bg-white px-4 py-3 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    placeholder="e.g. Tax, Finance, Audit"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-black uppercase tracking-wide">Read Time</span>
                  <input
                    type="text"
                    name="readTime"
                    value={postForm.readTime}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-2 border-blue-300 bg-white px-4 py-3 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    placeholder="e.g. 6 min read"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-black uppercase tracking-wide">Image URL</span>
                  <input
                    type="text"
                    name="image"
                    value={postForm.image}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-2 border-blue-300 bg-white px-4 py-3 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    placeholder="/assets/your-image.jpg or https://..."
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="text-sm font-bold text-black uppercase tracking-wide">Full Content</span>
                  <textarea
                    name="content"
                    value={postForm.content}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border-2 border-blue-300 bg-white px-4 py-3 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    rows={6}
                    placeholder="Write the full article content. You can paste HTML or plain text."
                  />
                </label>

                <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-700 font-semibold">
                    New posts are saved locally for this browser session.
                  </p>
                  <button
                    type="submit"
                    className={`${styles.btnSmooth} inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-3 text-sm font-bold text-white shadow-lg transition`}
                  >
                    ✨ Publish Blog
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              <h3 className={`text-xl font-bold text-black ${styles.headingShadow}`}>Filter by Category</h3>
            </div>
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all ${selectedCategory === cat ? 'bg-blue-600 text-white border-2 border-blue-600 shadow-lg' : 'bg-white border-2 border-blue-300 text-blue-600 hover:border-blue-500 hover:shadow-md'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredPosts.slice(0).map((post) => (
                  <Link key={post._id} href={`/blogs/${post._id}`} className="group">
                    <div className={`${styles.card} cursor-pointer rounded-2xl bg-white overflow-hidden border-2 border-blue-300 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300 h-full flex flex-col`}>
                      <div className="h-48 relative overflow-hidden bg-slate-100">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${post.image || '/assets/blog-default.jpg'})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-3">
                          <div className="flex gap-2 mb-2 flex-wrap">
                            <span className={`${styles.badge} inline-block px-3 py-1 text-xs font-bold rounded-full bg-white border-2 border-blue-300 text-blue-600`}>
                              {post.category}
                            </span>
                            <span suppressHydrationWarning className="text-xs font-semibold text-gray-600 flex items-center">
                              📅 {formatDate(post.date)}
                            </span>
                          </div>
                          <h3 className={`text-lg font-bold text-black line-clamp-2 ${styles.headingShadow}`}>
                            {post.title}
                          </h3>
                        </div>

                        <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t-2 border-blue-200">
                          <span className="text-xs text-gray-600 font-semibold">{post.author} • {post.readTime}</span>
                          {isAdmin && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                handleDeletePost(post._id);
                              }}
                              className="text-red-600 hover:text-red-700 font-bold text-sm transition"
                            >
                              🗑️
                            </button>
                          )}

                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-600 font-semibold">No articles found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white border-t-2 border-blue-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold text-black mb-4 ${styles.headingShadow}`}>
            Stay Updated
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter for the latest insights and updates in accounting and finance
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-blue-300 bg-white rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition">
              Subscribe →
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}