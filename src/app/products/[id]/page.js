"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

export default function ProductDetails({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const color = "#4A90E2"; // Spinner color
  const override = {
    display: "block",
    margin: "0 auto",
    borderWidth: "4px",
    borderStyle: "solid",
    borderRadius: "50%",
    borderTopColor: color,
    borderColor: color,
  };
  const { id } = React.use(params);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    toast.success("Product added to cart!");
  };

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        {loading ? (
          <ClipLoader color={color} cssOverride={override} size={50} />
        ) : (
          <p className="text-gray-500">No product found</p>
        )}
      </div>
    );

  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12 min-h-screen">
      <Toaster />
      <div className="max-w-7xl mx-auto">
        {/* Product details container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Product image section */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-700">
            <Image
              width={500}
              height={500}
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product information section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {product.name}
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Features list */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-200">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-gray-400">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Price and Add to Cart button */}
            <div className="pt-6 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center gap-6">
              <p className="text-yellow-400 font-bold text-3xl sm:text-4xl">
                ${product.price}
              </p>
              <button
                onClick={handleAddToCart}
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
