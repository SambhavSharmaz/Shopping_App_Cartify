const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Address */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Address</h4>
          <p>123 Main Street</p>
          <p>Phagwara, India</p>
          <p>123-456-7890</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} Cartify. All rights reserved.
      </div>
    </footer>
  );
};

export { Footer };
