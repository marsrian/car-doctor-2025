"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-between items-center py-12">
      <Image src="/assets/logo.svg" alt="Logo" width={101} height={101} />
      <ul className="flex gap-6 font-semibold text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/my-bookings">My Bookings</Link>
      </ul>
      <div className="flex gap-6 items-center">
        <FaShoppingCart />
        <FaSearch />
        {status == "loading" ? (
          <p>Loading...</p>
        ) : status == "unauthenticated" ? (
          <Link href="/signup">Sign In</Link>
        ) : (
          <>
            <p>{session.user.name}</p>
            <Image src={session.user.image} width={20} height={20} alt="user" />
            <button
              onClick={() => signOut()}
              className="text-[#FF3811] text-lg font-semibold"
            >
              Sign Out
            </button>
          </>
        )}
        <button className="text-[#FF3811] text-lg font-semibold border-1 border-[#FF3811] rounded-lg px-7 py-4">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
