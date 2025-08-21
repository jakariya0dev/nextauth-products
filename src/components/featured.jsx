"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const ProductHighlights = () => {
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
        setProducts(data.slice(0, 3));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={color} cssOverride={override} size={50} />
      </div>
    );
  }
  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12">
      {/* Section header with a subtle gradient effect on the title */}
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Featured Products
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our hand-picked collection of the latest and most popular
            tech innovations.
          </p>
        </div>

        {/* Responsive grid for the product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700
                       transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              {/* Product image with rounded corners */}
              <Image
                width={500}
                height={500}
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                {/* Product name */}
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                {/* Product description with limited lines */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {product.description}
                </p>
                {/* Call-to-action link/button */}
                <a
                  href={product.link}
                  className="inline-block px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full
                           transform transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button to browse more products */}
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Browse All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
