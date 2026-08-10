"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://ca-service.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed. Please try again.");
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-3">
              Welcome Back
            </p>
            <h1 className="text-3xl font-bold text-slate-900">Admin Login</h1>
            <p className="mt-3 text-slate-600">Sign in to manage your blog posts</p>
          </div>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-200/30 hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="text-sm text-slate-500">or</span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link href="/admin/login" className="font-semibold text-blue-600 hover:text-blue-700">
              Create one
            </Link>
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          © 2026 CA Services. All rights reserved.
        </p>
      </div>
    </div>
  );
}
