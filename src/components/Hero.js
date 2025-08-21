import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] bg-gray-950 text-white p-6 md:p-12 overflow-hidden">
      {/* Radial gradient background effect */}
      <div className="absolute inset-0 bg-radial-gradient"></div>

      {/* Hero content container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse-slow">
            Next-Gen Tech, Unrivaled Performance.
          </span>
        </h1>

        {/* Description text  */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
          Discover a curated collection of cutting-edge gadgets, innovative
          electronics, and powerful devices designed to elevate your digital
          lifestyle. Your future is now.
        </p>

        {/* Call-to-action button */}

        <Link
          href="/products"
          className="inline-block px-8 py-4 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Browse All Products
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
