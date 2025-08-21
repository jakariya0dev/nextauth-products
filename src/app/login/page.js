"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl mb-4">Login</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
