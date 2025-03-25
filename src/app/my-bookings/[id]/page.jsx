import BookingUpdateForm from "@/components/form/BookingUpdateForm";
import { headers } from "next/headers";
import React from "react";

const UpdateBookingPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/my-bookings/${p.id}`, {
    headers: new Headers(await headers()),
  });
    const data = await res.json();
  return (
    <div>
        <BookingUpdateForm data={data} />
    </div>
  )
};

export default UpdateBookingPage;
