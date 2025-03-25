import AllServiceName from "@/components/AllServiceName";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/service/${p.id}`);
  const service = await res.json();

  return (
    <div>
      <PageBanner pageName={service.title} pagePath="Home / Services" />
      <div className="mt-32 grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <Image
            src={service.img}
            alt="service_details"
            width={752}
            height={400}
            className="rounded-[10px]"
          />
          <h1 className="text-4xl font-bold mt-12">{service.title}</h1>
          <p className="text-[#737373] capitalize leading-7 w-[752px] mt-7">
            {service.description}
          </p>
          <div className="grid grid-cols-2 gap-6 w-[752px] mt-7">
            {service.facility.map((fac) => (
              <div
                key={fac.name}
                className="rounded-[10px] bg-[#F3F3F3] border-t-2 border-t-[#FF3811] p-10"
              >
                <h1 className="text-xl font-bold text-[#444]">{fac.name}</h1>
                <p className="text-[#737373] capitalize mt-[10px] leading-7">
                  {fac.details}
                </p>
              </div>
            ))}
          </div>
          <h1 className="text-[#151515] text-4xl font-bold mt-12">
            3 Simple Steps to Process
          </h1>
          <div className="grid grid-cols-3 gap-6 mt-7">
            <div className="flex flex-col items-center py-10 px-9 rounded-[10px] border border-[#E8E8E8]">
              <h5 className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                >
                  <circle
                    cx="41.5"
                    cy="41.5"
                    r="41.5"
                    fill="#FF3811"
                    fillOpacity="0.1"
                  />
                  <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                </svg>
                <span className="absolute top-7 left-8 text-white text-xl font-bold">
                  01
                </span>
              </h5>
              <h3 className="text-[#151515] text-xl font-bold mt-5 uppercase">
                Step One
              </h3>
              <p className="text-[#737373] capitalize leading-6 mt-5 w-[163px] text-center">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="flex flex-col items-center py-10 px-9 rounded-[10px] border border-[#E8E8E8]">
              <h5 className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                >
                  <circle
                    cx="41.5"
                    cy="41.5"
                    r="41.5"
                    fill="#FF3811"
                    fillOpacity="0.1"
                  />
                  <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                </svg>
                <span className="absolute top-7 left-8 text-white text-xl font-bold">
                  02
                </span>
              </h5>
              <h3 className="text-[#151515] text-xl font-bold mt-5 uppercase">
                Step Two
              </h3>
              <p className="text-[#737373] capitalize leading-6 mt-5 w-[163px] text-center">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="flex flex-col items-center py-10 px-9 rounded-[10px] border border-[#E8E8E8]">
              <h5 className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                >
                  <circle
                    cx="41.5"
                    cy="41.5"
                    r="41.5"
                    fill="#FF3811"
                    fillOpacity="0.1"
                  />
                  <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                </svg>
                <span className="absolute top-7 left-8 text-white text-xl font-bold">
                  03
                </span>
              </h5>
              <h3 className="text-[#151515] text-xl font-bold mt-5 uppercase">
                Step Three
              </h3>
              <p className="text-[#737373] capitalize leading-6 mt-5 w-[163px] text-center">
                It uses a dictionary of over 200 .
              </p>
            </div>
          </div>

          {/* Side Part: */}
        </div>
        <div className="col-span-4">
          <div className="bg-[#F3F3F3] rounded-[10px] p-10">
            <h1 className="text-2xl font-bold text-[#151515]">Services</h1>
            <div>
              <AllServiceName />
            </div>
          </div>
          <div className="bg-[#151515] text-white rounded-[10px] p-10 mt-[30px]">
            <h3 className="text-2xl font-bold">Download</h3>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-3xl" />
                <div>
                  <h6 className="text-lg font-semibold">Our Brochure</h6>
                  <p className="text-[#A2A2A2]">Download</p>
                </div>
              </div>
              <button className="bg-[#FF3811] text-2xl rounded-[5px] p-4">
                <FaArrowRight />
              </button>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-3xl" />
                <div>
                  <h6 className="text-lg font-semibold">Company Details</h6>
                  <p className="text-[#A2A2A2]">Download</p>
                </div>
              </div>
              <button className="bg-[#FF3811] text-2xl rounded-[5px] p-4">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <h1 className="text-[#151515] text-4xl font-bold mt-7">
            Price: ${service.price}
          </h1>
          <button className="text-white text-lg font-semibold bg-[#FF3811] rounded-[5px] mt-7 w-full py-4">
            <Link href={`/checkout/${service._id}`}>Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
