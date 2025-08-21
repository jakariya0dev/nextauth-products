"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    features: "",
  });

  if (status === "loading") return <p>Checking authentication...</p>;

  if (!session) {
    signIn();
    return null;
  }

  // Handle changes to form inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        image: formData.image,
        features: formData.features.split("\n").filter(Boolean),
      };

      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      toast.success("Product added successfully!");

      // Reset the form after submission.
      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
        features: "",
      });
    } catch (error) {
      console.error("Failed to add product:", error);
      toast.error("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12 min-h-screen">
      {/* The Toaster component */}
      <Toaster />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Add a New Product
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Fill out the form below to add a new item to your product catalog.
          </p>
        </div>

        {/* Product form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 space-y-6"
        >
          {/* Product Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 font-semibold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Quantum Headset"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-300 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="e.g., Immersive audio and spatial tracking for a new dimension of sound."
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-gray-300 font-semibold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 249.99"
              step="0.01"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Image Link */}
          <div>
            <label
              htmlFor="image"
              className="block text-gray-300 font-semibold mb-2"
            >
              Image Link
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="e.g., https://example.com/image.jpg"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Features */}
          <div>
            <label
              htmlFor="features"
              className="block text-gray-300 font-semibold mb-2"
            >
              Features{" "}
              <span className="text-gray-500 text-sm">(one per line)</span>
            </label>
            <textarea
              id="features"
              name="features"
              value={formData.features}
              onChange={handleChange}
              rows="4"
              placeholder="e.g., 
- Spatial audio tracking
- Noise-cancelling microphone"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              disabled={loading}
              type="submit"
              className="inline-block w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
