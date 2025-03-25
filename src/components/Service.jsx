import React from "react";
import Title from "./Title";

import ServiceCard from "./ServiceCard";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

const Service = async () => {
  const serviceCollection = await dbConnect(collectionNameObj.servicesCollection);
  const services = await serviceCollection.find({}).toArray();

  return (
    <div className="mt-32">
      <Title title="Service" />
      <Title subTitle="Our Service Area" />
      <Title description="the majority have suffered alteration in some form, by injected humour, or randomise words which don't look even slightly believable." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
