"use client";
import React, { useState } from "react";
import Link from "next/link";


const ContactForm: React.FC = () => {
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Takk for at du kontaktet oss! Vi svarer deg snart.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
          <div className="w-[1920px] h-[110px] fixed bg-white top-0">
        {/* Navbar */}
        <img
          className="w-[250px] h-[70px] left-[136px] top-[24px] absolute"
          src="https://s3-alpha-sig.figma.com/img/e09f/a636/711044123ee6be8d5c796f48f6f5dd42?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1em65zPgjGEgkOEK6eIwba2KlE~vdZ3yFyjdPp4~GAYb0RK5lxVcw-a6~yGql5APUSL44CSApLNND3aPS~7QQ7FUxManlqvx0XLzbZeseUqjpKRry0q6-eI3BEHA9iEqL~RWx3pLfADZFCQv6crdq8C2LnEsOnVB37l5w-5RcuHedG19atfBjxmbySmwLSjPASytJj3md6a7LljGL3SrRZHIXfj9UjeWSzDAUbALFv2FzeDY7dKfl8faz8RfDrIqVT60TB881CzW1c-L6AeA2UzY8vjSoOwux8rAzuXO9PyBs-~VREq8eb7Mm~v-GksPjmp0z9T09QEQ6ubzzZHKQ__"
        />
        <div 
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
        className="left-[1350px] top-[27px] absolute text-black text-3xl font-normal font-['Inter'] hover:text-[#04295d] hover:font-semibold transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
          <Link href="/.">Hjem</Link>
        </div>
        <div 
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="left-[1450px] top-[27px] absolute text-black text-3xl font-normal font-['Inter'] hover:text-[#04295d] hover:font-semibold transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
          <Link href="/.">Om</Link>
        </div>
        <div 
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        className="left-[1530px] top-[27px] absolute text-black text-3xl font-normal font-['Inter'] hover:text-[#04295d] hover:font-semibold transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
          <Link href="/.">Prosjekter</Link>
        </div>
        <div className="left-[1700px] top-[27px] absolute text-black text-3xl font-normal font-['Inter'] hover:text-[#04295d] hover:font-semibold transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Kontakt Oss</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Melding
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#04295d] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#04293d] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send melding
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;