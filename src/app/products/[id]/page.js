"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
    <section className="min-h-screen bg-gray-100 flex items-center justify-center text-gray-700">
      
      <div className="p-10 bg-gray-50 shadow-md rounded-lg space-y-2">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h1 className="text-2xl">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-lg font-semibold mt-2">
          {" "}
          <span>Price:</span> ${product.price}
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link
            href="/products"
            className="inline-block mt-4 px-4 py-2 bg-transparent border border-blue-600 text-gray-700 rounded hover:bg-blue-700 hover:text-white transition-colors"
          >
            Back to products
          </Link>
          <Link
            href="/products"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </section>
  );
}
