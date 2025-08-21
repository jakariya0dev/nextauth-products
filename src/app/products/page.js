"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (products.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        {loading ? (
          <ClipLoader color={color} cssOverride={override} size={50} />
        ) : (
          <p className="text-gray-500">No products available</p>
        )}
      </div>
    );

  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Full Catalog
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover all of our cutting-edge tech products, from accessories to
            main devices.
          </p>
        </div>

        {/* product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700
                         transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              {/* Product image */}
              <div className="relative w-full h-48">
                
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded-t-2xl w-full h-full"
                />
              </div>

              <div className="p-6">
                {/* Product name */}
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                {/* Product description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                {/* Product price */}
                <p className="text-yellow-400 font-bold mb-4 text-xl">
                  Price: ${product.price}{" "}
                  <span className="text-gray-400 line-through text-lg">
                    {product.price + product.price * 0.1}
                  </span>
                </p>

                
                <Link
                  href={`/products/${product.id}`}
                  className="inline-block w-full text-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full
                             transform transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
