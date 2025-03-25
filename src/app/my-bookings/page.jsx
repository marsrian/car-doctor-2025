import PageBanner from "@/components/PageBanner";
import MyAllBookings from "@/components/tables/MyAllBookings";
import { headers } from "next/headers";

const fetchMyBookings = async () => {
    const response = await fetch("http://localhost:3000/api/service", {
        headers: new Headers(await headers()),
    });
    const result = await response.json();
    return result;
}

const MyBookingsPage = async () => {
    const data  = await fetchMyBookings();
  return (
    <div>
      <PageBanner pageName="Cart Details" pagePath="Home - Booking Details" />
      <MyAllBookings data={data} />
    </div>
  );
};

export default MyBookingsPage;
