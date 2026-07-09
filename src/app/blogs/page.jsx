
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa6';
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
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [consultForm, setConsultForm] = useState({ name: "", email: "", phone: "" });

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
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-lg font-medium">
            Loading blogs...
          </span>
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

  const featuredBlogs = filteredBlogs.slice(0, 2);
  const remainingBlogs = filteredBlogs.slice(2);

  const handleBackToBlogs = () => { setSearch(""); setSelectedCategory("All"); };


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
        .sf-topbar-login {
          display: flex; align-items: center; gap: 5px;
          color: #CBD5E1; text-decoration: none; font-size: 12px;
        }
        .sf-topbar-login:hover { color: #fff; }
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

        /* ── HEADER BANNER ── */
        .sf-header {
          background: #fff;
          border-bottom: 1px solid #E2E8F0;
        }
        .sf-header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 14px 32px;
          display: flex;
          align-items: center;
          gap: 0;
        }
        .sf-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .sf-logo-mark {
          width: 48px; height: 48px; border-radius: 10px;
          background: linear-gradient(135deg, #1B3A6B 60%, #22C55E);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 800; font-size: 20px; letter-spacing: -1px;
        }
        .sf-logo-text { line-height: 1.1; }
        .sf-logo-name { font-size: 22px; font-weight: 700; color: #1945ad; }
        .sf-logo-name span { color: #0f90bb; }
        .sf-logo-tagline { font-size: 10px; color: #64748B; letter-spacing: 0.08em; text-transform: uppercase; }

        .sf-header-center {
          flex: 1;
          text-align: center;
          padding: 0 24px;
        }
        .sf-header-center h2 {
          font-family: 'Merriweather', serif;
          font-size: 22px;
          color: #1B3A6B;
          font-weight: 700;
          border-bottom: 2px solid #F59E0B;
          display: inline-block;
          padding-bottom: 4px;
        }
        .sf-header-center p { font-size: 12px; color: #64748B; margin-top: 3px; }

        .sf-header-banner {
          width: 320px;
          height: 70px;
          border-radius: 8px;
          overflow: hidden;
          background: linear-gradient(135deg, #1B3A6B, #2563EB, #7C3AED);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
        }
        .sf-header-banner-text {
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
          padding: 8px;
          letter-spacing: 0.04em;
          z-index: 1;
        }
        .sf-header-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px);
        }

        /* ── NAV ── */
        .sf-nav {
          background: #fff;
          border-bottom: 2px solid #E2E8F0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .sf-nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sf-nav-links { display: flex; align-items: center; }
        .sf-nav-item {
          padding: 16px 18px;
          font-size: 13px;
          font-weight: 600;
          color: #1A2340;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 3px;
          border-bottom: 3px solid transparent;
          transition: color 0.15s, border-color 0.15s;
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.01em;
        }
        .sf-nav-item:hover, .sf-nav-item.active { color: #1B3A6B; border-bottom-color: #22C55E; }
        .sf-nav-chevron { font-size: 9px; color: #94A3B8; }
        .sf-nav-search-btn {
          width: 38px; height: 38px;
          border: 1.5px solid #1B3A6B;
          border-radius: 6px;
          background: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #1B3A6B;
          transition: background 0.15s;
        }
        .sf-nav-search-btn:hover { background: #EFF6FF; }

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
          grid-template-columns: 1fr 300px;
          gap: 28px;
          align-items: start;
        }

        /* ── BLOG CARDS ── */
        .sf-featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin-bottom: 32px;
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
          height: 210px;
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
}
        .sf-featured-title {
          font-family: 'Merriweather', serif;
          font-size: 15px;
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
          margin-bottom: 12px;
        }
        .sf-author-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #94A3B8;
          border-top: 1px solid #F1F5F9;
          padding-top: 10px;
          margin-top: auto;
        }
        .sf-author-dot { color: #CBD5E1; }

        /* More articles */
        .sf-section-title {
          font-family: 'Merriweather', serif;
          font-size: 18px;
          font-weight: 700;
          color: #1A2340;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 2px solid #E2E8F0;
          position: relative;
        }
        .sf-section-title::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 48px;
          height: 2px;
          background: #22C55E;
        }
        .sf-blog-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .sf-blog-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 1px 6px rgba(0,0,0,0.06);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
        }
        .sf-blog-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.1); }
        .sf-blog-img { width: 100%; height: 150px; object-fit: cover; display: block; }
        .sf-blog-body { padding: 14px 16px 16px; flex: 1; display: flex; flex-direction: column; }
        .sf-blog-title {
          font-weight: 700;
          font-size: 14px;
          color: #1A2340;
          line-height: 1.4;
          margin-bottom: 6px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .sf-blog-excerpt {
          font-size: 12.5px;
          color: #64748B;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
          margin-bottom: 10px;
        }
        .sf-blog-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          border-top: 1px solid #F1F5F9;
          padding-top: 10px;
        }
        .sf-blog-author { color: #475569; font-weight: 600; }
        .sf-blog-date { color: #94A3B8; }
        .sf-read-more { color: #1B3A6B; font-weight: 700; font-size: 12px; white-space: nowrap; }

        /* ── SIDEBAR ── */
        .sf-sidebar { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 72px; }
        .sf-consult-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          border: 1px solid #E2E8F0;
        }
        .sf-consult-banner {
          background: linear-gradient(135deg, #1B3A6B, #1e4a8a);
          padding: 0;
          position: relative;
          height: 90px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sf-consult-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px);
        }
        .sf-consult-banner-label {
          position: absolute;
          bottom: 0;
          left: 0;
          background: #F59E0B;
          color: #1A2340;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 16px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .sf-consult-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .sf-consult-body { padding: 18px; }
        .sf-consult-body h3 {
          font-family: 'Merriweather', serif;
          font-size: 15px;
          font-weight: 700;
          color: #1A2340;
          margin-bottom: 6px;
        }
        .sf-consult-body p { font-size: 12.5px; color: #64748B; margin-bottom: 16px; line-height: 1.55; }
        .sf-consult-form { display: flex; flex-direction: column; gap: 10px; }
        .sf-consult-input {
          width: 100%;
          border: 1.5px solid #E2E8F0;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 13px;
          font-family: 'Poppins', sans-serif;
          outline: none;
          color: #1A2340;
          transition: border-color 0.15s;
          background: #F8FAFC;
        }
        .sf-consult-input:focus { border-color: #1B3A6B; background: #fff; }
        .sf-consult-input::placeholder { color: #94A3B8; }
        .sf-consult-btn {
          background: linear-gradient(135deg, #1B3A6B, #2563EB);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 11px;
          font-size: 13.5px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: opacity 0.15s;
          margin-top: 2px;
        }
        .sf-consult-btn:hover { opacity: 0.9; }

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
          font-family: 'Poppins', sans-serif;
        }
        .sf-back-btn:hover { background: #162d56; }

        /* ── NEWSLETTER ── */
        .sf-newsletter {
          background: linear-gradient(135deg, #1B3A6B 0%, #1e4a8a 100%);
          padding: 52px 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sf-newsletter::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 14px);
        }
        .sf-newsletter > * { position: relative; }
        .sf-newsletter h2 {
          font-family: 'Merriweather', serif;
          font-size: 26px;
          color: #fff;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .sf-newsletter p { color: rgba(255,255,255,0.75); margin-bottom: 24px; font-size: 14.5px; }
        .sf-nl-form { display: flex; gap: 0; max-width: 440px; margin: 0 auto; }
        .sf-nl-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 13px 18px;
          font-size: 14px;
          border-radius: 8px 0 0 8px;
          font-family: 'Poppins', sans-serif;
        }
        .sf-nl-btn {
          background: #22C55E;
          border: none;
          padding: 0 24px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          border-radius: 0 8px 8px 0;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: background 0.15s;
        }
        .sf-nl-btn:hover { background: #16A34A; }
        .sf-nl-status { margin-top: 12px; font-size: 13px; color: rgba(255,255,255,0.8); }

        @media (max-width: 900px) {
          .sf-main { grid-template-columns: 1fr; }
          .sf-featured-grid, .sf-blog-grid { grid-template-columns: 1fr; }
          .sf-header-inner { flex-wrap: wrap; }
          .sf-header-banner { width: 100%; }
          .sf-topbar-date { display: none; }
        }
      `}</style>

      <div className="sf-page">

        {/* TOP INFO BAR */}
        <div className="sf-topbar">
          <div className="sf-topbar-date">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            {new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </div>
          <div className="sf-topbar-right">
            {/* <a href="/admin/login" className="sf-topbar-login">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              Login
            </a> */}
            <div className="sf-social-icons">
              <a href="https://www.facebook.com/profile.php?id=61589774084657" className="sf-fb"><FaFacebookF /></a>
              <a href="https://x.com/fintaxadviser" className="sf-tw"><FaXTwitter /></a>
              <a href="https://www.instagram.com/fintaxadviser" className="sf-ig"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/fintax-adviser-900a55410" className="sf-li"><FaLinkedinIn /></a>
              <a href="https://wa.me/+919990924477" className="sf-yt"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* HEADER BANNER */}
        {/* <header className="sf-header">
          <div className="sf-header-inner">
            <a href="/" className="sf-logo">
              <img src="/assets/icon.jpeg" className="sf-logo-mark"></img>
              <div className="sf-logo-text">
                <div className="sf-logo-name">Fintax<span>Adviser</span></div>
                <div className="sf-logo-tagline">Strong Finance,Strong Future</div>
              </div>
            </a>
            <div className="sf-header-center">
              <h2>Blogs &amp; Articles</h2>
              <p>Strong Finance,Strong Future</p>
            </div>
            <div className="sf-header-banner">
              <div className="sf-header-banner-text">Expert Insights<br />on Law &amp; Finance</div>
            </div>
          </div>
        </header> */}

        {/* NAV */}
        {/* <nav className="sf-nav">
          <div className="sf-nav-inner">
            <div className="sf-nav-links">
              {["Start-Up", "IP & Legal", "Fundraising", "Compliance", "Close-Down", "Blogs Categories"].map((item) => (
                <button key={item} className={`sf-nav-item ${item === "Blogs Categories" ? "active" : ""}`}>
                  {item} <span className="sf-nav-chevron">▾</span>
                </button>
              ))}
            </div>
            <button className="sf-nav-search-btn" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
          </div>
        </nav> */}

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
            {filteredBlogs.length === 0 ? (
              <div className="sf-no-results">
                <h2>No Results Found</h2>
                <p>We couldn't find any articles matching "{search}". Try a different search.</p>
                <button onClick={handleBackToBlogs} className="sf-back-btn">← Back to Blogs</button>
              </div>
            ) : (
              <>
                {/* FEATURED 2 */}
                <div className="sf-featured-grid">
                  {featuredBlogs.map((blog) => (
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
                            <span>by {blog.author || "Unknown"}</span>
                            <span className="sf-author-dot">|</span>
                            <span>{formatDate(blog.createdAt)}</span>

                          </div>

                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {/* REMAINING */}
                {remainingBlogs.length > 0 && (
                  <div>
                    <h2 className="sf-section-title">More Articles</h2>
                    <div className="sf-blog-grid">
                      {remainingBlogs.map((blog) => (
                        <Link key={blog._id} href={`/blogs/${blog.slug}`} style={{ textDecoration: "none" }}>
                          <article className="sf-blog-card">
                            <Image
                              src={blog.image || DEFAULT_IMAGE}
                              alt={blog.title || "Blog Image"}
                              width={500}
                              height={300}
                              className="sf-blog-img"
                            />
                            <div className="sf-blog-body">
                              <span className="sf-cat-tag">{blog.category || "Uncategorized"}</span>
                              <h3 className="sf-blog-title">{blog.title || "Untitled"}</h3>
                              <p className="sf-blog-excerpt">{blog.excerpt || "No excerpt available"}</p>
                              <div className="sf-blog-footer">
                                <div>
                                  <div className="sf-blog-author">{blog.author || "Unknown"}</div>
                                  <div className="sf-blog-date">{formatDate(blog.createdAt)}</div>
                                </div>
                                <span className="sf-read-more">Read More →</span>
                              </div>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* RIGHT — SIDEBAR */}
          <aside className="sf-sidebar">
            <div className="sf-consult-card">
              <div className="sf-consult-banner">
                <div className="sf-consult-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.42 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" /></svg>
                </div>
                <span className="sf-consult-banner-label">Get Consultation</span>
              </div>
              <div className="sf-consult-body">
                <h3>Free Consultation By Expert</h3>
                <p>Connect with our team for tailored business and legal advice.</p>
                <div className="sf-consult-form">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="sf-consult-input"
                    value={consultForm.name}
                    onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="sf-consult-input"
                    value={consultForm.email}
                    onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="sf-consult-input"
                    value={consultForm.phone}
                    onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                  />
                  <button className="sf-consult-btn">Submit Request</button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* NEWSLETTER */}
        {/* <section className="sf-newsletter">
          <h2>Get Latest Tax Updates</h2>
          <p>Weekly insights on GST, taxation and compliance — straight to your inbox.</p>
          <div className="sf-nl-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sf-nl-input"
            />
            <button
              className="sf-nl-btn"
              onClick={async () => {
                if (!email.trim()) { setNewsletterStatus("Please enter a valid email"); return; }
                setNewsletterStatus("Subscribing...");
                setNewsletterStatus("✓ Successfully subscribed!");
                setEmail("");
                setTimeout(() => setNewsletterStatus(""), 3000);
              }}
            >
              Subscribe
            </button>
          </div>
          {newsletterStatus && <p className="sf-nl-status">{newsletterStatus}</p>}
        </section> */}

      </div>
    </>
  );
}
