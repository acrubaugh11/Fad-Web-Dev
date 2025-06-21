export default function Footer() {
  return (
    <footer className="bg-gray-900 border text-white px-6 cinzel-font">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold">Fad Web & Development</h3>
          <p className="mt-2 text-sm text-gray-400">
            Bringing your vision to life, one pixel at a time.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#services" className="hover:text-gray-300 transition">Services</a>
          <a href="#portfolio" className="hover:text-gray-300 transition">Portfolio</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fad Web & Development. All rights reserved.
      </div>
    </footer>
  )
}