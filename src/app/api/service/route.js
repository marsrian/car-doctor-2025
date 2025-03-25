import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (res) => {
  const session = await getServerSession(authOptions);
  if(session){
    const email = session?.user?.email;
    const bookingCollection = dbConnect(collectionNameObj.bookingsCollection);
    const result = await bookingCollection.find({ email }).toArray();
    return NextResponse.json(result);
  }
  return NextResponse.json({});
}

export const POST = async (req) => {
  const body = await req.json();
  const bookingsCollection = dbConnect(collectionNameObj.bookingsCollection);
  const result = await bookingsCollection.insertOne(body);
  return NextResponse.json(result);
};
