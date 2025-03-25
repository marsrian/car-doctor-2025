"use client"
import { useRouter } from "next/navigation";
import React from "react";

const MyBookingButton = ({id}) => {
    const router = useRouter();
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: "DELETE",
        });
        const result = await response.json();
        console.log(result);
        router.refresh();
    };
  return (
    <>
      <button onClick={() =>handleDelete(id)} className="text-xl text-white font-semibold rounded-[10px] bg-[#FF3811] py-2 px-5">
        Delete
      </button>
    </>
  );
};

export default MyBookingButton;
