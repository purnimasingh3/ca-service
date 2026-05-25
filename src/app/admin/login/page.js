"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] =
    useState("");
  const router = useRouter();

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://ca-service.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            email,
            password
          })
        }
      );
      const data =
        await response.json();
      console.log(data);

      if (data.token) {
        localStorage.setItem(
          "token",
          data.token
        )
        localStorage.setItem(
          "role",
          data.role
        );
        alert("Login Success");
        router.push("/blogs");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Email:</label>
          <input
            placeholder="Enter your Email"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) =>
              setEmail(e.target.value)
            }
            suppressHydrationWarning={true}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) =>
              setPassword(e.target.value)
            }
            suppressHydrationWarning={true}
          />
        </div>


        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          onClick={handleLogin}
          suppressHydrationWarning={true}
        >
          Login
        </button>

      </div>
    </div>
  );
}