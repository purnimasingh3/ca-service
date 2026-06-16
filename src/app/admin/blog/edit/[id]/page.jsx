"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBlog({ params }) {
  const router = useRouter();
  const { id } = use(params);

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
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      router.push("/admin/login");
      return;
    }

    if (!id) {
      setLoading(false);
      router.push("/admin/dashboard");
      return;
    }

    fetch(`https://ca-service.onrender.com/api/blogs/id/${id}`)
      .then((res) => {
        if (!res.ok) return res.json().then((body) => {
          throw new Error(body.message || "Unable to fetch blog details");
        });
        return res.json();
      })
      .then((data) => {
        if (!data || !data._id) {
          throw new Error("Blog not found.");
        }

        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          author: data.author || "",
          category: data.category || "",
          excerpt: data.excerpt || "",
          image: data.image || "",
          content: data.content || "",
          status: data.status || "published",
        });

        setImagePreview(data.image || "");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Failed to load blog details.");
      })
      .finally(() => setLoading(false));
  }, [id, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setFormData((prev) => ({
        ...prev,
        title: value,
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token") || "";
      const response = await fetch(`https://ca-service.onrender.com/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to update blog post.");
      }

      setMessage("Blog updated successfully.");
      setTimeout(() => router.push("/admin/dashboard"), 1500);
    } catch (err) {
      console.error(err);
      setError(err.message || "Update failed.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Edit Blog</p>
            <h1 className="text-4xl font-bold text-slate-900">Update your blog post</h1>
          </div>
          <button
            type="button"
            onClick={() => router.push("/admin/dashboard")}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Back to Dashboard
          </button>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-500">
            Loading blog details...
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">{error}</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {message && <div className="rounded-3xl border border-green-200 bg-green-50 p-4 text-green-700">{message}</div>}
            <div>
              <label className="block font-semibold mb-2">Blog Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title of the blog"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Slug</label>
              <span>URL:</span>
              <span className="text-blue-600 text-sm"> /{formData.slug}</span>
              <input
                type="text"
                name="slug"
                placeholder="url"
                value={formData.slug}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />

            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block font-semibold mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  placeholder="Author name"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select Category</option>
                  <option value="GST">GST</option>
                  <option value="Tax">Tax</option>
                  <option value="Startup">Startup</option>
                  <option value="Compliance">Compliance</option>
                  <option value="Funding">Funding</option>
                  <option value="Funding">Others</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-2">Short Description</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                placeholder="Short description..."
                onChange={handleChange}
                rows="4"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">
                Featured Image
              </label>

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-64 rounded-xl border mb-4"
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setImageFile(file);
                    setImagePreview(URL.createObjectURL(file));
                  }
                }}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Full Content</label>
              <textarea
                name="content"
                value={formData.content}
                placeholder="Add your full blog content"
                onChange={handleChange}
                rows="10"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-200/30 hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
