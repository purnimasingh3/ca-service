"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
    const router = useRouter();

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleChangePassword = async (e) => {
        e.preventDefault();

        setError("");
        setMessage("");

        if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.");
            return;
        }

        if (newPassword.length < 8) {
            setError("New password must be at least 8 characters.");
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/admin/login");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "https://ca-service.onrender.com/api/auth/change-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                    body: JSON.stringify({
                        currentPassword,
                        newPassword,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Password change failed.");
                return;
            }

            setMessage("Password changed successfully.");

            // Clear old session
            localStorage.removeItem("token");
            localStorage.removeItem("role");

            setTimeout(() => {
                router.push("/admin/login");
            }, 1500);

        } catch (error) {
            console.error("Change password error:", error);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">

                    <h1 className="text-2xl font-bold text-slate-900">
                        Change Password
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Update your admin account password.
                    </p>

                    {error && (
                        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    {message && (
                        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                            {message}
                        </div>
                    )}

                    <form
                        onSubmit={handleChangePassword}
                        className="mt-6 space-y-5"
                    >

                        <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                                Current Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showCurrent ? "text" : "password"}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    placeholder="Enter current password"
                                    required
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowCurrent(!showCurrent)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                                    aria-label={showCurrent ? "Hide password" : "Show password"}
                                >
                                    {showCurrent ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                                New Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showNew ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    required
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowNew(!showNew)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                                    aria-label={showNew ? "Hide password" : "Show password"}
                                >
                                    {showNew ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                                Confirm New Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm new password"
                                    required
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                                    aria-label={showConfirm ? "Hide password" : "Show password"}
                                >
                                    {showConfirm ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:bg-slate-400"
                        >
                            {loading ? "Changing Password..." : "Change Password"}
                        </button>

                    </form>

                    <button
                        onClick={() => router.push("/admin/dashboard")}
                        className="w-full mt-4 text-sm font-semibold text-slate-500 hover:text-slate-700"
                    >
                        ← Back to Dashboard
                    </button>

                </div>
            </div>
        </div>
    );
}