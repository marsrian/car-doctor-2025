import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[600px] ">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/images/homeCarousel/1.jpg')] bg-cover bg-center rounded-[10px]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-transparent rounded-[10px]"></div>

      <div className="flex flex-col justify-center h-full pl-20">
        <h1 className="text-white text-6xl font-bold leading-[75px] z-10">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-lg text-white mt-7 z-10">
          There are many variations of passages of available, but <br /> the
          majority have suffered alteration in some form
        </p>
        <div className="z-10 mt-[30px]">
          <button className="text-lg font-bold text-white py-4 px-5 bg-[#FF3811] rounded-[5px] mr-5">
            Discover More
          </button>
          <button className="text-lg font-bold text-white py-4 px-5 rounded-[5px] border border-white">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
