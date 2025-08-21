"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-800 text-white shadow-lg border-b border-gray-700">
      {/* Left side (Logo / Home) */}
      <div className="font-semibold text-2xl">
        <Link href="/">TechFusion</Link>
      </div>

      <div>
        <Link href="/">Home</Link>
        <Link href="/products" className="ml-4">
          Products
        </Link>
        <Link href="/about" className="ml-4">
          About Us
        </Link>
        <Link href="/contact" className="ml-4">
          Contact
        </Link>
        {session && (
          <Link href="/dashboard" className="ml-4">
            Dashboard
          </Link>
        )}
      </div>

      {/* Right side (Links + Auth) */}
      <div className="flex items-center gap-4">
        {/* Conditional Auth Buttons */}
        {status === "loading" ? (
          <span>Loading...</span>
        ) : session ? (
          <>
            <span className="text-sm">Hi, {session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 text-lg"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
