import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AllServiceName = async () => {
  const serviceCollection = await dbConnect(
    collectionNameObj.servicesCollection
  );
  const servicesAll = await serviceCollection.find({}).toArray();
  return (
    <div>
      {servicesAll.map((serv) => (
        <div
          key={serv._id}
          className="flex justify-between items-center mt-5 p-[18px] bg-white rounded-[5px]"
        >
          <h6 className="text-[#151515] font-semibold">{serv.title}</h6>
          <Link href={`/service_details/${serv._id}`}>
            <FaArrowRight className="text-[#FF3811] text-2xl" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllServiceName;
