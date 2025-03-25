import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div
      key={service._id}
      className=" w-[364px] border border-[#E5E5E5] rounded-[10px] p-6"
    >
      <Image
        src={img}
        width={314}
        height={208}
        alt={title}
        className="rounded-[10px]"
      />
      <h3 className="text-[#444] text-2xl font-bold mt-5">{title}</h3>
      <div className="flex justify-between items-center mt-5">
        <h6 className="text-[#FF3811] text-xl font-semibold">
          Price : ${price}
        </h6>
        <Link href={`/service_details/${_id}`}>
          <FaArrowRight className="text-[#FF3811] text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
