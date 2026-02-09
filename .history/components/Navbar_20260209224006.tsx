import Link from "next/link";

export default function Navbar() {
  return (
<nav className="w-full bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">
              Vandana<span className="text-gray-800">Airways</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <Link href="/"   className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
>
              Home
            </Link>
            <Link href="/services"  className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
>
              Services
            </Link>
            <Link href="/why-choose-us"   className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
>
              Why Choose Us
            </Link>
            <Link href="/partners"   className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
>
              Partners
            </Link>
            <Link href="/contact"   className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
>
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-600 transition shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
