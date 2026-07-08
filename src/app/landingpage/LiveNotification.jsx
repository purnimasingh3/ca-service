"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const notifications = [
  { name: "Animesh", location: "Mumbai", time: "2 minutes ago" },
  { name: "Karthik", location: "Hyderabad", time: "just booked a consultation" },
  { name: "Neha", location: "Gurugram", time: "5 minutes ago" },
  { name: "Rajesh", location: "Delhi", time: "1 minute ago" },
  { name: "Rohit", location: "Faridabad", time: "10 minutes ago" },
  { name: "Sneha", location: "Delhi", time: "6 minutes ago" },
  { name: "Vikram", location: "Noida", time: "1 minute ago" },
  { name: "Priya", location: "Bangalore", time: "just booked a consultation" },
  { name: "Amit", location: "Udaipur", time: "just booked a free consultation" },
];

export default function LiveNotification() {
  const [toast, setToast] = useState({
    visible: false,
    name: "",
    location: "",
    time: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        notifications[Math.floor(Math.random() * notifications.length)];

      setToast({
        visible: true,
        ...random,
      });

      setTimeout(() => {
        setToast((prev) => ({
          ...prev,
          visible: false,
        }));
      }, 5000);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 bg-white border border-slate-200 shadow-xl rounded-xl p-4 flex items-center gap-3 max-w-sm">

      <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        {toast.name.charAt(0)}
      </div>

      <div className="pr-4">
        <p className="text-xs text-slate-700">
          <span className="font-bold">
            {toast.name}
          </span>{" "}
          from {toast.location}
        </p>

        <p className="text-[11px] text-slate-400 mt-1">
          {toast.time}
        </p>
      </div>

      <button
        onClick={() =>
          setToast((prev) => ({
            ...prev,
            visible: false,
          }))
        }
        className="absolute top-2 right-2"
      >
        <X size={14} />
      </button>
    </div>
  );
}