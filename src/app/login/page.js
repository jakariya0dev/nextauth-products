"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-xl mx-auto space-y-8 p-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Sign In to Your Dashboard
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Log in with your Google account to manage your product catalog
        </p>

        {/* The login button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="inline-block w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login with Google
        </button>
      </div>
    </section>
  );
}
