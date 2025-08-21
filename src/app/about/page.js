import Link from "next/link";

const AboutPage = () => {
  return (
    <section className="bg-gray-950 text-white py-16 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Main Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Our Company
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We are dedicated to building innovative products that empower and
            inspire.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to create a seamless fusion of design and technology,
            crafting products that not only perform exceptionally but also
            enhance the lives of our users. We believe that great technology
            should be intuitive, accessible, and beautiful. By focusing on
            quality and user experience, we aim to set a new standard for
            excellence in the industry.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            Founded in a small garage with a big vision, our company has grown
            from a passion project into a global brand. Our journey has been
            defined by a relentless pursuit of innovation and a commitment to
            our community. Every product we design is a testament to the hard
            work and dedication of our team, driven by the goal of pushing the
            boundaries of what&#39;s possible.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center pt-8">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">
            Ready to Explore?
          </h3>
          <Link
            href="/products"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            View Our Products
          </Lin>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
