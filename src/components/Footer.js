// A complete and responsive footer component for a tech product website.
// It features multiple columns for navigation, a social media section,

import Link from "next/link";

// and a copyright notice. The design aligns with the dark theme of the other components.
const SiteFooter = () => {
  return (
    // Main footer container with dark background and padding.
    // The border-t adds a subtle separator from the main content.
    <footer className="bg-gray-950 text-white border-t border-gray-800 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main grid layout for footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-sm">
          {/* Company Information / Logo Section */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-bold text-lg text-blue-400">TechFusion</h3>
            <p className="text-gray-400 max-w-xs">
              Your destination for cutting-edge electronics and accessories. We
              bring the future to your fingertips.
            </p>
          </div>

          {/* Navigation Links Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/faq"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Twitter SVG Icon */}
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.162-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.528 0-6.386 2.858-6.386 6.386 0 .502.057.991.168 1.46-.035-.002-.07-.003-.105-.003-5.315 0-9.988-2.812-13.13-6.79-.55.945-.863 2.05-.863 3.238 0 2.213 1.125 4.16 2.84 5.295-1.282-.04-2.483-.398-3.535-.978v.08c0 3.09 2.198 5.673 5.12 6.262-.533.146-1.096.223-1.666.223-.407 0-.806-.04-1.196-.114.811 2.532 3.167 4.382 5.962 4.432-2.185 1.713-4.94 2.735-7.946 2.735-.518 0-1.026-.03-1.527-.086.994 3.064 3.913 5.163 7.373 5.163 8.847 0 13.682-7.319 13.682-13.682 0-.209-.004-.417-.013-.625.94-1.033 1.756-2.32 2.404-3.79z" />
                </svg>
              </a>
              {/* Instagram SVG Icon */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.149-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.668.014-4.944.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.277-.072 1.686-.072 4.944s.014 3.668.072 4.944c.2 4.357 2.618 6.78 6.98 6.98 1.277.058 1.686.072 4.944.072s3.668-.014 4.944-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.276.073-1.685.073-4.944s-.014-3.668-.073-4.944c-.198-4.357-2.618-6.78-6.979-6.98-1.277-.059-1.687-.073-4.944-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
                </svg>
              </a>
              {/* LinkedIn SVG Icon */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.769s.784-1.769 1.75-1.769 1.75.79 1.75 1.769-.783 1.769-1.75 1.769zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice section */}
        <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          &copy; {new Date().getFullYear()} TechFusion. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
