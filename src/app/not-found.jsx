import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-xl mx-auto space-y-8 p-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
        <h1 className="text-8xl sm:text-9xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            404
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Button to navigate home page */}
        <Link
          href="/"
          className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
