"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formatDate = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function Dashboard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      router.push("/admin/login");
      return;
    }

    const token = localStorage.getItem("token") || "";

    fetch("https://ca-service.onrender.com/api/blogs", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blog posts");
        return res.json();
      })
      .then((data) => {
        console.log("BLOGS DATA:", data);
        setBlogs(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load blog posts. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [router]);

  const filteredBlogs = useMemo(() => {
    return blogs
      .filter((blog) => {
        if (statusFilter === "All") return true;
        return blog.status === statusFilter.toLowerCase();
      })
      .filter((blog) => {
        if (!search.trim()) return true;
        const query = search.trim().toLowerCase();
        return (
          blog.title?.toLowerCase().includes(query) ||
          blog.excerpt?.toLowerCase().includes(query) ||
          blog.category?.toLowerCase().includes(query) ||
          blog.author?.toLowerCase().includes(query)
        );
      });
  }, [blogs, search, statusFilter]);

  const stats = useMemo(() => {
    const published = blogs.filter((blog) => blog.status === "published").length;
    const drafts = blogs.filter((blog) => blog.status === "draft").length;
    return {
      total: blogs.length,
      published,
      drafts,
    };
  }, [blogs]);

  const deleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    const token = localStorage.getItem("token") || "";

    try {
      const response = await fetch(`https://ca-service.onrender.com/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setBlogs((current) => current.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error(err);
      setError("Could not delete the blog. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-2">
            Admin Dashboard
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Manage Blog Content
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Edit, delete, and publish blog posts from one central dashboard. Search and filter posts by status or keyword.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/change-password"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200/30 hover:bg-slate-900 transition"
          >
            🔐 Change Password
          </Link>

          <Link
            href="/admin/blog/create"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200/30 hover:bg-blue-700 transition"
          >
            + Create New Blog
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total posts</p>
          <p className="mt-4 text-3xl font-bold text-slate-900">{stats.total}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Published</p>
          <p className="mt-4 text-3xl font-bold text-green-600">{stats.published}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Drafts</p>
          <p className="mt-4 text-3xl font-bold text-orange-600">{stats.drafts}</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm mb-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-slate-900">Search and filter posts</h2>
            <p className="text-sm text-gray-500">Use the search box or status filters to quickly find the blog entry you want to edit.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, author, category"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <div className="flex gap-2 flex-wrap">
              {['All', 'published', 'draft'].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${statusFilter === status ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  {status === 'All' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
          Loading posts...
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
          No blogs match your filters. Create a new blog or adjust the search.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredBlogs.map((blog) => (

            <div key={blog._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">{formatDate(blog.createdAt)} • {blog.category || 'Uncategorized'}</p>
                  <h3 className="text-xl font-semibold text-slate-900 truncate">{blog.title}</h3>
                  <p className="text-red-500">
                    Status: {blog.status || "Not set"}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{blog.excerpt || 'No description available.'}</p>

                </div>

                <div className="flex flex-wrap gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${blog.status === "published"
                        ? "bg-green-100 text-green-700"
                        : blog.status === "draft"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    {blog.status
                      ? blog.status.charAt(0).toUpperCase() + blog.status.slice(1)
                      : "Not set"}
                  </span>
                  <Link href={`/admin/blog/edit/${blog._id}`} className="inline-flex items-center rounded-2xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition">
                    Edit
                  </Link>
                  <button onClick={() => deleteBlog(blog._id)} className="inline-flex items-center rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
