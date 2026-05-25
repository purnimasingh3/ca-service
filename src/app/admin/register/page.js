  "use client";

  import { useState } from "react";
  import { useRouter } from "next/navigation";

  export default function Register() {

    const router = useRouter();

    const [name, setName] =
      useState("");

    const [email, setEmail] =
      useState("");

    const [password, setPassword] =
      useState("");

    const handleRegister =
      async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              name,
              email,
              password
            })
          }
        );

        const data =
          await response.json();

        alert("Register Success");

        router.push("/admin/login");

      } catch (error) {

        console.log(error);

      }

    };

    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Admin Register
          </h1>

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e)=>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e)=>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />

          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Register
          </button>

        </div>

      </div>

    );
  }