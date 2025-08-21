"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Left side (Logo / Home) */}
      <div className="font-bold text-xl">
        <Link href="/">MyApp</Link>
      </div>

      {/* Right side (Links + Auth) */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>

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
            className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
