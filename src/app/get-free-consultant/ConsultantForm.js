"use client";

import { useState } from "react";

export default function ConsultantForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
          alert(`Thank you ${formData.name}! Our senior investment consultant will contact you shortly.`);
          setFormData({
            name: '',
            email: '',  
            contact: '',
            service: '',
            message: '',  
          });
      }else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to send message. Please try again later.");
      }
       
      }catch (error) {

      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    } 
  };
    return (
        <form className="consultant-form" onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                suppressHydrationWarning={true}
            />

            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                suppressHydrationWarning={true}
            />

            <input
                type="text"
                name="contact"
                placeholder="Phone Number"
                value={formData.contact}
                onChange={handleChange}
                required
                suppressHydrationWarning={true}
            />

            <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                suppressHydrationWarning={true}
            >
                <option value="">Select Service</option>
                <option>GST Registration</option>
                <option>ITR Filing</option>
                <option>Private Limited Company</option>
                <option>Trademark Registration</option>
                <option>Virtual CFO </option>
                <option>Other</option>
            </select>

            <textarea
                name="message"
                placeholder="Write Your Query"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                suppressHydrationWarning={true}
            />

            <button type="submit"
                suppressHydrationWarning={true}>
                Get Free Consultation
            </button>

        </form>
    );
}