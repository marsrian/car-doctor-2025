import CheckoutForm from "@/components/form/CheckoutForm";
import PageBanner from "@/components/PageBanner";
import React from "react";

const CheckoutPage = async ({params}) => {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();

  return (
    <div>
      <PageBanner pageName="Checkout" pagePath="Home/Checkout" />
      <h2 className="text-3xl font-fold text-center mt-12">Service Name: {data.title}</h2>
      {/* Your checkout form here */}
      <CheckoutForm data={data} />
    </div>
  );
};

export default CheckoutPage;
