import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-between mt-32">
      <div className="relative">
        <Image
          src="/assets/images/about_us/person.png"
          alt="person"
          width={460}
          height={473}
        />
        <Image
          src="/assets/images/about_us/parts.png"
          alt="person"
          width={327}
          height={332}
          className="absolute top-[240px] left-[200px]"
        />
      </div>
      <div>
        <h6 className="text-[#FF3811] text-xl font-bold">About Us</h6>
        <h1 className="text-[45px] font-bold mt-5">
          We are qualified <br /> & of experience <br /> in this field
        </h1>
        <p className="w-[489px] text-[#737373] Capitalize mt-[30px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="w-[489px] text-[#737373] Capitalize mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="text-lg font-bold text-white py-4 px-5 bg-[#FF3811] rounded-[5px] mt-[30px]">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
