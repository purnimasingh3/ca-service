"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
const ReactQuill = dynamic(
  () => import("react-quill-new"),
  { ssr: false }
);

export default function CreateBlog() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    author: "",
    category: "",
    excerpt: "",
    image: "",
    content: "",
    status: "published",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitData = new FormData();

  Object.keys(formData).forEach((key) => {
    if (key !== "image") {
      submitData.append(key, formData[key]);
    }
  });

  if (imageFile) {
    submitData.append("image", imageFile);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting...");
    console.log(submitData);
    try {
      const response = await fetch("https://ca-service.onrender.com/api/blogs/create", {
      // const response = await fetch("http://localhost:5000/api/blogs/create", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: submitData,
      });
      const data = await response.json();
      if (response.ok) {
        alert("Blog Created Successfully");
        router.push("/admin/dashboard");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  // const contentLength = formData.content.length;
  // const contentProgress = Math.min((contentLength / 3000) * 100, 100);

  const categories = ["GST", "Tax", "Startup", "Compliance", "Funding","Virtual CFO","Others"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap');

        .cb-root {
          min-height: 100vh;
          background: #F1F5F9;
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
        }

        /* TOP NAV */
        .cb-nav {
          background: #0F1629;
          padding: 0 32px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .cb-nav-brand {
          font-family: 'DM Serif Display', serif;
          color: #fff;
          font-size: 18px;
          letter-spacing: 0.01em;
        }
        .cb-nav-brand span {
          color: #818CF8;
        }
        .cb-nav-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #274ad7;
        }
        .cb-nav-breadcrumb a {
          color: #1b4bdb;
          text-decoration: none;
        }
        .cb-nav-breadcrumb a:hover { color: #0c0303; }
        .cb-nav-breadcrumb .sep { color: #334155; }

        /* MAIN LAYOUT */
        .cb-body {
          display: flex;
          flex: 1;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 36px 24px 64px;
          gap: 28px;
          align-items: flex-start;
        }

        /* LEFT PANEL */
        .cb-sidebar {
          width: 340px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 80px;
        }
        .cb-card {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
        }
        .cb-card-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 16px;
        }

        /* FIELDS */
        .cb-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }
        .cb-field:last-child { margin-bottom: 0; }
        .cb-label {
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          letter-spacing: 0.02em;
        }
        .cb-input {
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          color: #0F172A;
          transition: border-color 0.15s, box-shadow 0.15s;
          width: 100%;
          outline: none;
        }
        .cb-input:focus {
          border-color: #6366F1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
          background: #fff;
        }
        .cb-input::placeholder { color: #94A3B8; }
        .cb-input[readonly] {
          color: #64748B;
          cursor: default;
          font-size: 12px;
          letter-spacing: 0.02em;
        }
        .cb-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
          cursor: pointer;
        }

        /* STATUS TOGGLE */
        .cb-status-row {
          display: flex;
          gap: 8px;
        }
        .cb-status-btn {
          flex: 1;
          padding: 9px 0;
          border-radius: 9px;
          border: 1.5px solid #E2E8F0;
          background: #F8FAFC;
          font-size: 13px;
          font-weight: 500;
          color: #64748B;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Inter', sans-serif;
        }
        .cb-status-btn:hover { border-color: #C7D2FE; color: #4338CA; }
        .cb-status-btn.active-published {
          background: #EEF2FF;
          border-color: #6366F1;
          color: #4338CA;
          font-weight: 600;
        }
        .cb-status-btn.active-draft {
          background: #FFF7ED;
          border-color: #FB923C;
          color: #C2410C;
          font-weight: 600;
        }

        /* CATEGORY CHIPS */
        .cb-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .cb-chip {
          padding: 6px 13px;
          border-radius: 99px;
          border: 1.5px solid #E2E8F0;
          background: #F8FAFC;
          font-size: 12px;
          font-weight: 500;
          color: #64748B;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Inter', sans-serif;
        }
        .cb-chip:hover { border-color: #A5B4FC; color: #4338CA; }
        .cb-chip.active {
          background: #6366F1;
          border-color: #6366F1;
          color: #fff;
        }

        /* IMAGE PREVIEW */
        .cb-img-preview {
          width: 100%;
          height: 120px;
          border-radius: 10px;
          border: 1.5px dashed #CBD5E1;
          background: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 10px;
        }
        .cb-img-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 9px;
        }
        .cb-img-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #94A3B8;
          font-size: 12px;
        }
        .cb-img-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* RIGHT - MAIN EDITOR */
        .cb-editor {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cb-editor-header {
          margin-bottom: 4px;
        }
        .cb-page-title {
          font-family: 'DM Serif Display', serif;
          font-size: 32px;
          color: #0F172A;
          font-weight: 400;
          line-height: 1.2;
        }
        .cb-page-sub {
          font-size: 14px;
          color: #64748B;
          margin-top: 4px;
        }

        .cb-title-field input {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          padding: 16px 20px;
          border-radius: 14px;
          line-height: 1.3;
        }

        .cb-slug-display {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: #F1F5F9;
          border-radius: 8px;
          margin-top: -8px;
        }
        .cb-slug-label {
          font-size: 11px;
          font-weight: 600;
          color: #94A3B8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .cb-slug-value {
          font-size: 12px;
          color: #6366F1;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .cb-excerpt-area {
          font-family: 'Inter', sans-serif;
          resize: vertical;
          line-height: 1.6;
          min-height: 80px;
        }

        .cb-content-wrap {
          position: relative;
        }
        .cb-content-area {
          resize: vertical;
          min-height: 360px;
          line-height: 1.75;
          font-size: 15px;
          padding-bottom: 48px;
        }
        .cb-content-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 10px 14px;
          background: #fff;
          border-top: 1px solid #F1F5F9;
          border-radius: 0 0 14px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cb-progress-bar {
          flex: 1;
          height: 3px;
          background: #E2E8F0;
          border-radius: 99px;
          overflow: hidden;
        }
        .cb-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366F1, #818CF8);
          border-radius: 99px;
          transition: width 0.3s ease;
        }
        .cb-char-count {
          font-size: 11px;
          color: #94A3B8;
          white-space: nowrap;
          font-weight: 500;
        }

        /* PUBLISH BUTTON */
        .cb-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 8px;
        }
        .cb-btn-publish {
          position: relative;
          overflow: hidden;
          background: #4F46E5;
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(79,70,229,0.35);
        }
        .cb-btn-publish::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.25) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cb-btn-publish:hover { background: #4338CA; transform: translateY(-1px); }
        .cb-btn-publish:hover::after { opacity: 1; }
        .cb-btn-publish:active { transform: translateY(0); }
        .cb-btn-publish:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

        .cb-btn-cancel {
          background: none;
          border: 1.5px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 24px;
          font-size: 14px;
          font-weight: 500;
          color: #64748B;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.15s, color 0.15s;
        }
        .cb-btn-cancel:hover { border-color: #94A3B8; color: #0F172A; }

        .cb-save-hint {
          font-size: 12px;
          color: #94A3B8;
          margin-left: auto;
        }

        @media (max-width: 900px) {
          .cb-body { flex-direction: column; }
          .cb-sidebar { width: 100%; position: static; }
        }
      `}</style>


      <form onSubmit={handleSubmit}>
        <div className="cb-body">
          {/* ── LEFT SIDEBAR ── */}
          <aside className="cb-sidebar">

            {/* AUTHOR & STATUS */}
            <div className="cb-card">
              <p className="cb-card-title">Post Settings</p>

              <div className="cb-field">
                <label className="cb-label">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Author Name"
                  required
                  className="cb-input"
                />
              </div>

              <div className="cb-field">
                <label className="cb-label">Visibility</label>
                <div className="cb-status-row">
                  <button
                    type="button"
                    className={`cb-status-btn ${formData.status === "published" ? "active-published" : ""}`}
                    onClick={() => setFormData({ ...formData, status: "published" })}
                  >
                    ● Published
                  </button>
                  <button
                    type="button"
                    className={`cb-status-btn ${formData.status === "draft" ? "active-draft" : ""}`}
                    onClick={() => setFormData({ ...formData, status: "draft" })}
                  >
                    ○ Draft
                  </button>
                </div>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="cb-card">
              <p className="cb-card-title">Category</p>
              <div className="cb-chips">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    className={`cb-chip ${formData.category === cat ? "active" : ""}`}
                    onClick={() =>
                      setFormData({ ...formData, category: formData.category === cat ? "" : cat })
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* FEATURED IMAGE */}
            <div className="cb-card">
              <p className="cb-card-title">Featured Image</p>
              <div className="cb-img-preview">
                {formData.image ? (
                  <img src={formData.image} alt="preview" onError={(e) => (e.target.style.display = "none")} />
                ) : (
                  <div className="cb-img-placeholder">
                    <div className="cb-img-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <span>Choose an image below</span>
                  </div>
                )}
              </div>
              <div className="cb-field">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    if (file) {
                      setImageFile(file);

                      setFormData({
                        ...formData,
                        image: URL.createObjectURL(file),
                      });
                    }
                  }}
                />
              </div>
            </div>

          </aside>

          {/* ── RIGHT EDITOR ── */}
          <main className="cb-editor">
            <div className="cb-editor-header">
              <h1 className="cb-page-title">New post</h1>
              <p className="cb-page-sub">Write something worth reading.</p>
              <div className="cb-nav-breadcrumb">
                <a href="/admin/dashboard">Back to Dashboard</a>
                <span className="sep">›</span>
                <span style={{ color: "#CBD5E1" }}>New Post</span>
              </div>
            </div>

            {/* TITLE */}
            <div className="cb-card cb-title-field">
              <div className="cb-field" style={{ marginBottom: 8 }}>
                <label className="cb-label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Your headline goes here…"
                  required
                  className="cb-input"
                />
              </div>
              {formData.slug && (
                <div className="cb-slug-display">
                  <span className="cb-slug-label">URL</span>
                  <span className="cb-slug-value">/{formData.slug}</span>
                </div>
              )}
            </div>
            <div className="cb-field">
              <label className="cb-label">Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="gst-registration-guide"
                required
                className="cb-input"
              />
            </div>

            {/* EXCERPT */}
            <div className="cb-card">
              <div className="cb-field">
                <label className="cb-label">Short Description</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows="3"
                  placeholder="A one-liner that makes people want to read more…"
                  className="cb-input cb-excerpt-area"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="cb-card">
              <div className="cb-field" style={{ marginBottom: 0 }}>
                <label className="cb-label">Content</label>
                <div className="cb-content-wrap">
                  {/* <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Start writing…"
                    className="cb-input cb-content-area"
                  /> */}
                  <ReactQuill
                    theme="snow"
                    value={formData.content}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        content: value,
                      }))
                    }
                    style={{ height: "350px", marginBottom: "50px" }}
                  />
                  {/* <div className="cb-content-footer">
                    <div className="cb-progress-bar">
                      <div className="cb-progress-fill" style={{ width: `${contentProgress}%` }} />
                    </div>
                    <span className="cb-char-count">{contentLength.toLocaleString()} chars</span>
                  </div> */}
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="cb-actions">
              <button type="submit" className="cb-btn-publish" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    Publishing…
                  </>
                ) : formData.status === "draft" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                    Save Draft
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    Publish Post
                  </>
                )}
              </button>
              <button type="button" className="cb-btn-cancel" onClick={() => router.push("/admin/dashboard")}>
                Cancel
              </button>
              <span className="cb-save-hint">Auto-save off</span>
            </div>
          </main>
        </div>
      </form>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}