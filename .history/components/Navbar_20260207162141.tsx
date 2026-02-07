import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">
              Courier<span className="text-gray-800">Portfolio</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <Link href="/services" className="hover:text-orange-600">
              Services
            </Link>
            <Link href="/why-choose-us" className="hover:text-orange-600">
              Why Choose Us
            </Link>
            <Link href="/partners" className="hover:text-orange-600">
              Partners
            </Link>
            <Link href="/contact" className="hover:text-orange-600">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
