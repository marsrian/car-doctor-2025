import React from "react";
import Image from "next/image";
import MyBookingButton from "@/app/my-bookings/components/MyBookingButton";
import Link from "next/link";

const MyAllBookings = ({ data }) => {
  return (
    <table className="w-full mt-12">
      <thead className="border-b border-stone-200 bg-stone-100 text-sm font-medium text-stone-600">
        <tr>
          <th className="px-2.5 py-2 text-start font-medium">Image</th>
          <th className="px-2.5 py-2 text-start font-medium">Title</th>
          <th className="px-2.5 py-2 text-start font-medium">Price</th>
          <th className="px-2.5 py-2 text-start font-medium">Phone</th>
          <th className="px-2.5 py-2 text-start font-medium">Address</th>
          <th className="px-2.5 py-2 text-start font-medium">Date</th>
          <th className="px-2.5 py-2 text-start font-medium">Action</th>
        </tr>
      </thead>
      <tbody className="group text-sm text-stone-800">
        {data.map((item) => (
          <tr
            key={item._id}
            className="border-b border-stone-200 last:border-0"
          >
            <td className="p-3">
              <Image
                src={item.service_img}
                width={50}
                height={50}
                alt="service name"
                className=""
              />
            </td>
            <td className="p-3">{item.service_name}</td>
            <td className="p-3">${item.service_price}</td>
            <td className="p-3">{item.phone}</td>
            <td className="p-3">{item.address}</td>
            <td className="p-3">{item.date}</td>
            <td className="p-3 flex space-x-2">
              <Link href={`/my-bookings/${item._id}`}>
                <button className="text-xl text-white font-semibold rounded-[10px] bg-[#FF3811] py-2 px-5">
                  Edit
                </button>
              </Link>
              <MyBookingButton id={item._id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyAllBookings;
