"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  if (status === "loading") return <p>Checking authentication...</p>;

  if (!session) {
    signIn(); // redirect to login
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: parseFloat(e.target.price.value),
    };

    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    alert("Product added!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="border p-2 w-full"
          required
        />
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Price"
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
