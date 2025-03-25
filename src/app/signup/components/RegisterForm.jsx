"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-8">
      <label htmlFor="name" className="text-[#444] font-semibold">
        Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="text-[#A2A2A2] leading-7 border border-[#E8E8E8] rounded-[10px] py-4 px-6 mt-3"
      />
      <label htmlFor="email" className="text-[#444] font-semibold mt-6">
        Email
      </label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="text-[#A2A2A2] leading-7 border border-[#E8E8E8] rounded-[10px] py-4 px-6 mt-3"
      />
      <label htmlFor="password" className="text-[#444] font-semibold mt-6">
        Password
      </label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="text-[#A2A2A2] leading-7 border border-[#E8E8E8] rounded-[10px] py-4 px-6 mt-3"
      />
      <label
        htmlFor="confirmPassword"
        className="text-[#444] font-semibold mt-6"
      >
        Confirm Password
      </label>
      <input
        type="password"
        placeholder="Confirm Password"
        className="text-[#A2A2A2] leading-7 border border-[#E8E8E8] rounded-[10px] py-4 px-6 mt-3"
      />
      <button
        type="submit"
        className="text-white text-lg font-semibold leading-7 bg-[#FF3811] rounded-[10px] py-4 mt-7"
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
