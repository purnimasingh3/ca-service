"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa6';
import { Phone, ShieldCheck, Pencil, ChevronDown } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";

const DEFAULT_IMAGE = "/assets/blog-default.jpg";

const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function Blogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Pagination State - Ek page par 4 bade blogs dikhane k liye
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Contact Form States
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    state: '',
  });

  useEffect(() => {
    setLoading(true);
    fetch("https://ca-service.onrender.com/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          setBlogs([]);
        }
      })
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-lg font-medium">Loading blogs...</span>
        </div>
      </div>
    );
  }

  const categories = useMemo(() => ["All", ...new Set(blogs.map((b) => b.category))], [blogs]);

  const filteredBlogs = useMemo(() => {
    const cat = selectedCategory === "All" ? blogs : blogs.filter((b) => b.category === selectedCategory);
    if (!search.trim()) return cat;
    return cat.filter((b) =>
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt?.toLowerCase().includes(search.toLowerCase()) ||
      b.category?.toLowerCase().includes(search.toLowerCase()) ||
      b.author?.toLowerCase().includes(search.toLowerCase())
    );
  }, [blogs, selectedCategory, search]);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handleBackToBlogs = () => { setSearch(""); setSelectedCategory("All"); setCurrentPage(1); };

  // Contact Form Handlers
  const handleNext = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.contact)) {
      alert("Please enter a valid mobile number");
      return;
    }
    setActiveTab(2);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      alert("Please enter your email");
      return;
    }
    if (!formData.state) {
      alert("Please select your state");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/thank-you");
        setFormData({ name: "", contact: "", email: "", state: "" });
        setActiveTab(1);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap');

        .sf-page {
          font-family: 'Poppins', sans-serif;
          background: #F5F7FA;
          color: #1A2340;
          min-height: 100vh;
        }

        /* ── TOP INFO BAR ── */
        .sf-topbar {
          background: #1B3A6B;
          color: #CBD5E1;
          font-size: 12.5px;
          padding: 0 32px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 3px solid #22C55E;
        }
        .sf-topbar-date { display: flex; align-items: center; gap: 6px; }
        .sf-topbar-right { display: flex; align-items: center; gap: 20px; }
        .sf-social-icons { display: flex; gap: 6px; }
        .sf-social-icons a {
          width: 26px; height: 26px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; text-decoration: none;
          transition: opacity 0.15s;
        }
        .sf-social-icons a:hover { opacity: 0.85; }
        .sf-fb  { background: #1877F2; color: #fff; }
        .sf-tw  { background: #021018; color: #fff; }
        .sf-ig  { background: linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); color: #fff; }
        .sf-li  { background: #0A66C2; color: #fff; }
        .sf-yt  { background: #13c053; color: #fff; }

        /* ── SEARCH + CATEGORY STRIP ── */
        .sf-search-strip {
          background: linear-gradient(135deg, #1B3A6B 0%, #1e4a8a 100%);
          padding: 28px 32px;
        }
        .sf-search-strip-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .sf-search-strip h3 {
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 14px;
          opacity: 0.9;
        }
        .sf-search-row {
          display: flex;
          gap: 0;
          max-width: 580px;
          margin-bottom: 16px;
        }
        .sf-search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 12px 18px;
          font-size: 14px;
          font-family: 'Poppins', sans-serif;
          border-radius: 8px 0 0 8px;
          background: #fff;
          color: #1A2340;
        }
        .sf-search-input::placeholder { color: #94A3B8; }
        .sf-search-btn {
          background: #22C55E;
          border: none;
          padding: 0 20px;
          border-radius: 0 8px 8px 0;
          cursor: pointer;
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
        }
        .sf-search-btn:hover { background: #16A34A; }
        .sf-cat-row { display: flex; gap: 8px; flex-wrap: wrap; }
        .sf-cat-btn {
          padding: 6px 16px;
          border-radius: 99px;
          border: 1.5px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          font-size: 12.5px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Poppins', sans-serif;
        }
        .sf-cat-btn:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.6); color: #fff; }
        .sf-cat-btn.active {
          background: #22C55E;
          border-color: #22C55E;
          color: #fff;
          font-weight: 600;
        }

        /* ── MAIN LAYOUT ── */
        .sf-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px 32px 64px;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 28px;
          align-items: start;
        }

        /* ── BLOG CARDS (Uniform Grid for all 4 blogs) ── */
        .sf-blog-uniform-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        .sf-featured-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }
        .sf-featured-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
        .sf-featured-img {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #E2E8F0;
          flex-shrink: 0;
        }
        .sf-featured-body { padding: 18px 20px 20px; flex: 1; display: flex; flex-direction: column; }
        .sf-cat-tag {
          display: inline-flex;
          width: fit-content;
          white-space: nowrap;
          background: #EFF6FF;
          color: #1B3A6B;
          padding: 3px 10px;
          border-radius: 99px;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .sf-featured-title {
          font-family: 'Merriweather', serif;
          font-size: 16px;
          font-weight: 700;
          color: #1A2340;
          line-height: 1.45;
          margin-bottom: 8px;
        }
        .sf-featured-excerpt {
          font-size: 13px;
          color: #64748B;
          line-height: 1.65;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 14px;
        }
        .sf-author-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #94A3B8;
          border-top: 1px solid #F1F5F9;
          padding-top: 12px;
          margin-top: auto;
        }
        .sf-read-more-link {
          color: #1B3A6B;
          font-weight: 700;
        }

        /* ── PAGINATION CONTROLS ── */
        .sf-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
        }
        .sf-page-btn {
          background: #1B3A6B;
          color: #fff;
          border: none;
          padding: 10px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 13.5px;
          cursor: pointer;
          transition: background 0.2s, opacity 0.2s;
        }
        .sf-page-btn:hover:not(:disabled) {
          background: #142c52;
        }
        .sf-page-btn:disabled {
          background: #CBD5E1;
          color: #64748B;
          cursor: not-allowed;
        }
        .sf-page-info {
          font-size: 14px;
          font-weight: 600;
          color: #475569;
        }

        /* ── SIDEBAR ── */
        .sf-sidebar { position: sticky; top: 24px; }

        /* ── NO RESULTS ── */
        .sf-no-results {
          grid-column: 1;
          padding: 64px 0;
          text-align: center;
        }
        .sf-no-results h2 { font-size: 22px; font-weight: 700; color: #1A2340; margin-bottom: 8px; }
        .sf-no-results p { color: #64748B; margin-bottom: 20px; }
        .sf-back-btn {
          background: #1B3A6B;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
          @media (max-width: 900px) {
  .sf-main { grid-template-columns: 1fr; }
  .sf-blog-uniform-grid { grid-template-columns: 1fr; }
  
  /* Mobile par dono ko left-right ek line me rakhne ke liye */
  .sf-topbar {
    padding: 0 12px;
    height: 42px;
    display: flex;
    flex-direction: row !important; /* Ek line me hi rakhega */
    justify-content: space-between;
    align-items: center;
  }
  
  /* Date ka size chota kiya taaki space bache */
  .sf-topbar-date {
    font-size: 10px; 
    gap: 4px;
  }
  
  /* Social icons ka gap chota kiya */
  .sf-topbar-right {
    gap: 8px;
  }
  .sf-social-icons {
    gap: 4px;
  }
  .sf-social-icons a {
    width: 22px;
    height: 22px;
    font-size: 10px;
  }
}
         
      `}</style>

      <div className="sf-page">
        {/* TOP INFO BAR */}
        <div className="sf-topbar">
          <div className="sf-topbar-date">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline-block' }}>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>
              {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </span>
          </div>
          <div className="sf-topbar-right">
            <div className="sf-social-icons">
              <a href="https://www.facebook.com/profile.php?id=61589774084657" className="sf-fb"><FaFacebookF /></a>
              <a href="https://x.com/fintaxadviser" className="sf-tw"><FaXTwitter /></a>
              <a href="https://www.instagram.com/fintaxadviser" className="sf-ig"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/fintax-adviser-900a55410" className="sf-li"><FaLinkedinIn /></a>
              <a href="https://wa.me/+919990924477" className="sf-yt"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* SEARCH + CATEGORY STRIP */}
        <div className="sf-search-strip">
          <div className="sf-search-strip-inner">
            <h3>Search Articles</h3>
            <div className="sf-search-row">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search blogs, categories, authors..."
                className="sf-search-input"
              />
              <button className="sf-search-btn" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </button>
            </div>
            <div className="sf-cat-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`sf-cat-btn ${selectedCategory === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="sf-main">
          {/* LEFT — BLOG CONTENT */}
          <div>
            {currentBlogs.length === 0 ? (
              <div className="sf-no-results">
                <h2>No Results Found</h2>
                <p>We couldn't find any articles matching "{search}". Try a different search.</p>
                <button onClick={handleBackToBlogs} className="sf-back-btn">← Back to Blogs</button>
              </div>
            ) : (
              <>
                {/* 4 BLOGS IN UNIFORM GRID (Same layout as featured ones) */}
                <div className="sf-blog-uniform-grid">
                  {currentBlogs.map((blog) => (
                    <Link key={blog._id} href={`/blogs/${blog.slug}`} style={{ textDecoration: "none" }}>
                      <article className="sf-featured-card">
                        <div className="sf-featured-img">
                          <Image
                            src={blog.image || DEFAULT_IMAGE}
                            alt={blog.title || "Blog Image"}
                            fill
                            loading="eager"
                            sizes="(max-width: 900px) 100vw, 50vw"
                            style={{ objectFit: "cover", objectPosition: "top" }}
                          />
                        </div>
                        <div className="sf-featured-body">
                          <span className="sf-cat-tag">{blog.category || "Uncategorized"}</span>
                          <h2 className="sf-featured-title">{blog.title || "Untitled"}</h2>
                          <p className="sf-featured-excerpt">{blog.excerpt || "No excerpt available"}</p>
                          <div className="sf-author-row">
                            <div className="flex flex-col text-[11px]">
                              <span>by <b>{blog.author || "Unknown"}</b></span>
                              <span>{formatDate(blog.createdAt)}</span>
                            </div>
                            <span className="sf-read-more-link">Read More →</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {/* PAGINATION CONTROLS */}
                {totalPages > 1 && (
                  <div className="sf-pagination">
                    <button
                      className="sf-page-btn"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      ← Back
                    </button>
                    <span className="sf-page-info">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      className="sf-page-btn"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next Page ➔
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* RIGHT — SIDEBAR */}
          <aside className="sf-sidebar">
            <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl text-slate-900 border border-slate-100 mx-auto">
              {/* Top Rating Bar */}
              <div className="flex flex-wrap justify-between items-center gap-2 text-[11px] sm:text-xs md:text-sm text-indigo-900 font-bold border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-1">
                  <span className="bg-white text-slate-900 rounded-full font-bold text-md h-4 w-4 flex items-center justify-center"><FcGoogle /></span>
                  <span className="font-bold">4.8 Rating</span>
                </div>
                <span>25+ Experts</span>
                <span>Free Strategy Call</span>
              </div>

              {/* Header */}
              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900">
                  Book a Free <span className="text-orange-500">Consultation</span>
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Get Expert Guidance — <span className="text-blue-900">100% FREE</span>
                </p>
              </div>

              {/* Tabs Headers */}
              <div className="flex border-b border-slate-100 mt-5 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab(1)}
                  className={`flex-1 pb-2 text-center border-b-2 transition-colors ${activeTab === 1 ? "border-orange-500 text-slate-900" : "border-transparent text-slate-400"}`}
                >
                  Personal Details
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (formData.name.trim() && /^[6-9]\d{9}$/.test(formData.contact)) {
                      setActiveTab(2);
                    } else {
                      alert("Please fill personal details correctly first.");
                    }
                  }}
                  className={`flex-1 pb-2 text-center border-b-2 transition-colors ${activeTab === 2 ? "border-orange-500 text-slate-900" : "border-transparent text-slate-400"}`}
                >
                  State & Email
                </button>
              </div>

              {/* Active Monitoring Alert */}
              <div className="bg-emerald-50 text-emerald-700 text-center text-[11px] sm:text-xs font-bold py-1.5 px-2 rounded-lg mt-4 flex items-center justify-center gap-1.5">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="truncate">Active financial monitoring for 200+ companies</span>
              </div>

              {/* Form Fields */}
              <form className="mt-4 space-y-3" onSubmit={handleContactSubmit}>
                {/* STEP 1: Personal Details */}
                {activeTab === 1 && (
                  <div className="space-y-4 mt-5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition"
                    />

                    <div className="flex gap-2">
                      <div className="w-14 sm:w-16 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 font-medium text-xs sm:text-sm text-slate-500">
                        +91
                      </div>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="Mobile Number"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value.replace(/\D/g, '') })}
                        className="flex-1 min-w-0 px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full py-2.5 sm:py-3 rounded-xl bg-orange-500 text-white font-bold text-sm sm:text-base hover:bg-orange-600 transition"
                    >
                      Next →
                    </button>
                  </div>
                )}

                {/* STEP 2: Email & State */}
                {activeTab === 2 && (
                  <div className="space-y-4 mt-5">
                    {/* Edit Contact Display Box */}
                    <div className="flex justify-between items-center border border-slate-200 rounded-xl p-3 bg-slate-50">
                      <div>
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 font-bold">Mobile Number</p>
                        <p className="font-bold text-xs sm:text-sm text-slate-700">+91 {formData.contact}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab(1)}
                        className="flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-orange-600 transition"
                      >
                        <Pencil size={12} className="sm:w-3.5 sm:h-3.5" /> Edit
                      </button>
                    </div>

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition"
                    />

                    <div className="relative w-full">
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition bg-white appearance-none pr-10"
                      >
                        <option value="">Select State</option>
                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chhattisgarh</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Haryana</option>
                        <option>Himachal Pradesh</option>
                        <option>Jharkhand</option>
                        <option>Karnataka</option>
                        <option>Kerala</option>
                        <option>Madhya Pradesh</option>
                        <option>Maharashtra</option>
                        <option>Manipur</option>
                        <option>Meghalaya</option>
                        <option>Mizoram</option>
                        <option>Nagaland</option>
                        <option>Odisha</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Sikkim</option>
                        <option>Tamil Nadu</option>
                        <option>Telangana</option>
                        <option>Tripura</option>
                        <option>Uttar Pradesh</option>
                        <option>Uttarakhand</option>
                        <option>West Bengal</option>
                        <option>Andaman and Nicobar Islands</option>
                        <option>Chandigarh</option>
                        <option>Dadra and Nagar Haveli and Daman and Diu</option>
                        <option>Delhi</option>
                        <option>Jammu and Kashmir</option>
                        <option>Ladakh</option>
                        <option>Lakshadweep</option>
                        <option>Puducherry</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                        <ChevronDown size={16} />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-sm sm:text-base hover:opacity-90 transition shadow-md"
                    >
                      Book Free Strategy Call
                    </button>
                  </div>
                )}

                {/* Footer Badges & Buttons */}
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium text-center pt-1 flex items-center justify-center gap-1">
                  <ShieldCheck className="h-3 w-3 flex-shrink-0 text-slate-400" />
                  <span>Your details are secure and will not be shared.</span>
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                  <Link
                    href="tel:+919990924477"
                    className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-xl py-2.5 text-[11px] sm:text-xs font-bold text-blue-600 bg-white hover:bg-slate-50 transition"
                    title="Call Senior Advisor Desk"
                  >
                    <Phone className="h-3.5 w-3.5 text-blue-600 fill-blue-100 flex-shrink-0" /> Call Experts
                  </Link>

                  <Link
                    href="https://wa.me/+919990924477"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-emerald-200 rounded-xl py-2.5 text-[11px] sm:text-xs font-bold text-emerald-600 bg-emerald-50/50 hover:bg-emerald-50 transition"
                  >
                    <FaWhatsapp className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" /> WhatsApp
                  </Link>
                </div>
              </form>

              <div className="mt-4 text-center space-y-0.5 border-t border-slate-50 pt-3">
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800">Trusted by 500+ Founders Across India</p>
                <p className="text-[8px] sm:text-[9px] text-slate-400 font-semibold leading-tight">100% Money-Back Guarantee if documents not filed within 15 days</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}