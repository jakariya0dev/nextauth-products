"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Checking authentication...</p>;
  if (!session) {
    signIn();
    return null;
  }

  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Welcome to Your Admin Dashboard
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Manage your product catalog, view analytics, and control your
          store&#39;s content from a single place.
        </p>

        {/* Action Button */}

        <Link
          href="dashboard/add-product"
          className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add New Product
        </Link>

        {/*  dashboard content. */}
        <div className="mt-12 w-full">
          <h2 className="text-3xl font-bold text-gray-200 mb-6">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
              <p className="text-gray-400">Total Products</p>
              <p className="text-4xl font-bold mt-2">124</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
              <p className="text-gray-400">Orders This Month</p>
              <p className="text-4xl font-bold mt-2">35</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
              <p className="text-gray-400">Revenue</p>
              <p className="text-4xl font-bold mt-2">$24,500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
