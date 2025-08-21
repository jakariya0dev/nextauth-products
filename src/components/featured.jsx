// Note: In a real Next.js project, you would use the 'next/link' component
// instead of a standard 'a' tag for client-side navigation.
// import Link from 'next/link';

// Mock product data to showcase the component. In a real application,
// this data would be fetched from an API or a CMS.
const products = [
  {
    id: 1,
    name: "Quantum Headset",
    description:
      "Immersive audio and spatial tracking for a new dimension of sound. Experience every detail with clarity and depth.",
    imageUrl:
      "https://images.unsplash.com/photo-1546435770-ce6c0853503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "/products/quantum-headset",
  },
  {
    id: 2,
    name: "Aether Keyboard",
    description:
      "A mechanical keyboard with customizable RGB lighting and a minimalist design. Built for speed and precision.",
    imageUrl:
      "https://images.unsplash.com/photo-1618384874034-e40854d9c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    link: "/products/aether-keyboard",
  },
  {
    id: 3,
    name: "Chrono Mouse",
    description:
      "Ergonomic gaming mouse with ultra-low latency and programmable buttons. Perfect for competitive play.",
    imageUrl:
      "https://images.unsplash.com/photo-1579762580796-0e120d5c02b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit-crop&w=1770&q=80",
    link: "/products/chrono-mouse",
  },
];

// A dynamic and visually appealing section to showcase key products.
// It uses a responsive grid and dark theme to align with the hero section's style.
const ProductHighlights = () => {
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
              <img
                src={product.imageUrl}
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
        {/* The mt-12 class adds a top margin, and text-center centers the button */}
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
