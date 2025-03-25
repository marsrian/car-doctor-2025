import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "../login/components/SocialLogin";

const SignUpPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
      <Image
        src="/assets/images/login/login.svg"
        width={400}
        height={500}
        alt="login"
      />
      <div className="p-16 border border-[#D0D0D0] rounded-[10px] w-[611px]">
        <h1 className="text-[#444] text-center text-[40px] font-semibold">
          Sign Up
        </h1>
        <RegisterForm />
        <p className="text-[#444] text-center text-lg font-medium mt-7">
          Or Sign Up with
        </p>
        <SocialLogin />
        <p className="text-[#737373] text-lg text-center mt-12">
        Already have an account? <Link href="/login" className="text-[#FF3811] font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
