"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const BookingUpdateForm = ({ data }) => {
    const router = useRouter();
  const { data: session } = useSession();
  const handleBookService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const bookingPayload = {
      date,
      phone,
      address,
    };

    const res = await fetch(`http://localhost:3000/api/my-bookings/${data._id}`, {
      method: "PATCH",
      body: JSON.stringify(bookingPayload),
    });
    const postedResponse = await res.json();
    toast.success("Booking service updated successfully!🎉");
    router.push("/my-bookings");
    console.log("Updated Data:",postedResponse);
  };

  return (
    <form
      onSubmit={handleBookService}
      className="bg-[#F3F3F3] rounded-[10px] p-24 mt-20"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <input
          defaultValue={session?.user?.name}
          readOnly
          type="text"
          name="name"
          placeholder="First Name"
          className="text-[#A2A2A2] leading-7 bg-white rounded-[10px] px-6 py-4 w-full focus:outline-none"
        />
        <input
          defaultValue={session?.user?.email}
          readOnly
          type="email"
          name="email"
          placeholder="Your Email"
          className="text-[#A2A2A2] leading-7 bg-white rounded-[10px] px-6 py-4 w-full focus:outline-none"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <input
          defaultValue={data.service_price}
          readOnly
          type="text"
          name="price"
          placeholder="price"
          className="text-[#A2A2A2] leading-7 bg-white rounded-[10px] px-6 py-4 w-full focus:outline-none"
        />

        <input
          defaultValue={data.date}
          type="date"
          name="date"
          placeholder="Date"
          className="text-[#A2A2A2] leading-7 bg-white rounded-[10px] px-6 py-4 w-full focus:outline-none"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <input
          defaultValue={data.phone}
          type="text"
          name="phone"
          placeholder="Your Phone"
          className="text-[#A2A2A2] leading-7 bg-white rounded-[10px] px-6 py-4 w-full focus:outline-none"
        />
        <input
          defaultValue={data.address}
          type="text"
          name="address"
          placeholder="Address"
          className="text-[#A2A2A2] leading-7 bg-white rounded-[10px] px-6 py-4 w-full focus:outline-none"
        />
      </div>
      <input
        type="submit"
        className="text-white text-lg font-semibold bg-[#FF3811] rounded-[5px] mt-6 w-full py-4"
        value="Book Now"
      />
    </form>
  );
};

export default BookingUpdateForm;
