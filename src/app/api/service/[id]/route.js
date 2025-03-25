import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const p = await params;
  const query = { _id: new ObjectId(p.id) };
  const bookingCollection = await dbConnect(
    collectionNameObj.bookingsCollection
  );

  // validation
  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOk = session?.user?.email === currentBooking?.email;

  if (isOwnerOk) {
    // delete user specific booking
    const deleteResponse = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings")
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "You are not authorized to delete this booking.",
      },
      { status: 401 }
    );
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const serviceCollection = await dbConnect(
    collectionNameObj.servicesCollection
  );
  const service = await serviceCollection.findOne({
    _id: new ObjectId(p.id),
  });
  return NextResponse.json(service);
};
